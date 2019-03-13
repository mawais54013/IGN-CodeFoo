let queryURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=6";

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

function getLatest()
{
    
}