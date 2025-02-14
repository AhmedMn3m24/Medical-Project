

import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar  bg="primary" data-bs-theme="dark" id='NAVBAR' >
      <Container>
        <div id ="logo">
        <h1>Health</h1>
        </div>
       
        <button id="btn" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        
        <Nav className={`me-auto ${isOpen ? 'active' : ''}`} id="navbar">
          <NavLink
            // style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginLeft:  '20%' }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            // style={{textDecoration: 'none', fontSize: '20px', color: 'white', marginLeft:  '50%' }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            // style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight:  '50%' }}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            // style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight:  '50%'}}
            to="/departments"
          >
            Departments
          </NavLink>
          <NavLink
            // style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight:  '50%' }}
            to="/contact"
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;



// let nav = document.getElementById('menu-toggle');
// let button = document.getElementById('btn');
// button.addEventListener('click', () => {
//     nav.classList.toggle('active');
// }); 

// function NavBar() {
//   return (
//     <Navbar bg="primary" data-bs-theme="dark">

//       <Container  id="nav-toggle">
//         <h1 id='logo'>Health</h1>
        
//           <Nav className="me-auto" id="navbar">
//             {/* button   */}

//             <button id="btn">
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>


//             <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight:  '50%'}} to="/" >Home</NavLink>
//             <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight: '50%' }} to="/about">About</NavLink>
//             <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight: '50%' }} to="/services" >Services</NavLink>
//             <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight: '50%' }} to="/departments" >Departments</NavLink>
//             <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', marginRight: '50%' }} to="/contact" >Contact</NavLink>
//           </Nav>
//       </Container>

//     </Navbar>
//   )
// }

// export default NavBar;