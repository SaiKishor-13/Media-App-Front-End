import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
        <div style={{width:'400px'}} className="intro">
          <h6><i className="fa-brands fa-java me-2"> Media Souveneir</i></h6>
          <p>Designed and built with all the love in the world by the Souvenier team</p>
          <p>Code licensed by Souvenier, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none'}}>Watch History Page</Link>
        </div>
        <p className="text-center mt-3">Copyright &copy; June 2024 Batch, Media Souvenier</p>
      </div>
    </div>
  )
}

export default Footer
