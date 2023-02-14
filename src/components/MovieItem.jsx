import React from 'react';
import { Card, ListGroup }from "react-bootstrap";
import ReactStars from "react-stars";

function MovieItem({title, category, id, rate, cover, cast, realease}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>{cast}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <ReactStars
            value={rate}
            count= {10}
            size={30}
            color2={"#ffd700"}
            edit={false}
           
          />
        </ListGroup.Item>
        <ListGroup.Item>Category : {category} </ListGroup.Item>{" "}
        <ListGroup.Item> {realease} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;