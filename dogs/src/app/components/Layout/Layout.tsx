import React from 'react';

import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="dashboard-container">
        <Header imgSrc="/static/assets/nowatch-logo.svg" />
        <article className="content-container">{children}</article>
      </main>
    </>
  );
};

export default Layout;
