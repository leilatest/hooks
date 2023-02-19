import React from 'react';
import { useParams } from 'react-router';
import { data } from "../src/data";

function MoviesDetails({Link}) {
    let {title} =useParams(); 
    let movie = data.find((elt) => elt.title ===title);
    console.log (movie);

    return (
      <div>

        <h1>{movie.title}</h1>
        <h2> {movie.cast} </h2>
        <h3>{movie.category}</h3>
        <iframe
          width="560"
          height="315"
          src={movie.src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
}

export default MoviesDetails;