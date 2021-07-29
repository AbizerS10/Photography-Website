import React from "react";
import Fade from "react-reveal/Fade";
import "../css/homegalleryimages.css";

function HomeGalleryImages(props) {
  return (
    <Fade bottom delay={props.del}>
      <div className="col-4 gallerycol">
        <a href={process.env.PUBLIC_URL +"/"+ props.url}>
          <img className="homegallery_img" src={process.env.PUBLIC_URL +"/"+ props.url} alt={props.url} />
        </a>
      </div>
    </Fade>
  );
}

export default HomeGalleryImages;
