import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/countryListSection/CountryList';
import CountryDetails from './components/CountryDetailsSection/CountryDetails';

function App() {
  return (
    <Router>
      <div className='overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/:countryName" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
