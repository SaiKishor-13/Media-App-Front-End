import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className="bg-success position-fixed w-100">
        <Container>
          <Navbar.Brand >
            <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}}  to={'/'}>
            <i className="fa-brands fa-java me-2 "></i>{' '}
            Media Souvenier
            </Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header


