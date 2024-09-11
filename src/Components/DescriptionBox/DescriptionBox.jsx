import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (252)</div>
      </div>
      <div className="desciptionbox-description">
        <p>
          Welcome to Lucid Horizons, where streetwear meets high style. Our
          collection is all about pushing boundaries and making a statement.
          Each piece is designed with a keen eye for detail and a commitment to
          quality, blending bold aesthetics with street-smart functionality.
          Whether you’re hitting the streets or just want to turn heads, our
          gear is crafted to keep you ahead of the curve. Embrace the vibe, own
          the moment, and redefine your look with Lucid Horizons.
        </p>
        <p>
          Stay ahead with pieces that reflect your individuality and drive. At
          Lucid Horizons, we believe in more than just fashion—we’re about
          creating a movement. Our designs are for those who dare to stand out
          and redefine the norms, offering you a unique blend of comfort, style,
          and attitude. Discover the collection that speaks to your inner rebel
          and make every day your runway.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
