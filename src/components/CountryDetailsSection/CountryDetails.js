import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../CustomLoader/Customspinner";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Fetch country details based on the countryName parameter
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const [data] = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (!country) {
    return <Spinner/>
  }

  const {
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  // Extract name
  const name = country.name?.common;
  const nativeName = country.name?.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "";

  // Extract currencies
  const currencyKey = Object.keys(country.currencies || {})[0];
  const currencyName = country.currencies?.[currencyKey]?.name || "";

  // Extract languages
  const languageNames = Object.values(languages || {}).join(", ");

  // Extract borders
  const border = borders?.join(", ");

  return (
    <div className="container mx-auto mt-8">
      <Link to={`/`}>
        <button className="p-2 px-8 bg-white text-black font-semibold rounded-md shadow-lg border border-gray-200 mb-20 mt-8">
          Back
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:h-[300px] md:w-[430px]">
          <img
            src={flags?.svg}
            alt={`Flag of ${name}`}
            className="w-full h-full object-cover mb-4"
          />
        </div>
        <div className="md:ml-20 ">
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
        <div className="md:ml-10 md:mt-12">
          <p className="mb-1">
            <span className="font-medium">Top Level Domain:</span> {tld?.[0]}
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
            <div className=" ml-[33rem] mt-[-3rem] md:w-2/3">
              <p>
                <span className="font-medium md:mr-2 items-end text-end">Borders Countries:</span>{" "}
                {borders.map((borderName) => (
                  <span
                    key={borderName}
                    className="inline-block  bg-white rounded-[2px] px-6 py-1 mr-2  mb-2 shadow-lg border border-gray-200"
                  >
                    {borderName}
                  </span>
                ))}
              </p>
            </div>
          )}
    </div>
  );
};

export default CountryDetails;
