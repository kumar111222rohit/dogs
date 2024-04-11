'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/app/components/Card/Card';
import { getBreedName } from '@/app/utils/helper';
import { fetchDogsData } from '@/app/hooks/fetchDogsData';
import { Dogs } from '@/app/types/dogs';
import { Button } from '@/app/components/Button/Button';
import LoadingImage from '@/app/components/Loading/Loading';
import { debounce } from '@/app/utils/debounce';
import { DELAY } from '@/app/constants/genericConstants';

import './BreedDogs.css';

interface Props {
  dogBreed: string;
}

const renderDogs = (message: Dogs[]) => {
  // the message received from API can be a string or string []
  // so parsing it accordingly and adding in the UI
  if (Array.isArray(message)) {
    return message.map(dog => (
      <Card
        key={dog as string} // since our dog url is the only unique thing we have currently
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
      <article className="dogs-wrapper">
        <header className="header-text">{dogBreed}</header>
        {dogsData.length ? (
          <>
            <section className="dogs-container">{renderDogs(dogsData)}</section>
            <section>
              <Button
                btnLabel={t('showMore')}
                ariaLabel="show more dogs button"
                onClick={handleClick}
              />
            </section>
          </>
        ) : (
          <p className="not-found">{t('noDogsFound')}</p>
        )}
        {isLoading && <LoadingImage />}
      </article>
    </>
  );
};
