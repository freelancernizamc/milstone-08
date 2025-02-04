// import React from 'react';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])



    return (
        <div>
            <h1>Welcome to my React Countries Website: Countries-{countries.length}</h1>
            <div className='countries-container'>
                {
                    // countries.map(country => <Country name={country.name.common} population={country.population} area={country.area} region={country.region}></Country>)
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;