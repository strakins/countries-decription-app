import React from "react";
// import { useState, useEffect } from "react";

const Filter = ({ searchUserInput, searchCountries }) => {
  // const [regions, setRegion] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

  // const region = [
  //     {
  //         name: "Africa"
  //     },
  //     {
  //         name: "America"
  //     },
  //     {
  //       name: "Asia" 
  //     },
  //     {
  //       name: "Europe"
  //     },
  //     {
  //         name: "Oceania"
  //     },
  // ]

  // const fetchCountryRegion = async (region) => {
  //   const res = await fetch(`https://restcountries.com/v2/region/${region}`);
  //   const regions = await res.json;
  //   setRegion(regions);
  //   console.log(regions);
  // };

  // useEffect(() => {
  //   fetchCountryRegion();
  // }, [regions]);

  return (
    <div>
      <section className="p-16 pt-44 md:flex md:justify-between">
        <div className="mb-4 ">
          <input
            type="search"
            name="search"
            id="search"
            className="border-2 bg-lightModeBackground 
                shadow-lg dark:bg-darkModeBackground 
                dark:text-darkModeText text-lightModeText 
                w-full md:w-72 p-2 rounded-md text-xl"
            placeholder="search for a country...."
            value={searchUserInput}
            onChange={(e) => searchCountries(e.target.value)}
          />
        </div>
        <div>
          <select
            name="select"
            id="select"
            // value={region.name}
            // onChange={(e) => fetchCountryRegion(e.target.value)}
            className="p-4 border-2 rounded-md w-72 bg-lightModeBackground shadow-lg dark:bg-darkModeBackground dark:text-darkModeText text-lightModeText text-xl"
          >
            {/* <option value="Filter by Region" className="rounded-md">
              Filter by Region
            </option> */}
            <option value="Africa">
              Africa
            </option>
            <option value="America">
              America
            </option>
            <option value="Asia">
              Asia
            </option>
            <option value="Europe">
              Europe
            </option>
            <option value="Oceania">
              Oceania
            </option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Filter;
