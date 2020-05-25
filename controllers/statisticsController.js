
let firstCountry = document.getElementById("firstCountry")
let secondCountry = document.getElementById("secondCountry")
let firstCountryTotalCases = document.getElementById("firstCountryTotalCases")
let secondCountryTotalCases = document.getElementById("secondCountryTotalCases")
let firstCountryActiveCases = document.getElementById("firstCountryActiveCases")
let secondCountryActiveCases = document.getElementById("secondCountryActiveCases")
let firstCountryTotalRecovered = document.getElementById("firstCountryTotalRecovered")
let secondCountryTotalRecovered = document.getElementById("secondCountryTotalRecovered")
let firstCountryTotalDeaths = document.getElementById("firstCountryTotalDeaths")
let secondCountryTotalDeaths = document.getElementById("secondCountryTotalDeaths")
let firstCountryDeathsRatio = document.getElementById("firstCountryDeathsRatio")
let secondCountryDeathsRatio = document.getElementById("secondCountryDeathsRatio")

$("#firstCountry").select2({
    placeholder: "Select Country",
    allowClear: true
})

$("#secondCountry").select2({
    placeholder: "Select Country",
    allowClear: true
})

let showFirstCountryData = () => {
    let firstCountryValue = firstCountry.value
    let firstUrl = 'https://api.thevirustracker.com/free-api?countryTotal=' + firstCountryValue
    if (firstCountryValue == `Global`) firstUrl = `https://api.thevirustracker.com/free-api?global=stats`


    firstCountryTotalCases.innerHTML = 
    firstCountryActiveCases.innerHTML = 
    firstCountryTotalRecovered.innerHTML = 
    firstCountryTotalDeaths.innerHTML = 
    firstCountryDeathsRatio.innerHTML =
    
    `<div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
    </div>`

    $.ajax({
        url: firstUrl,
        dataType: 'json',
        success: function (data) {
            if (firstCountryValue == `Global`) {
                firstCountryTotalCases.innerHTML = data.results[0].total_cases
                firstCountryActiveCases.innerHTML = data.results[0].total_active_cases
                firstCountryTotalRecovered.innerHTML = data.results[0].total_recovered
                firstCountryTotalDeaths.innerHTML = data.results[0].total_deaths
                firstCountryDeathsRatio.innerHTML = `${((firstCountryTotalDeaths.innerHTML / firstCountryTotalCases.innerHTML) * 100).toFixed(2)}%`
            }
            else {
                firstCountryTotalCases.innerHTML = data.countrydata[0].total_cases
                firstCountryActiveCases.innerHTML = data.countrydata[0].total_active_cases
                firstCountryTotalRecovered.innerHTML = data.countrydata[0].total_recovered
                firstCountryTotalDeaths.innerHTML = data.countrydata[0].total_deaths
                firstCountryDeathsRatio.innerHTML = `${((firstCountryTotalDeaths.innerHTML / firstCountryTotalCases.innerHTML) * 100).toFixed(2)}%`
            }
        }
    });
}

let showSecondCountryData = () => {
    let secondCountryValue = secondCountry.value
    let secondUrl = 'https://api.thevirustracker.com/free-api?countryTotal=' + secondCountryValue
    if (secondCountryValue == `Global`) secondUrl = `https://api.thevirustracker.com/free-api?global=stats`

    secondCountryTotalCases.innerHTML = 
    secondCountryActiveCases.innerHTML = 
    secondCountryTotalRecovered.innerHTML = 
    secondCountryTotalDeaths.innerHTML = 
    secondCountryDeathsRatio.innerHTML =
    
    `<div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
    </div>`

    $.ajax({
        url: secondUrl,
        dataType: 'json',
        success: function (data) {
            if (secondCountryValue == `Global`) {
                secondCountryTotalCases.innerHTML = data.results[0].total_cases
                secondCountryActiveCases.innerHTML = data.results[0].total_active_cases
                secondCountryTotalRecovered.innerHTML = data.results[0].total_recovered
                secondCountryTotalDeaths.innerHTML = data.results[0].total_deaths
                secondCountryDeathsRatio.innerHTML = `${((secondCountryTotalDeaths.innerHTML / secondCountryTotalCases.innerHTML) * 100).toFixed(2)}%`
            }
            else {
                secondCountryTotalCases.innerHTML = data.countrydata[0].total_cases
                secondCountryActiveCases.innerHTML = data.countrydata[0].total_active_cases
                secondCountryTotalRecovered.innerHTML = data.countrydata[0].total_recovered
                secondCountryTotalDeaths.innerHTML = data.countrydata[0].total_deaths
                secondCountryDeathsRatio.innerHTML = `${((secondCountryTotalDeaths.innerHTML / secondCountryTotalCases.innerHTML) * 100).toFixed(2)}%`
            }
        }
    });
}

showFirstCountryData()
showSecondCountryData()




