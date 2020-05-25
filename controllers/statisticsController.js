let app = document.getElementById("app")
let content = document.getElementById("content")
let progress =  document.getElementById("progress")
let country = document.getElementById("country")
let total = document.getElementById("total")
let recovered = document.getElementById("recovered")
let unresolved = document.getElementById("unresolved")
let deaths = document.getElementById("deaths")
let newCasesToday = document.getElementById("newCasesToday")
let activeCases = document.getElementById("activeCases")
let seriousCases = document.getElementById("seriousCases")

// progress.style.display = "none";

let showData = () => {
    progress.style.display = "block";
    let xhr = new XMLHttpRequest()
    let url = "https://thevirustracker.com/free-api?countryTotal=ID"
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () =>  {
        if (xhr.readyState==4 && xhr.status==200) {
            let data = JSON.parse(xhr.responseText)
            country.innerHTML = data.countrydata[0].info.title
            total.innerHTML = data.countrydata[0].total_cases
            recovered.innerHTML = data.countrydata[0].total_recovered
            unresolved.innerHTML = data.countrydata[0].total_unresolved
            deaths.innerHTML = data.countrydata[0].total_deaths
            newCasesToday.innerHTML = data.countrydata[0].total_new_cases_today
            activeCases.innerHTML = data.countrydata[0].total_active_cases
            seriousCases.innerHTML = data.countrydata[0].total_serious_cases
            progress.style.display = "none";
        }
    }
    xhr.onerror = () => console.log('There was an error!')
    xhr.send();
}
// showBtn.addEventListener("click", showData)


