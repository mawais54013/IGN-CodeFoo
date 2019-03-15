let queryURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=6";
let commentQuery = "https://ign-apis.herokuapp.com/comments?ids=3de45473c5662f25453551a2e1cb4e6e,63a71f01cca67c9bbf5e7b6f091d551d";
let videoURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=15";

$(document).ready(function() { 
    $.ajax({
      type: 'GET',
      url: commentQuery,
      dataType: 'JSONP',
      success: function(response) {
        console.log(response)
      }
    });  
  });

function getLatest()
{
    let comArray = [];
    $.ajax({
        type: 'GET',
        url: queryURL,
        dataType: 'JSONP',
        success: function(response) {
            $("#postArea").html("");
            response.data.forEach(function(element){
                console.log(element)
                // console.log(moment(element.metadata.publishDate).format("MM/D/YY"))
                let time = moment(element.metadata.publishDate).format("MM/D/YY");
                comArray.push(element.contentId);
                let title = "";
                if(element.metadata.title)
                {
                    title = element.metadata.title;
                }
                else 
                {
                    title = element.metadata.headline;
                }
                $.ajax({
                    type: 'GET',
                    url: `https://ign-apis.herokuapp.com/comments?ids=${element.contentId}`,
                    dataType: 'JSONP',
                    success: function(res) {
                        console.log(res);
                        $("#postArea").append(`
                        <div class="row">
                            <div class="col-sm" id="divLeft">
                                <img src="${element.thumbnails[0].url}">
                            </div>
                            <div class="col-sm" id="divRight">
                                <h5>${time}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                <h3>${title}</h3>
                            </div>
                        </div>
                        <br>
                        `)
                    }
                });
            });
        }
    });
}

function getVideos()
{
    $.ajax({
        type: 'GET',
        url: videoURL,
        dataType: 'JSONP',
        success: function(info) {
            $("#postArea").html("");
            console.log(info);
            
            // info.data.forEach(function(element){
            //     $('#postArea').append(`
            //         <h1>tester</h1>
            //     `);
            // })
        }
    });
};