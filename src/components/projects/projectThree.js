import React from "react";
import "../../CSS/projects/project.css";
import movieQuote from "../../img/movieQuote.png";

function projectThree() {
  const movieQuoteWindow = () => {
    window.open("https://cmizelle10.github.io/Project_1/", "_blank");
  };
  return (
    <div className="project">
      <div className="flex">
        <div className="description">
          <p>
            Using HTML, CSS, JavaScript, and web APIs myself and four other
            classmates made a website that can generate a movie and some
            information from just typing a quote from the specifice movie. My
            job in this project was the HTML, and CSS.
          </p>
        </div>
        <div className="picture">
          <img src={movieQuote} alt="Movie quote website" />
        </div>
      </div>
      <div className="button">
        <button onClick={movieQuoteWindow}>View project</button>
      </div>
    </div>
  );
}

export default projectThree;
