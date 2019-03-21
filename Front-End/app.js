let queryURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=10";
let commentQuery = "https://ign-apis.herokuapp.com/comments?ids=3de45473c5662f25453551a2e1cb4e6e,63a71f01cca67c9bbf5e7b6f091d551d";
let videoURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=15";
let articleURL = "https://ign-apis.herokuapp.com/content?startIndex=0&count=20";
// get latest articles and videos
function getLatest()
{
    // fade feature
    $("#postArea").fadeOut().html("");
    let comArray = [];
    // ajax request and return data in json format
    $.ajax({
        type: 'GET',
        url: queryURL,
        dataType: 'JSONP',
        // success then set up the time since published and check if title or headline is available
        success: function(response) {
            response.data.forEach(function(element){
                console.log(element)
                let time = GetAge(element.metadata.publishDate);
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
                // get request for the number of comment based on the content and display everything on the area
                $.ajax({
                    type: 'GET',
                    url: `https://ign-apis.herokuapp.com/comments?ids=${element.contentId}`,
                    dataType: 'JSONP',
                    success: function(res) {
                        console.log(res);
                       
                        $("#postArea").fadeIn().append(`
                        <div class="row">
                            <div class="col-sm" id="divLeft">
                                <a href=""><img src="${element.thumbnails[0].url}" class="rounded"></a>
                            </div>
                            <div class="col-sm" id="divRight">
                                <h5>${time}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                <a href=""><h4 id="headLine">${title}</h4></a>
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
// similar as the getLatest function except for videos
function getVideos()
{
    $("#postArea").fadeOut().html("");
    $.ajax({
        type: 'GET',
        url: videoURL,
        dataType: 'JSONP',
        success: function(info) {
            console.log(info);
            info.data.forEach(function(element){
                let videoTitle = '';
                let videoTime = GetAge(element.metadata.publishDate);
                let movieTime = time_convert(element.metadata.duration);
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
                            
                            $("#postArea").fadeIn().append(`
                            <div class="row">
                                <div class="col-sm" id="divLeft">
                                    <img src="${element.thumbnails[0].url}" class="rounded" id="notRound">
                                    <a href=""><button id="button3"><img src="play-button.png" id="playImg"> ${movieTime}</button></a>
                                </div>
                                <div class="col-sm" id="divRight">
                                    <h5>${videoTime}  ·  <i class="far fa-comment fa-1x"></i> &nbsp; ${res.count}</h5>
                                    <a href="index.html"><h4 id="headLine">${videoTitle}</h4></a>
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
    $("#postArea").fadeOut().html("");
    $.ajax({
        type: 'GET',
        url: articleURL,
        dataType: 'JSONP',
        success: function(info) {
            console.log(info);
            info.data.forEach(function(element){
                let articleTitle = '';
                let articleTime = GetAge(element.metadata.publishDate);
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
                            $("#postArea").fadeIn().append(`
                            <div class="row">
                                <div class="col-sm" id="divLeft">
                                    <a href=""><img src="${element.thumbnails[0].url}" class="rounded"></a>
                                </div>
                                <div class="col-sm" id="divRight">
                                    <h5>${articleTime}  ·  <i class="far fa-comment fa-1x"></i> ${res.count}</h5>
                                    <a href=""><h4 id="headLine">${articleTitle}</h4></a>
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
// this gets the time of the published item since now
function GetAge(publishDate){
    let publishAge = Date.now() - Date.parse(publishDate);
    let seconds = (publishAge / 1000).toFixed(); 
    let minutes = (publishAge / (1000 * 60)).toFixed(); 
    let hours = (publishAge / (1000 * 60 * 60)).toFixed(); 
    let days  = (publishAge / (1000 * 60 * 60 * 24)).toFixed(); 
    if (seconds < 60) {
        return seconds+"s"
    } else if (minutes < 60) {
        return minutes+"m"
    } else if (hours < 24) {
        return hours+"h"
    } else {
        return days+"d"
    }
};
// time of each videos
function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}