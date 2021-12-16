import React from "react";
import PropTypes from "prop-types";

export default function ProjectList({ projects }) {
  if (!projects) return null;
  return (
    <div className="imgstyle">
      {projects.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt="project pic" />
          </div>
        );
      })}
    </div>
  );
}

ProjectList.defaultProps = {
  projects: [
    {
      img: "https://picsum.photos/200/300.jpg",
      category: "Business Cards"
    }
  ]
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};
