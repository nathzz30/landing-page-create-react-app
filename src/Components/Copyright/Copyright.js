import React from "react";
import "./Copyright.css";

const Copyright = ({
  brand,
  imagesComp,
  urlImagesComp,
  designComp,
  urlDesignComp
}) => {
  return (
    <div className="copyContainer">
      <footer className="copyright">
        &#169; {brand}. All rights reserved. Demo Images:{" "}
        <a href={urlImagesComp} className="dotted">
          {imagesComp}
        </a>
        , Design:{" "}
        <a href={urlDesignComp} className="dotted">
          {designComp}.
        </a>
      </footer>
    </div>
  );
};

export default Copyright;
