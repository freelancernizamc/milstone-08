const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

}

// const getCountryHTML = country => {
//     return ` 
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img class="w-[200px]" src="${country.flags.png}">
//     </div>
//     `
// }
// option 1
const getCountryHTML = ({ name, flags, area, region, capital }) => {
    // const { name, flags } = country;
    return ` 
    <div class="country">
        <h2 class="text-2xl text-indego-700 font-bold">${name.common}</h2>
        <img class="w-[200px]" src="${flags.png}">
        <p>Area: ${area}</p>
        <p>Continet: ${region}</p>
        <p class="text-rose-900">Capital: ${capital}</p>
    </div>
    `
}
loadCountries();