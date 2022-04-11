import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const countryUrl = "https://restcountries.com/v2/all";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiletered] = useState([]);
  const [searchUserInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountryData = async () => {
    const res = await fetch(countryUrl);
    const countries = await res.json();
    setCountries(countries);
    console.log(countries);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const searchCountries = (userInput) => {
    setUserInput(userInput)

    if(searchUserInput) {
      const filteredCountries = countries.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(userInput.toLowerCase())
      ))

      setFiletered(filteredCountries)
    }else{
      setFiletered(countries)
    }
  }




  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl tracking-widest text-lightModeText dark:text-darkModeText font-bold md:text-7xl"> Loading Data <span className='animate-spin duration-200 px-8'>.</span></h1>
      ) : (
        <>
           <Filter searchCountries= {searchCountries} searchUserInput={searchUserInput} />
          {searchUserInput.length > 0 ? <section className="p-16 grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 ">
          {filtered.map(
            ({ alpha3Code, name, region, population, capital, flag }) => {
              return (
                <Link to={`/${name}`} key={alpha3Code}>
                  <article className="bg-lightModeElement text-lightModeText dark:bg-darkModeElement dark:text-darkModeText rounded-lg overflow-hidden shadow-sm shadow-darkModeElement">
                    <div className="">
                      <img
                        src={flag}
                        alt={name}
                        className=" md:w-full md:h-64"
                      />
                      <div className="p-4 ">
                        <h4 className="text-xl font-bold">{name}</h4>
                        <h4>
                          Population: {population.toLocaleString("en-US")}
                        </h4>
                        <h4>Region: {region}</h4>
                        <h4>Capital: {capital}</h4>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            }
          )}
        </section> : <section className="p-16 grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 ">
          {countries.map(
            ({ alpha3Code, name, region, population, capital, flag }) => {
              return (
                <Link to={`/${name}`} key={alpha3Code}>
                  <article className="bg-lightModeElement text-lightModeText dark:bg-darkModeElement dark:text-darkModeText rounded-lg overflow-hidden shadow-sm shadow-darkModeElement">
                    <div className="">
                      <img
                        src={flag}
                        alt={name}
                        className=" md:w-full md:h-64"
                      />
                      <div className="p-4 ">
                        <h4 className="text-xl font-bold">{name}</h4>
                        <h4>
                          Population: {population.toLocaleString("en-US")}
                        </h4>
                        <h4>Region: {region}</h4>
                        <h4>Capital: {capital}</h4>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            }
          )}
        </section>}
        </>
       
      )}
    </>
  );
};

export default CountryList;
