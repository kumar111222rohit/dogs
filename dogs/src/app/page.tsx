'use client';
import React from 'react';
import Link from 'next/link';

import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

import './globals.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header
        imgSrc="/static/assets/nowatch-logo.svg"
        tooltipText="Welcome to Nowatch"
      />
      <Link href="/dogs">
        <div className="home-page-btn">
          <Button btnLabel={t('clickToViewAssignment')} />
        </div>
      </Link>
    </>
  );
}
