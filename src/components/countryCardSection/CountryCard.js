import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../CustomLoader/Customspinner';
import {useTheme} from '../../ThemeContextSection/ThemeContext'

const CountryCard = ({ country }) => {

  const {isDarkTheme} = useTheme()
  
  // Check if the country object is defined
  if (!country) {
    return <Spinner/>; 
  }

  const { flags, name, population, region, capital, cca3 } = country;
  if (!flags || !name || !population || !region || !capital || !cca3) {
    return null; 
  }

  return (
 
    <Link to={`/${name.common}`}>
      <div className={`bg-white shadow-2xl rounded-md overflow-hidden mb-4 ${
          isDarkTheme ? 'dark:bg-gray-800 text-white' : ''
        }`}>
        <img src={flags.svg} alt={name.common} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{name.common}</h2>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital[0]}
            
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
