import React , { useState }from 'react';
import { data } from "../data";
import MovieItem from './MovieItem';
import {Button, Modal, Form }from "react-bootstrap";


function MovieList({ search, rating }) {
   
const [movies, setMovies]= useState(data);
   
const [newmovie, setNewMovie]= useState({});
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const handleAddNewMovie  = (e) => {
       
    setNewMovie ({ ...newmovie, [e.target.name]: e.target.value});
     };
     const handleSave= () => {
       setMovies([...movies, newmovie]);
       handleClose(); 
     };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
 
        <div className="movie-list">
          {movies
            .filter((movie) => movie.title.includes(search))
            .filter((movie) => (rating ? movie.rate === rating : movie))

            .map((movie) => {
              return <MovieItem {...movie} />;
            })}

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onChange={(e) => {
                  handleAddNewMovie(e);
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Movie title</Form.Label>
                  <Form.Control type="text" placeholder="" name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Poster</Form.Label>
                  <Form.Control type="text" placeholder="" name="cover" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categorye</Form.Label>
                  <Form.Control type="text" placeholder="" name="category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Cast</Form.Label>
                  <Form.Control type="text" placeholder="" name=" cast" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    maw={10}
                    placeholder=" "
                    name="rate"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Realeasr date</Form.Label>
                  <Form.Control type="date" placeholder="" name="release" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>{handleSave();}}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
}

export default MovieList;