import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allApi'

const View = ({videoUploadResponse,removeVideoResponseFromCategory,setRemoveVideoResponseFromView}) => {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[videoUploadResponse,deleteVideoResponse,removeVideoResponseFromCategory])

  const getAllVideos = async()=>{
    try{
      const response = await getAllVideoAPI()
      console.log(response);
      setAllVideos(response.data)
    }catch(err){
      
    }
  }
  // console.log(allVideos)
  const dragOverView = (e)=>{
    e.preventDefault()
  }

const categoryVideoDrop = async (e)=>{
  const {categoryId,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(`Video id: ${video.id} from category id : ${categoryId} dropped in view component`)
  // remove video from category
  // get category details from where we have to remove video
  const {data} = await getSingleCategoryAPI(categoryId)
  // update category after removing video
  const updatedAllvideos = data?.allVideos?.filter(item=>item.id!=video?.id)
  const updateCategoryDetails = {id:categoryId,categoryName:data.categoryName,allVideos:updatedAllvideos}
  const response = await updateCategoryAPI(categoryId,updateCategoryDetails)
  // pass response to category
  setRemoveVideoResponseFromView(response)
  // video must be inserted to allVideos
  await uploadVideoAPI(video)
  getAllVideos()
}


  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
        {
          allVideos.length>0?
          allVideos?.map(video=>(
            <Col key={video?.id} className='mt-3 mb-5' sm={12} md={6} lg={4}>
          <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData = {video} />
        </Col>
          ))
          :
          <div className="text-danger fw-bolder">No Videos to Show</div>
        }
      </Row>
    </>
  )
}

export default View
