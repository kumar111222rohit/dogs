import React from 'react';
import Image from 'next/image'

import './Card.css';

interface Props {
  labelText: string;
  imageSrc: string;
}
export const Card: React.FC<Props> = ({ labelText, imageSrc }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-header" aria-label={`${labelText}`}>
          {labelText}
        </div>
        <div className="card-content">
        <Image  
        src={imageSrc}
        width={500}
        height={500}
        alt="labelText"/>
        </div>
      </div>
    </>
  );
};
