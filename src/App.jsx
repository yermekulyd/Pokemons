import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import PokemonVideo from './components/PokemonVideo';

const App = () => {

   

  return (
      <>
      <Header/>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/video/:pokemon' element={<PokemonVideo />} />
      </Routes>
      </>
  );
}

export default App;