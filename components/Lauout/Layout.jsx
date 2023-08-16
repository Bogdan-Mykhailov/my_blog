import React from 'react';
import MainNavigation from "@/components/Lauout/MainNavigation/MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
     <MainNavigation />
      <main> { children }</main>
    </>
  );
};

export default Layout;
