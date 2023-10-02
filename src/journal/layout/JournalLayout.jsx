import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* navbar */}
      <NavBar drawerWidth={drawerWidth}></NavBar>
      {/* sidebar*/}
      <SideBar drawerWidth={drawerWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
