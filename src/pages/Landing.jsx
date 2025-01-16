import React from 'react'
import landingImg from '../assets/Blog post-bro.png'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/Music-bro.png'
import feature2 from '../assets/Playing Music-bro.png'
import feature3 from '../assets/salsa music-bro.png'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div style={{paddingTop:"80px"}} className='container'>
      {/* landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
           <h3><span className='text-success'>Souvenier</span> to be served</h3>
           <p style={{textAlign:'justify'}}className='mt-3'>Media Souvenier will allow you to add or remove the uploaded videos from youtube and also allow you to arrange it in different categories by drag and drop. You can also have the provision to manage thier watch history as well. What are you waiting for, let start exploring.</p>
           <Link to={'/home'} className='btn btn-success'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img style={{height:"80vh"}} className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
        <div className="my-5">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Manage</Card.Title>
                <Card.Text>
                  Manage your videos here.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorize</Card.Title>
                <Card.Text>
                  Categorize your videos here.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Activity</Card.Title>
                <Card.Text>
                  See your recent activities here.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-success">Simple , Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos : </span>Categorize videos as you wish.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything : </span>Play videos as you wish.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Manage Activity : </span>Manage your activity.</p>
        </div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JnaDDTx71_c?si=ntR-4g_CZ9ZX2cUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
