import React from "react";

export default function ProjectList({ projects }) {
  return (
    <div className="imgstyle">
      {projects.map((item) => {
        return (
          <div>
            <img src={item.img} alt="project pic"></img>
          </div>
        );
      })}
      <br />
    </div>
  );
}
