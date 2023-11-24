import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import Spinner from "../CustomLoader/Customspinner";
import { useTheme } from "../../ThemeContextSection/ThemeContext";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const { isDarkTheme } = useTheme();

  
  const fetchCountryDetails = async (countryName) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      
      if (response.status === 404) {
        console.error("Country not found:", response.statusText);
        return;
      }
  
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0) {
        setCountry(data[0]);
      } else {
        console.error("Error fetching country details. Response:", data);
      }
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };
  

  useEffect(() => {
    // Fetch country details when the component mounts or when countryName changes
    fetchCountryDetails(countryName);
  }, [countryName]);

  if (!country) {
    return <Spinner />;
  }

  const {
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borders,
  } = country;

  // Extract name
  const name = country.name?.common;
  const nativeName = country.name?.nativeName?.eng?.common || "";

  // Extract currencies
  const currencyKey = Object.keys(country.currencies || {})[0];
  const currencyName = country.currencies?.[currencyKey]?.name || "";

  // Extract languages
  const languageNames = Object.values(languages || {}).join(", ");

  return (
    <div className="h-screen w-4/5 mx-auto flex flex-col">
      <Link to={`/`}>
        <button className={`p-2 px-8 ${isDarkTheme ? 'bg-gray-700 border-gray-800 text-white' : 'bg-white text-black'} font-semibold rounded-md shadow-lg border border-gray-200 mb-20 mt-8 flex items-center`}>
          <FaArrowLeft className="mr-2 ml-[-1rem]" />
          Back
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
        <div className="md:h-[350px] md:w-[430px] shadow mb-2">
          <img
            src={flags?.svg}
            alt={`Flag of ${name}`}
            className="w-full h-full object-cover mb-4"
          />
        </div>
        <div className="md:ml-20 md:mt-5">
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <p className="mb-1">
            <span className="font-medium">Native Name:</span> {nativeName}
          </p>
          <p className="mb-1">
            <span className="font-medium">Population:</span> {population}
          </p>
          <p className="mb-1">
            <span className="font-medium">Region:</span> {region}
          </p>
          <p className="mb-1">
            <span className="font-medium">Subregion:</span> {subregion}
          </p>
          <p className="mb-1">
            <span className="font-medium">Capital:</span> {capital?.[0]}
          </p>
        </div>
        <div className="md:ml-10 md:mt-[4.5rem]">
          <p className="mb-1">
            <span className="font-medium">Top Level Domain:</span> {tld}
          </p>
          <p className="mb-1">
            <span className="font-medium">Currencies:</span> {currencyName}
          </p>
          <p className="mb-1">
            <span className="font-medium">Language:</span> {languageNames}
          </p>
        </div>
      </div>
      {borders && borders.length > 0 && (
        <div className="absolute top-[33rem] left-[40rem] md:w-2/3">
          <p>
            <span className="font-medium md:mr-2 items-end text-end">Borders Countries:</span>{" "}
            {borders.map((borderName) => (
              <Link
                key={borderName}
                to={`/${borderName}`}
                onClick={() => fetchCountryDetails(borderName)}
                className={`inline-block rounded-[2px] px-6 py-1 mr-2 mb-2 shadow-lg border border-gray-200 
                  ${isDarkTheme ? 'bg-gray-700 text-white border border-gray-800 ' : 'bg-white text-black'}`}
              >
                {borderName}
              </Link>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
