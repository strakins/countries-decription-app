import React from 'react'
import { useState, useEffect} from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'

const CountryDetails = () => {

    const [country, setCountry] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { name } = useParams()
  
    
  
    useEffect(() => {
      const showCountryDetails = async () => {
        const res = await fetch(`https://restcountries.com/v2/name/${name}`);
        const country = await res.json();
        setCountry(country);
        console.log(country);
        setLoading(false);    
      }
  
      showCountryDetails();
    }, [name])

  return (
    <>
    {isLoading ? (
      <h2 className="flex items-center justify-center h-screen text-4xl tracking-widest text-lightModeText dark:text-darkModeText font-bold md:text-7xl"> Fecthing Data  <span className='animate-spin duration-200 px-8'>.</span> </h2> 
      ): (<section className='h-full lg:h-screen pt-32'>
      <Link to="/countries-decription-app" className='mx-32 px-4 py-3 shadow-lg border-2 text-lightModeText dark:text-darkModeText dark:border-darkModeElement rounded border-lightModeElement'> <FaArrowLeft className='inline'/> <h5 className='inline pt-3'>Back</h5> </Link>
       {country.map(({ name, flag, region, subregion, capital, population, nativeName, topLevelDomain, borders, languages, currencies }) => (
          <section key={name} className="overflow-y-visible py-8 mx-32 lg:flex text-lightModeText dark:text-darkModeText">
              <div className='lg:pt-16'>
                <img src={flag} alt={name} className="w-auto lg:h-96 lg:w-full mb-8" />
              </div>
              <div className='lg:flex items-center lg:pl-32 '>
                  <div>
                    <h4 className='text-4xl font-bold mb-4'>{name}</h4>
                    <h4 className='font-bold mb-3 pt-4'>Native Name:<span className='font-semibold mx-2'> {nativeName}</span></h4>
                    <h4 className='font-bold mb-3'>Population:  <span className='font-semibold mx-2'>{population.toLocaleString("en-US")}</span> </h4>
                    <h4 className='font-bold mb-3'>Region:  <span className='font-semibold mx-2'>{region}</span> </h4>
                    <h4 className='font-bold mb-3'>Sub-Region: <span className='font-semibold mx-2'>  {subregion}</span> </h4>
                    {/* <div className=''>
                    <h4 className='grid gap-2 font-bold'>Border Countries: {borders.map((border, index) =>{
                        return (
                          <div key={index} className="">
                              <h5 className="bg-gray-500 ">{border}</h5>
                          </div>
                        )
                    })} </h4>                      
                  </div> */}
                  </div>
                  <div className='lg:mt-16 lg:mx-12'>
                    <h4 className='font-bold mb-3'>Top Level Domain <span className='font-semibold mx-2'></span>{topLevelDomain}</h4>
                    <h4 className='font-bold mb-3 flex'>Currencies: <span className='font-semibold mx-2'>{currencies.map(currency => {
                      return (
                        <h4 className='font-semibold mx-2'>{currency.name}, {currency.symbol}</h4>
                      )
                    })}</span> </h4>
                    <h4 className='font-bold mb-3 flex'>Language: <span className='font-semibold mx-2'>{languages.map(language => {
                      return (
                        <h4 className='font-semibold mx-2'>{language.name}</h4>
                      )
                    })}</span> </h4>
                    <h4 className='font-bold mb-3'>Capital:  <span className='font-semibold mx-2'>{capital}</span> </h4>
                  </div>
              </div>

              
          </section>
          
       ))}
    </section>)}
</>
  )
}

export default CountryDetails