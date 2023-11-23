import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/countryListSection/CountryList';
import CountryDetails from './components/CountryDetailsSection/CountryDetails';
import { useTheme } from './ThemeContextSection/ThemeContext';

function App() {

  const {isDarkTheme} = useTheme();
  return (
    <Router>
      <div className={`overflow-hidden md:h-full  ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white'}`}>
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
