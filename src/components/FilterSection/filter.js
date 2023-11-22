import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleChange}
          className="p-2 pl-10 w-full md:w-3/4 rounded-md focus:outline-none shadow-2xl border border-gray-200"
        />
      </div>

      <div className="relative w-full md:w-1/4">
        <div
          className="p-2 w-full rounded-md focus:outline-none shadow-lg cursor-pointer flex items-center border border-gray-200"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="mr-2 md:ml-2">{selectedRegion || "Filter by Region"}</span>
          <IoIosArrowDown className="absolute right-10" />
        </div>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md overflow-hidden shadow-lg">
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer ${
                selectedRegion === "Africa" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFilterChange("Africa")}
            >
              Africa
            </div>
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer ${
                selectedRegion === "Americas" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFilterChange("Americas")}
            >
              Americas
            </div>
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer ${
                selectedRegion === "Asia" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFilterChange("Asia")}
            >
              Asia
            </div>
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer ${
                selectedRegion === "Europe" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFilterChange("Europe")}
            >
              Europe
            </div>
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer ${
                selectedRegion === "Oceania" ? "bg-gray-100" : ""
              }`}
              onClick={() => handleFilterChange("Oceania")}
            >
              Oceania
            </div>
            <div
              className={`p-2 md:ml-2 hover:bg-gray-100 cursor-pointer`}
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
