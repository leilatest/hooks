import React from 'react';
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom"
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

function NavBar({ setSearch, setRating, rating }) {
  const ratingChanged = (newRating) => {
   setRating(newRating);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: "red" }
                : { color: "black", textDecoration: "unset" }
            }
            to="/"
          >
            Home
          </NavLink>
        </Navbar.Brand>

        <Navbar.Brand>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: "red" }
                : { color: "black", textDecoration: "unset" }
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="">
              <ReactStars
                count={10}
                value={rating}
                onChange={ratingChanged}
                size={30}
                color2={"#ffd700"}
                half={false}
              />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;