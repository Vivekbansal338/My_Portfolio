import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import "./ProjectCard.scss"; // Import the CSS file

export default function ProjectCard(props) {
  const { title, description, applink, githublink, projectimg_url } =
    props.projectdata;
  return (
    <div className="projectcard-container">
      <div className="projectcard-header">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {projectimg_url && (
        <img src={projectimg_url} alt={title} className="projectcard-image" />
      )}
      {applink && (
        <div className="projectcard-frame">
          <iframe
            src={applink}
            width="300"
            height="300"
            title="{title}"
            style={{
              pointerEvents: "none",
              cursor: "pointer",
              overflow: "hidden",
            }}
            sandbox="allow-scripts"
          />
        </div>
      )}
      <div className="projectcard-footer">
        <a
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
          className="projectcard-link"
        >
          <AiFillGithub className="projectcard-icon" />
        </a>
        <a
          href={applink}
          target="_blank"
          rel="noopener noreferrer"
          className="projectcard-link"
        >
          <AiOutlineLink className="projectcard-icon" />
        </a>
      </div>
    </div>
  );
}
