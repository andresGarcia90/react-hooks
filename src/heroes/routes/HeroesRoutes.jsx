import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { MarvelPages, DcPages, HeroPage, SearchPages } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to={'/login'}></Navigate>} />
        </Routes>
      </div>
    </>
  );
};
