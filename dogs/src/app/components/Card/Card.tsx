import React from "react";
import Image from "next/image";

import "./Card.css";
import { Tooltip } from "../Tooltip/Tooltip";
import LoadingImage from "../Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/dogStore";

interface Props {
  labelText: string;
  imageSrc: string;
}
export const Card: React.FC<Props> = ({ labelText, imageSrc }) => {
  const isLoading = useSelector((state: RootState) => state.dogs.loading);

  if (isLoading) {
    return <LoadingImage />;
  }
  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          {/* {isLoading && <LoadingImage />} */}
          <Image src={imageSrc} width={250} height={250} alt="labelText" />
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
