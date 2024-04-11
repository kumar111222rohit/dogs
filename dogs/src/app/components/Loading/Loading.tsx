import React, { useState } from "react";
import "./Loading.css";

const LoadingImage = ({}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && (
        <>
          <div className="loader-wrapper">
            <div className="shimmer"></div>
            <div className="shimmer"></div>
            <div className="shimmer"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoadingImage;
