'use client'

import React from "react";
import Marquee from "react-fast-marquee";

const diveIntoSlider = () => {
  return (
    <div id="diveIntoSlider">
      <Marquee speed={150} autoFill={true} direction="right">
        <h1 className="strip-title">DIVE INTO</h1>
        <div className="d-flex flex-column align-items-center">
          <p className="strip-text fw-bold">CURRENTLY REPPING</p>
          <p className="strip-text">BEST SELLERS </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="strip-text">ALL COLLECTIONS</p>
          <p className="strip-text fw-bold text-decoration-underline">
            @TODAYINEPISODE
          </p>
        </div>
        <h1 className="strip-title">DIVE INTO</h1>
        <div className="d-flex flex-column align-items-center">
          <p className="strip-text fw-bold">CURRENTLY REPPING</p>
          <p className="strip-text">BEST SELLERS </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="strip-text">ALL COLLECTIONS</p>
          <p className="strip-text fw-bold text-decoration-underline">
            @TODAYINEPISODE
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default diveIntoSlider;
