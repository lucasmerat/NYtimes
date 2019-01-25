$("#search").on("click", callApi);
//defining values from form



//Function, called when button is clicked
function callApi() {
    let numArticles = $("#numRecords").val();
    let startYear = $("#yearStart").val();
    let endYear = $("#yearEnd").val();
    console.log(numArticles)
    console.log(startYear)
    console.log(endYear)
    let query = $("#searchTerm").val(); //populates w value of input
    console.log(query)
    let queryUrl =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    query +
    "&api-key=ESPfbi81ALjWpcr4Uxvw22WdCB6MJHt3&begin_date=" +
    //Adds start and end year to dates
    startYear +
    "0101&end_date=" +
    endYear +
    "1231";
    console.log(queryUrl)
  //Ajax call that calls pullQuery once response is loaded
  $.ajax({ url: queryUrl, method: "GET" }).then(pullQuery);
  function pullQuery(response) {
    console.log(response);
    console.log(response.response.docs[0].web_url);
    //Loop to pull articles and append them
    console.log(numArticles)
    var list = $("#articles").append("<ul class=list>")
    for (let i = 0; i < numArticles; i++) {
      $(".list").append("<h1 class="+i+">");
      $('.'+ i).text(response.response.docs[i].headline.main)
      $('.list').append("<p>"+ response.response.docs[i].snippet + "</p>")
    }
  }
}