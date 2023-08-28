import React from "react";
import "../../CSS/projects/project.css";
import mernBook from "../../img/mernBook.png";

function projectOne() {
  const mernBookWindow = () => {
    window.open("https://vegamiguel9.github.io/Mern-BookSearch/", "_blank");
  };

  return (
    <div className="project">
      <div className="flex">
        <div className="description">
          <p>
            This was a project from the Chapel Hill bootcamp, you are able to
            search for book titles and receive different books associated with
            the book. This project use the MERN stack structure.
          </p>
        </div>
        <div className="picture">
          <img src={mernBook} alt="MERN stack book search website" />
        </div>
      </div>
      <div className="button">
        <button onClick={mernBookWindow}>View Project</button>
      </div>
    </div>
  );
}

export default projectOne;
