import React from 'react';
import { useTranslation } from 'react-i18next';

import { Dogs } from '@/app/types/dogs';
import { Card } from '@/app/components/Card/Card';
import { getBreedName } from '@/app/utils/helper';
import { Button } from '@/app/components/Button/Button';
import { fetchDogsData } from '@/app/hooks/fetchDogsData';
import LoadingImage from '@/app/components/Loading/Loading';
import { debounce } from '@/app/utils/debounce';
import { DELAY } from '@/app/constants/genericConstants';

import './RandomDogs.css';

interface Props {
  dogsData: Dogs;
}

export const RandomDogs: React.FC<Props> = ({ dogsData }) => {
  const [randomDogsData, setDogsData] = React.useState(dogsData);
  const [isLoading, setIsLoading] = React.useState(false);
  const { t } = useTranslation();

  const { fetchRandomDogs } = fetchDogsData();

  const handleClick = debounce(async () => {
    setIsLoading(true);
    const randomDogsData = await fetchRandomDogs();
    setDogsData(randomDogsData);
    setIsLoading(false);
  }, DELAY);

  return (
    <>
      <div className="wrapper">
        {isLoading ? (
          <LoadingImage loaderImageCount={1} />
        ) : (
          <Card
            labelText={getBreedName(randomDogsData as string)}
            imageSrc={randomDogsData as string}
          />
        )}
      </div>
      <Button
        btnLabel={t('generateRandomImage')}
        ariaLabel="show more dogs button"
        onClick={handleClick}
      />
    </>
  );
};
