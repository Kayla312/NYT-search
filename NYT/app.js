$(document).ready(function() {

  console.log("working")
$("#search").on("click",function(){
  
var userSearch = $("#search-term").val();
var numArticles = $("#record-number").val();
var startDate = $("#start-year").val();
var endDate = $("#end-year").val();

var startDate;
var endDate;
var title;
var author;
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "54f44beccf86499c8a65341ab34161c8",
  'q': userSearch,
  // 'page': numArticles,
  // 'begin_date': startDate,
  // 'end_date': endDate
});

console.log(url);

//ajax call to the api
$.ajax({
  url: url,
  method: 'GET',

}).done(function(result) {
  var docs = result.response.docs;
  console.log(docs[0].byline.original)
  // console.log(result.response.docs[0].headline.main)
  // console.log(result.response.docs[0].byline.original)


    for (var i =0; i < docs.length; i++){
      var newDiv = $("<div class='display-result'>")

        //to return title of every article within length of docs
        newDiv.html(docs[i].headline.main);
        $(".container").append(newDiv);
        console.log(docs[i]);
        // newDiv.append(docs[i].byline.original);
    }

}).fail(function(err) {
  throw err;
});})
});