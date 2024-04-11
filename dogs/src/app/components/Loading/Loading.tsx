import React, { useState } from 'react';
import './Loading.css';

interface Props {
  loaderImageCount?: number;
}
const LoadingImage: React.FC<Props> = ({ loaderImageCount = 3 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shimmerElements = [];
  for (let i = 0; i < loaderImageCount; i++) {
    const element = <div className="shimmer"></div>;
    shimmerElements.push(element);
  }

  return (
    <section>
      {!imageLoaded && (
        <>
          <div className="loader-wrapper">{shimmerElements}</div>
          <img
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => setImageLoaded(true)}
            width="100%"
            height="250"
          />
        </>
      )}
    </section>
  );
};

export default LoadingImage;
