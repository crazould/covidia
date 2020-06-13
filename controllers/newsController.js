let API_KEY = `ace2aac7c49d43b2b89d5fc7c51da218`
let API_KEY_2 = `afb68e748fc96a0d08b2e9797f65a86d`
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
    let countryValue = country.value.toLowerCase()

    loading.innerHTML =
    `<div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
    </div>`
    resultMsg.innerHTML = ""

    $('#newsList').empty()

    let countryText = $( "#country option:selected" ).text();

    // let myurl = "https://newsapi.org/v2/top-headlines?q=COVID&country="+countryValue+"&apiKey=" +API_KEY 
    // myurl = "https://api.smartable.ai/coronavirus/news/"+countryValue
    let myurl = "https://gnews.io/api/v3/search?q=covid-19%20"+countryText+"&token="+API_KEY_2+"&lang="+countryValue

    
    var settings = {
        "url": myurl,
        "method": "GET",
        "crossDomain": true,
        // beforeSend: function(xhrObj) {
        //     xhrObj.setRequestHeader("Cache-Control", "no-cache");
        //     xhrObj.setRequestHeader("Subscription-Key", "04866c8119574c299b454bb91ee2b98b");
        // },
        "timeout": 0
    }

    $.ajax(settings).done(function (response) {
        loading.innerHTML = ""

        let articles = response.articles
        let totalResults = response.articleCount
        // let totalResults = response.totalResults


        if ( parseInt(totalResults) === 0) resultMsg.innerHTML = "there is no article"
        else if (response.errors != undefined) resultMsg.innerHTML = "unavailable, reached max request per day"
        else{
            for(let i = 0; i<totalResults; i++){
                $('#newsList').append(`
                    <div class="grid-layout mt-5">
                        <div class="news-img " style="background-image: url(${articles[i].image});">
                        </div>
                        <div class="news-text span-col">
                            <div class="news-title mb-2" id="newsTitle">
                                <a href="${articles[i].url}" target="_blank" class="my-purple">
                                    ${articles[i].title}
                                </a> 
                            </div>
                            <p class="news-content" id="newsContent">
                                ${articles[i].description}
                            </p>
                        </div>
                    </div>
                `)
            }
        }
    }).fail(function(xhr, status, error){
        loading.innerHTML = ""
        resultMsg.innerHTML = "API server is busy"
    })
}

showCountryNews()


