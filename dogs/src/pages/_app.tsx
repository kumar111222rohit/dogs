import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { dogStore } from '@/app/store/dogStore';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/services/queryClient';

import '../../i18';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={dogStore}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
