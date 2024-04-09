import React from 'react';

import { useTranslation } from 'react-i18next';

import { Header } from '@/app/components/Header/Header';
import { Dogs } from '@/app/types/dogs';

import './DogsDashboard.css';


interface Props {
  dogsData: Dogs;
}
export const DogsDashboard: React.FC<Props> = ({ dogsData }) => {
 



  return (
    <>
    
        <div className="dashboard-container">
          <Header
            imgSrc="/static/assets/nowatch-logo.svg"
            
            tooltipText={''}
            headerText={''}
          />
          {dogsData.map(dogs=>{
          return <Card label='' imageSrc={dogs.message} />
          })}
         

          
        </div>
    </>
  );
};
