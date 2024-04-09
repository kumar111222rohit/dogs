import React from "react";
import { GetServerSidePropsContext } from "next";

import { Dogs } from "@/app/types/dogs";
import { BASE_URL } from "@/app/constants/genericConstants";
import { DogsDashboard } from "@/app/module/DogsDashboard/components/DogsDashboard";
import { API_ROUTES } from "@/app/constants/apiRoutes";

interface Props {
  dogs: Dogs;
}
const Dogs: React.FC<Props> = ({ dogs }) => {
  return <DogsDashboard dogsData={dogs} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const url = BASE_URL + API_ROUTES.RANDOM_BREEDS;
    const res = await fetch(url);
    const dogs = await res.json();
    console.log(dogs);
    return {
      props: {
        dogs,
      },
    };
  } catch (e) {
    console.log(e);
    // also we can send to logger like sentry or kibana
  }
}

export default Dogs;
