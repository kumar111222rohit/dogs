import React from "react";

import { useTranslation } from "react-i18next";

import { Header } from "@/app/components/Header/Header";
import { Dogs } from "@/app/types/dogs";

import "./DogsDashboard.css";
import { Card } from "@/app/components/Card/Card";
import { getBreedName } from "@/app/utils/helper";

interface Props {
  dogsData: Dogs;
}

export const DogsDashboard: React.FC<Props> = ({ dogsData }) => {
  const renderDogs = (message: string | string[]) => {
    if (Array.isArray(message)) {
      return message.map((dog, index) => (
        <Card key={index} labelText={getBreedName(dog)} imageSrc={dog} />
      ));
    } else {
      return <Card labelText={getBreedName(message)} imageSrc={message} />;
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <Header
          imgSrc="/static/assets/nowatch-logo.svg"
          tooltipText={""}
          headerText={""}
        />
        <div className="content-container">
          {dogsData.message && renderDogs(dogsData.message)}
        </div>
      </div>
    </>
  );
};
