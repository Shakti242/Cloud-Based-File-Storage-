import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Root, Upload, Gallery } from './pages';

const RoutesComp = ({ signOut, user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root signOut={signOut} user={user} />}>
          <Route path="/" element={<Upload />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
