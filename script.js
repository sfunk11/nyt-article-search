


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
        articles = response.response.docs;
        console.log(articles);
        
    for (var i = 0; i < numRecords; i++){
      articleCount = i+1;
      $articleList = $("<ul>");
      $("#article-section").append($articleList)
    
      var headline = articles[i].headline;
      var $articleListItem = $("<li class='list-group-item articleHeadline'>");
  
      if (headline && headline.main) {
        console.log(headline.main);
        $articleListItem.append(
          "<span class='label label-primary'>" +
            articleCount +
            "</span>" +
            "<strong> " +
            headline.main +
            "</strong>"
        );
      }
  
      // If the article has a byline, log and append to $articleList
      var byline = articles[i].byline;
  
      if (byline && byline.original) {
        console.log(byline.original);
        $articleListItem.append("<h5>" + byline.original + "</h5>");
      }
  
      // Log section, and append to document if exists
      var section = articles[i].section_name;
      console.log(articles[i].section_name);
      if (section) {
        $articleListItem.append("<h5>Section: " + section + "</h5>");
      }
  
      // Log published date, and append to document if exists
      var pubDate = articles[i].pub_date;
      console.log(articles[i].pub_date);
      if (pubDate) {
        $articleListItem.append("<h5>" + articles[i].pub_date + "</h5>");
      }
  
      // Append and log url
      $articleListItem.append("<a href='" + articles[i].web_url + "'>" + articles[i].web_url + "</a>");
      console.log(articles[i].web_url);
  
      // Append the article
      $articleList.append($articleListItem);
    }
    })
  });

  $("#clearBtn").click(function(){
     $("#search").val("");
     $("#retrieveCount").val("");
     $("#startYear").val("");
     $("#endYear").val("");
  })