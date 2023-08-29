import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { DcPages } from '../heroes/pages/DcPages';
import { LoginPages } from '../auth/pages/LoginPages';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
