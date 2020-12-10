
var clearBtn;

  $("#searchBtn").on("click", function() {
    var searchTerm = $("#search").val();
    var numRecords = $("#retrieveCount").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    
   
    var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=kFoHJY3TcSt4AliEGG5LC5ARXr2uTneE&q=" +
    searchTerm;

    if (startYear !== ""){
        queryURL = queryURL + "&" + startYear;
    }
    if (endYear !== ""){
        queryURL = queryURL + "&" + endYear;
    }
   
   
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        results = response.response.docs;

        console.log(results);
    })
  });