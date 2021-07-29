import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function GalleryImages(props) {
  return (
    <Fade right delay={props.del}>
      <div className="pics">
        <Link to={process.env.PUBLIC_URL + "/" + props.url} className="gallery_link">
          <img src={process.env.PUBLIC_URL + "/" + props.url} alt={props.url} className="gallery_img" />
        </Link>
      </div>
    </Fade>
  );
}

export default GalleryImages;
