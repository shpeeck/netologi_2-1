// import
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import React, { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const pictures = [
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
    }
  ];
  const [filteredProjects, setfilteredProjects] = useState(pictures);
  const handler = (event) => {
    setActiveFilter(event.target.id);
    // console.log("ev", event.target.id);
    // console.log("act", activeFilter);
    if (event.target.id !== "All") {
      // console.log(filteredProjects);
      const a = [];
      pictures.forEach((item) => {
        if (item.category === event.target.id) {
          a.push(item);
        }
        // console.log(item);
      });
      // console.log(a);
      setfilteredProjects(a);
      // this.setState({ projects: filteredProjects });
    } else {
      setfilteredProjects(pictures);
      // console.log(pictures);
    }
  };

  return (
    <>
      <Toolbar
        filters={filters}
        selected={activeFilter}
        onSelectFilter={handler}
      />
      <br />
      <ProjectList projects={filteredProjects} />
    </>
  );
}
