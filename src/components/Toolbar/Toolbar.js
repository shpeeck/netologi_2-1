import React from "react";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="container">
      <br />
      {filters.map((item) => {
        return (
          <button
            onClick={onSelectFilter}
            id={item}
            className={selected === item ? "active" : " "}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
