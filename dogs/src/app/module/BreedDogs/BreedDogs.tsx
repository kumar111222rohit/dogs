'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/app/components/Card/Card';
import { getBreedName } from '@/app/utils/helper';
import { fetchDogsData } from '@/app/hooks/fetchDogsData';
import { Dogs } from '@/app/types/dogs';
import { Button } from '@/app/components/Button/Button';
import LoadingImage from '@/app/components/Loading/Loading';

import './BreedDogs.css';
import { debounce } from '@/app/utils/debounce';
import { DELAY } from '@/app/constants/genericConstants';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const { t } = useTranslation();
  const { fetchDogsByBreed } = fetchDogsData();

  const handleClick = debounce(() => {
    getData();
  }, DELAY);
  const getData = async () => {
    setIsLoading(true);
    const data = await fetchDogsByBreed(dogBreed);
    setDogsData(dogsData => [...dogsData, ...data]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
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
                btnLabel={t('showMore')}
                ariaLabel="show more dogs button"
                onClick={handleClick}
              />
            </div>
          </>
        ) : (
          <div className="not-found">{t('noDogsFound')}</div>
        )}
        {isLoading && <LoadingImage />}
      </div>
    </>
  );
};
