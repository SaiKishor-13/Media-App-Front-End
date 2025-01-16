import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { addCategoryAPI, getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from "../services/allApi";
import VideoCard from './VideoCard';

const Category = ({ setRemoveVideoResponseFromCategory, removeVideoResponseFromView }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategory();
  }, [removeVideoResponseFromView]);

  const handleAddCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] };
      await addCategoryAPI(categoryDetails);
      handleClose();
      setCategoryName("");
      getAllCategory(); // Fetch categories after adding a new one
    } else {
      alert("Please fill the form completely");
    }
  };

  const getAllCategory = async () => {
    const response = await getAllCategoryAPI();
    setAllCategories(response.data);
  };

  const deleteCategory = async (id) => {
    await removeCategoryAPI(id);
    getAllCategory(); // Fetch categories after deleting one
  };

  const dragOverCategory = (e) => {
    e.preventDefault();
  };

  const videoDropOverCategory = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("id");
    console.log(`video id:${videoId} Dropped inside category id: ${categoryId}`);
    // add video into category
    // get dropping video details
    const { data } = await getSingleVideoAPI(videoId);
    console.log(data);
    // get details dropping category and insert videoDetails of category allVideos
    const selectedCategory = allCategories?.find(item => item.id == categoryId);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    // update selected category into json file - call api
    await updateCategoryAPI(categoryId, selectedCategory);
    // remove video from allVidoes - call api
    const response = await removeVideoAPI(videoId);
    // pass response to view component
    setRemoveVideoResponseFromCategory(response);
    // get all updated categories
    getAllCategory();
  };

  const categoryVideoDragStart = (e, categoryId, video) => {
    console.log(`Video with id: ${video.id} from category id : ${categoryId} has started dragging`);
    let dataShare = { categoryId, video };
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare));
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Categories</h3>
        <button
          onClick={handleShow}
          className="btn btn-success rounded-circle fw-bolder ms-5"
        >
          +
        </button>
      </div>

      <div className="container-fluid mt-3">
        {allCategories?.length > 0 ?
          allCategories?.map(categoryDetails => (
            <div droppable="true" onDragOver={e => dragOverCategory(e)} onDrop={e => videoDropOverCategory(e, categoryDetails?.id)} className="border rounded p-3 mb-2">
              <div className="d-flex justify-content-between">
                <h5>{categoryDetails.categoryName}</h5>
                <button onClick={() => deleteCategory(categoryDetails?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
              {/* each category video */}
              <div className="row mt-2 mb-3">
                {categoryDetails?.allVideos?.length > 0 &&
                  categoryDetails?.allVideos?.map(video => (
                    <div draggable={true} onDragStart={e => categoryVideoDragStart(e, categoryDetails?.id, video)} key={video?.id} className="col-md-4">
                      <VideoCard displayData={video} insideCategory={true} />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
          :
          <div className="text-danger fw-bolder">No categories added yet</div>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputName"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
