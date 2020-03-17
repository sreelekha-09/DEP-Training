var nextPageToken = "";
var prevPageToken = "";
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);

   let controlTemplate= document.querySelector('#controls');
   let controlClone=document.importNode(controlTemplate.content,true);
   document.querySelector("body").appendChild(controlClone);
}
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyB9eBwVnCkCSII07mYmteOT-5MI43yW9xU');
}
function search(token) {
    var query = document.getElementById('query').value;
    if (token) {
        var request = gapi.client.youtube.search.list({
            part: 'snippet',
            q: query,
            maxResults: 15,
            pageToken: token
        });
    } else {
        var request = gapi.client.youtube.search.list({
            part: 'snippet',
            q: query,
            maxResults: 15,
        });
    }

    request.execute(onSearchResponse);
}
var videoList = [];
var curr = 0;

function loadNext() {
    console.log("loadNext");
    curr = 0;
    search(nextPageToken);
}
function loadPrev() {
    curr = videoList.length-3;
    console.log("loadPrev");
    search(prevPageToken);
}
