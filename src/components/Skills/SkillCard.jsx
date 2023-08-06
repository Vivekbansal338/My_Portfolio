import React from "react";
import "./SkillCard.scss";

const SkillCard = (props) => {
  const { title, icon: Icon, color } = props.carddata;
  return (
    <div className="card">
      <div className="card-icon">
        <Icon size={150} color={color} />
      </div>
      <h3 className="skill-title">{title}</h3>
    </div>
  );
};

export default SkillCard;
