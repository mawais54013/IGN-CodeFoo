$.get("/api/news", function (res) {
    console.log(res);
});

function getArticles()
{
    $("#newsArea").html("");
    $.get("/api/news", function (res) {
        for (var i = 0; i < 10; i++) {
            if(res[i].content_type == "article")
            {
              $("#newsArea").append(`
              <div class="row">
                    <div class="col-sm-4" id="divLeft">
                        <img src="${res[i].thumb_url}" class="rounded" id="notRound">
                    </div>
                    <div class="col-sm" id="divRight">
                        <a href="index.html"><h4 id="headLine">${res[i].headline}</h4></a>
                        <p>${res[i].describe1}</p>
                    </div>
                </div>
              <br>
              `)  
            }
        }
    });
}

function getVideos()
{
    $("#newsArea").html("");
    console.log("tester")
    $.get("/api/news", function (res) {
        for (var i = 0; i < 10; i++) {
            if(res[i].content_type == "video")
            {
              $("#newsArea").append(`
              <div class="row">
                    <div class="col-sm-4" id="divLeft">
                        <img src="${res[i].thumb_url}" class="rounded" id="notRound">
                    </div>
                    <div class="col-sm" id="divRight">
                        <a href="index.html"><h4 id="headLine">${res[i].headline}</h4></a>
                        <p>${res[i].describe1}</p>
                    </div>
                </div>
              <br>
              `)  
            }
        }
    });
}