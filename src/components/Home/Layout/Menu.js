import React from "react";
// import {  Nav } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  
  <div class="" id="navbarNavAltMarkup">
    <ul style={{listStyle:'none'}}>
      <li style={{float:'left', marginLeft:'13rem'}}><a class="nav-item nav-link active" href="/home">Home </a></li>
      <li style={{float:'left',marginLeft:'10rem'}}><a class="nav-item nav-link" href="/about">About Us</a></li>
      <li style={{float:'left',marginLeft:'10rem'}}><a class="nav-item nav-link" href="/contact">Contact Us</a></li>
    </ul>
  </div>
</nav>
      
    </>
  );
};

export default Menu;
