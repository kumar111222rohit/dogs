"use client";
import React, { useEffect } from "react";

import "./BreedDogs.css";
import { useTranslation } from "react-i18next";
import { Card } from "@/app/components/Card/Card";
import { getBreedName } from "@/app/utils/helper";
import { useDogsByBreed } from "@/app/hooks/useDogByBreed";
import { Dogs } from "@/app/types/dogs";
import { Button } from "@/app/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/dogStore";
import { getDogsByBreed } from "@/app/services/apiService";
import { setLoader } from "@/app/store/dogReducer";
import LoadingImage from "@/app/components/Loading/Loading";

interface Props {
  dogBreed: string;
}

const renderDogs = (message: Dogs[]) => {
  if (Array.isArray(message)) {
    return message.map((dog, index) => (
      <Card
        key={index}
        labelText={getBreedName(dog as string)}
        imageSrc={dog as string}
      />
    ));
  } else {
    return <Card labelText={getBreedName(message)} imageSrc={message} />;
  }
};

export const BreedDogs: React.FC<Props> = ({ dogBreed }) => {
  const [dogsData, setDogsData] = React.useState<Dogs[]>([]);
  const { loadData } = useDogsByBreed(dogBreed);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleShowMore = React.useCallback(() => {
    loadData().then((result) => {
      console.log("result", result);
      setDogsData((dogsData) => [...dogsData, ...result]);
      console.log(dogsData, "after click");
    });
  }, []);

  const handleClick = () => {
    fetchData();
  };
  const fetchData = async () => {
    setIsLoading(true);
    const data = await getDogsByBreed(dogBreed);
    setDogsData((dogsData) => [...dogsData, ...data.message]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="dogs-wrapper">
        <div className="header-text">{dogBreed}</div>
        {dogsData && dogsData.length ? (
          <>
            <div className="dogs-container">{renderDogs(dogsData)}</div>
            <div>
              <Button
                btnLabel="Show more"
                ariaLabel="show more dogs button"
                onClick={handleClick}
              />
            </div>
          </>
        ) : (
          <div className="not-found">Oops! No dogs found for the breed</div>
        )}
        {isLoading && <LoadingImage />}
      </div>
    </>
  );
};
