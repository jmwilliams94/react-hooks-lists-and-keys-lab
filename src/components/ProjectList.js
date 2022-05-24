import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div>
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              project={project.name}
              technologies={project.technologies}
              about={project.about}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}

export default ProjectList;
