import React from "react";

import { useTranslation } from "react-i18next";

import { DogsResponse } from "@/app/types/dogs";

import { Card } from "@/app/components/Card/Card";
import { getBreedName } from "@/app/utils/helper";

interface Props {
  dogsData: DogsResponse;
}

export const RandomDogs: React.FC<Props> = ({ dogsData }) => {
  return (
    <>
      <Card
        labelText={getBreedName(dogsData.message as string)}
        imageSrc={dogsData.message as string}
      />
    </>
  );
};
