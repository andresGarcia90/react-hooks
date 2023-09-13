import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { MarvelPages, DcPages, HeroPage, SearchPages } from '../pages';
import { LoginPages } from '../../auth/pages/LoginPages';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPages />
              </PublicRoute>
            }
          />

          <Route path="login" element={<LoginPages />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <MarvelPages />
              </PrivateRoute>
            }
          />

          {/* <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to={'/login'}></Navigate>} /> */}
        </Routes>
      </div>
    </>
  );
};
