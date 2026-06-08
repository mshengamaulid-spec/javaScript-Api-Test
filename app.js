function getCountry() {

    let country = document.getElementById("countryInput").value;

    fetch(`https://restcountries.com/v3.1/name/${country}`)

    .then(response => {

        if (!response.ok) {
            throw new Error("Country not found.");
        }

        return response.json();
    })

    .then(data => {

        let countryData = data[0];

        let name = countryData.name.common;

        let capital = countryData.capital
            ? countryData.capital[0]
            : "N/A";

        let region = countryData.region;

        let population = countryData.population.toLocaleString();

        let currency =
            Object.values(countryData.currencies)[0].name;

        let languages =
            Object.values(countryData.languages).join(", ");

        let flag = countryData.flags.png;

        document.getElementById("result").innerHTML = `
            <h2>${name}</h2>
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Region:</strong> ${region}</p>
            <p><strong>Population:</strong> ${population}</p>
            <p><strong>Currency:</strong> ${currency}</p>
            <p><strong>Languages:</strong> ${languages}</p>
            <img src="${flag}" alt="Flag" width="200">
        `;
    })

    .catch(error => {
        document.getElementById("result").innerHTML =
            `<p>${error.message}</p>`;
    });
};