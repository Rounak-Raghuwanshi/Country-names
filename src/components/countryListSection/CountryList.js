import React, { useState, useEffect } from 'react';
import CountryCard from '../countryCardSection/CountryCard';
import Filter from '../FilterSection/filter';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);
  

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
    setFilteredCountries(filtered);
  };

const handleFilter = (region, searchTerm) => {
  const filtered = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = !region || country.region === region;
    return matchesSearch && matchesRegion;
  });
  setFilteredCountries(filtered);
};

  return (
    <div className="container mx-auto mt-8">
      <Filter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:m-0 m-4 lg:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
