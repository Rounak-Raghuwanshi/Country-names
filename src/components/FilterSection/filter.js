import React, { useState } from "react";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import { useTheme } from "../../ThemeContextSection/ThemeContext";

const Filter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isDarkTheme } = useTheme();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (region) => {
    setSelectedRegion(region);
    onFilter(region, searchTerm);
    setDropdownOpen(false);
  };

  const handleDefaultFilter = () => {
    setSelectedRegion("");
    onFilter("", searchTerm);
    setDropdownOpen(false);
  };

  return (
    <div className="mb-8 flex flex-col md:flex-row items-center justify-between relative">
      <div className="relative w-4/5 md:w-1/2 mb-4 md:mb-0 ">
        <IoMdSearch
          className={`${isDarkTheme ? "text-white" : "text-gray-600"} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400`}
        />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleChange}
          className={`${
            isDarkTheme ? "bg-gray-700 text-white border-gray-800" : "bg-white"
          } p-2 pl-10 w-full md:w-3/4 rounded-md focus:outline-none shadow-lg border border-gray-200`}
        />
      </div>

      <div className="relative md:w-1/4 w-4/5">
        <div
          className={`${
            isDarkTheme ? "bg-gray-700 border-gray-800" : "border-gray-200"
          } p-2 w-full rounded-md focus:outline-none shadow-lg cursor-pointer flex items-center border border-gray-200`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className={`mr-2 md:ml-2`}>
            {selectedRegion || "Filter by Region"}
          </span>
          <IoIosArrowDown className="absolute right-10" />
        </div>
        {dropdownOpen && (
  <div
    className={`${
      isDarkTheme
        ? "bg-gray-700 text-white border-gray-800"
        : "bg-white"
    } absolute top-full left-0 mt-2 w-full rounded-md overflow-hidden shadow-lg`}
  >
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      } ${selectedRegion === "Africa" }`}
      onClick={() => handleFilterChange("Africa")}
    >
      Africa
    </div>
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      } ${selectedRegion === "Americas"}`}
      onClick={() => handleFilterChange("Americas")}
    >
      Americas
    </div>
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      } ${selectedRegion === "Asia" }`}
      onClick={() => handleFilterChange("Asia")}
    >
      Asia
    </div>
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      } ${selectedRegion === "Europe" }`}
      onClick={() => handleFilterChange("Europe")}
    >
      Europe
    </div>
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      } ${selectedRegion === "Oceania"}`}
      onClick={() => handleFilterChange("Oceania")}
    >
      Oceania
    </div>
    <div
      className={`p-2 md:ml-2 cursor-pointer ${
        isDarkTheme ? "hover:bg-gray-500" : "hover:bg-gray-100"
      }`}
      onClick={handleDefaultFilter}
    >
      Show All
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Filter;
