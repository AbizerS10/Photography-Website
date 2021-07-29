import React from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function ServiceImages(props) {
  let path = process.env.PUBLIC_URL + "/services";
  if (props.head === "Wedding Shoots") {
    path = process.env.PUBLIC_URL + "/wedding";
  } else if (props.head === "Pre-Wedding Shoots") {
    path = process.env.PUBLIC_URL + "/prewedding";
  } else if (props.head === "Birthday Shoots") {
    path = process.env.PUBLIC_URL + "/birthdayparty";
  } else if (props.head === "Maternity Shoots") {
    path = process.env.PUBLIC_URL + "/maternity";
  }
  return (
    <Fade bottom delay={props.del}>
      <div className="col-4 servicecol">
        <Link to={path} className="service_link">
          <img className="service_img" src={process.env.PUBLIC_URL +"/"+ props.src} alt={props.src} />
          <CameraAltIcon className="service_camera" />
          <h1 className="service_head">{props.head}</h1>
        </Link>
      </div>
    </Fade>
  );
}

export default ServiceImages;
