import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CountryList from './components/countryListSection/CountryList';


function App() {
  return (
    <div>
      <Navbar/>
      <CountryList/>
    </div>
  );
}

export default App;
