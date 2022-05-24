import React from "react";

function ProjectItem(props) {
  return (
    <div className={props.project}>
      <h3>{props.project}</h3>
      <p>{props.about}</p>
      <div className={props.technologies}>
        {props.technologies.map((tech) => {
          return <span key={tech}>{tech}</span>;
        })}
        ;
      </div>
    </div>
  );
}

export default ProjectItem;
