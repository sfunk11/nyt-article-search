


  $("#searchBtn").on("click", function(event) {
    event.preventDefault();
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
        
    for (var i = 0; i < numRecords; i++){
      articleDiv = $("<div>");
      headlineDiv = $("<h2>").html(results[i].headline.main);
      articleDiv.append(headlineDiv);
      $("#article-section").append(articleDiv)
    }
    })
  });

  $("#clearBtn").click(function(){
     $("#search").val("");
     $("#retrieveCount").val("");
     $("#startYear").val("");
     $("#endYear").val("");
  })