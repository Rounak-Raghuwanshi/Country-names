import React from 'react';

const CountryCard = ({ country }) => {
  // Check if the country object is defined
  if (!country) {
    return null; 
  }

  const { flags, name, population, region, capital } = country;
  if (!flags || !name || !population || !region || !capital) {
    return null; 
  }

  return (
    <div className="bg-white shadow-2xl rounded-md overflow-hidden">
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
  );
};

export default CountryCard;

