import React from 'react';
import { Navbar, Container, } from "react-bootstrap";
import {Link } from "react-router-dom"


function PublicNavBar() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">
              <Link to ="/movies" style={{ all:"unset", cursor:"pointer"}}>Movie App</ Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
}

export default PublicNavBar;