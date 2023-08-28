import React from "react";
import "../../CSS/projects/project.css";
import dayScheduler from "../../img/workdaySchedule.png";

function projectFour() {
  const daySchedulerWindow = () => {
    window.open(
      "https://vegamiguel9.github.io/WorkDaySchedule-API-/",
      "_blank"
    );
  };

  return (
    <div className="projectFour">
      <div className="flex">
        <div className="description">
          <p>
            This is a workday scheduler that use HTML, CSS, and JavaScript to be
            able to save different things that you have put into your schedule.
            The color of the scheduler also changes as the day pass by. This is
            done with using moment.js
          </p>
        </div>
        <div className="picture">
          <img src={dayScheduler} alt="Workday Scheduler website" />
        </div>
      </div>
      <div className="button">
        <button onClick={daySchedulerWindow}>View Project</button>
      </div>
    </div>
  );
}

export default projectFour;
