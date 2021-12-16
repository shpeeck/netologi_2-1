import React from "react";
import PropTypes from "prop-types";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  if (!filters) return null;
  return (
    <div className="container">
      {filters.map((item) => {
        return (
          <button
            onClick={onSelectFilter}
            id={item}
            key={item}
            className={selected === item ? "active" : " "}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

Toolbar.defaultProps = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  selected: "All"
};

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired
};
