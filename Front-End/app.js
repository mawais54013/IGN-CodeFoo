let queryURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=10";
let commentQuery = "https://ign-apis.herokuapp.com/comments?ids=3de45473c5662f25453551a2e1cb4e6e,63a71f01cca67c9bbf5e7b6f091d551d";
let videoURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=15";
let articleURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=20";

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
                                <img src="${element.thumbnails[0].url}" class="rounded">
                            </div>
                            <div class="col-sm" id="divRight">
                                <h5>${time}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                <h4>${title}</h4>
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
            let videoTitle = '';
            info.data.forEach(function(element){
                let videoTime = moment(element.metadata.publishDate).format("MM/D/YY");
                if(element.metadata.title)
                {
                    videoTitle = element.metadata.title;
                }
                else 
                {
                    videoTitle = element.metadata.headline;
                }
                if(element.contentType == 'video')
                {
                    $.ajax({
                        type: 'GET',
                        url: `https://ign-apis.herokuapp.com/comments?ids=${element.contentId}`,
                        dataType: 'JSONP',
                        success: function(res) {
                            console.log(res);
                            $("#postArea").append(`
                            <div class="row">
                                <div class="col-sm" id="divLeft">
                                    <img src="${element.thumbnails[0].url}" class="rounded">
                                </div>
                                <div class="col-sm" id="divRight">
                                    <h5>${videoTime}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                    <h4>${videoTitle}</h4>
                                </div>
                            </div>
                            <br>
                            `)
                        }
                    });
                }
            })
        }
    });
};

function getArticles()
{
    $.ajax({
        type: 'GET',
        url: articleURL,
        dataType: 'JSONP',
        success: function(info) {
            $("#postArea").html("");
            console.log(info);
            let articleTitle = '';
            info.data.forEach(function(element){
                let articleTime = moment(element.metadata.publishDate).format("MM/D/YY");
                if(element.metadata.title)
                {
                    articleTitle = element.metadata.title;
                }
                else 
                {
                    articleTitle = element.metadata.headline;
                }
                if(element.contentType == 'article')
                {
                    $.ajax({
                        type: 'GET',
                        url: `https://ign-apis.herokuapp.com/comments?ids=${element.contentId}`,
                        dataType: 'JSONP',
                        success: function(res) {
                            console.log(res);
                            $("#postArea").append(`
                            <div class="row">
                                <div class="col-sm" id="divLeft">
                                    <img src="${element.thumbnails[0].url}" class="rounded">
                                </div>
                                <div class="col-sm" id="divRight">
                                    <h5>${articleTime}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                    <h4>${articleTitle}</h4>
                                </div>
                            </div>
                            <br>
                            `)
                        }
                    });
                }
            })
        }
    });
};