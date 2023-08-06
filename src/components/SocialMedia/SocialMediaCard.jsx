import React from "react";
import { Link } from "@nextui-org/react";
import "./SocialMediaCard.scss";

const SocialMediaCard = (props) => {
  const { icon: Icon, color, link } = props.carddata;
  return (
    <div className="socialmediacard-icon">
      <Link isExternal href={link}>
        <Icon color={color} />
      </Link>
    </div>
  );
};

export default SocialMediaCard;
