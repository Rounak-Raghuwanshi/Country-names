import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../CustomLoader/Customspinner';

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Fetch country details based on the countryName parameter
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const [data] = await response.json();
        setCountry(data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (!country) {
    return <div><Spinner/></div>;
  }

  const { flags, population, region, subregion, capital, tld, currencies, languages, borders } = country;

  // Extract name
  const name = country.name?.common;
  const nativeName = country.name?.nativeName ? Object.values(country.name.nativeName)[0].common : "";
  
  // Extract currencies
  const currencyKey = Object.keys(country.currencies || {})[0];
  const currencyName = country.currencies?.[currencyKey]?.name || "";
  
  // Extract languages
  const languageNames = Object.values(languages || {}).join(', ');

  // Extract borders
  const border = borders?.join(', ');
  
  return (
    <div className="container mx-auto mt-8">
      <Link to={`/`}>
        <button className='p-2 px-6 bg-gray-800 text-white font-semibold rounded-md mb-20 mt-8'>Back</button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img
            src={flags?.svg}
            alt={`Flag of ${name}`}
            className="w-full h-full mb-4"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <p><span className="font-semibold">Native Name:</span> {nativeName}</p>
          <p><span className="font-semibold">Population:</span> {population}</p>
          <p><span className="font-semibold">Region:</span> {region}</p>
          <p><span className="font-semibold">Subregion:</span> {subregion}</p>
          <p><span className="font-semibold">Capital:</span> {capital?.[0]}</p>
        </div>
        <div>
          <p><span className="font-semibold">Top Level Domain:</span> {tld?.[0]}</p>
          <p><span className="font-semibold">Currencies:</span> {currencyName}</p>
          <p><span className="font-semibold">Language:</span> {languageNames}</p>
          <p><span className="font-semibold">Borders:</span> {border}</p>
        </div>
      </div>
    </div>
  );
  
  
};

export default CountryDetails;
