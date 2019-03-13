let queryURL = "https://ign-apis.herokuapp.com/content";

$(document).ready(function() { 
    $.ajax({
      type: 'GET',
      url: queryURL,
      dataType: 'JSONP',
      success: function(response) {
        console.log(response)
        
      }
    });  
  });
