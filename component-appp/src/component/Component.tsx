import React from "react";
import Button1 from "./Buttton1/Button1";
import "./Component.css";
import image1 from "./image2.png";

export default function Component() {
  return (
    <div className="row gx-0">
      <div className="col-lg-6 col-md-12 col-12  py-5 d-flex  align-items-center">
        <img src={image1} alt="imagename" className=" img-fluid imgpad" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 " id="datadiv">
        <p className="fs-5 pb-1">our global responsibilty journey</p>
        <p className="h1 pb-1" id="head">
          50 million positive impacts by 2030
        </p>
        <p className="pb-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          assumenda.
        </p>
        <Button1 displayText="learn more" />
      </div>
    </div>
  );
}
