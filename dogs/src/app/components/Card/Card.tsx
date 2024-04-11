import React from 'react';
import Image from 'next/image';

import './Card.css';
import { Tooltip } from '../Tooltip/Tooltip';

interface Props {
  labelText: string;
  imageSrc: string;
}
export const Card: React.FC<Props> = ({ labelText, imageSrc }) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          <Image src={imageSrc} width={250} height={250} alt={labelText} />
        </div>
        <Tooltip text={`Dog breed is ${labelText}`}>
          <div className="card-label" aria-label={`${labelText}`}>
            {labelText}
          </div>
        </Tooltip>
      </div>
    </>
  );
};
