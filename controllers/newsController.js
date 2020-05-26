let API_KEY = `ace2aac7c49d43b2b89d5fc7c51da218`
let country = document.getElementById("country")
let loading = document.getElementById("myLoadingBar")
let resultMsg = document.getElementById("resultMsg")
let newsList = document.getElementById("newsList")

let newsImg = document.getElementById("newsImg")
let newsTitle = document.getElementById("newsTitle")
let newsContent = document.getElementById("newsContent")


$("#country").select2({
    placeholder: "Select Country",
    allowClear: true
})

let showCountryNews = () => {
    let countryValue = country.value
    loading.innerHTML =
    `<div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
    </div>`
    resultMsg.innerHTML = ""

    $('#newsList').empty()

    let myurl = "https://newsapi.org/v2/top-headlines?q=COVID&country="+countryValue+"&apiKey=" +API_KEY 
    
    var settings = {
        "url": myurl,
        "method": "GET",
        "crossDomain": true,
        "timeout": 0,
    }

    $.ajax(settings).done(function (response) {
        loading.innerHTML = ""
        let articles = response.articles
        let totalResults = response.totalResults
        if (totalResults <= 0) resultMsg.innerHTML = "there is no article"
        else{
            for(let i = 0; i<(totalResults); i++){
                $('#newsList').append(`
                    <div class="row my-5">
                        <div class="col-3">
                            <img src="${articles[i].urlToImage}" alt="unavailable" class="img-fluid" id="newsImg">
                        </div>
                        <div class="col-9">
                            <div class="bold-1 mb-2" id="newsTitle">
                                <a href="${articles[i].url}" target="_blank" class="my-purple">
                                    ${articles[i].title}
                                </a> 
                            </div>
                            <p class="text-dark" id="newsContent">
                                ${articles[i].content}
                            </p>
                        </div>
                    </div>
                `)
            }
        }
    }).fail(function(xhr, status, error){

        resultMsg.innerHTML = `Oops X(
            Error - ${xhr.status} :  ${xhr.statusText}`

    })
}

showCountryNews()


