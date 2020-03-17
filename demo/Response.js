function onSearchResponse(response) {
    
    console.log(response);
    document.querySelector('#content').innerHTML = '';
    nextPageToken = response.nextPageToken;
    prevPageToken = response.prevPageToken;
 
    videoList = response.result.items;
    let template = document.querySelector('#videoTemplate');
    let fragment=document.createDocumentFragment();

    for (let i = 0; i < 3; i++) {

        let clone = document.importNode(template.content, true);
        var data = videoList[i].snippet;
        let image = clone.querySelector('img');
        image.setAttribute("src", data.thumbnails.high.url)
        clone.querySelector('h3').innerHTML=data.title;
        clone.querySelector('#channel').innerHTML=data.channelTitle;
        fragment.appendChild(clone);
        curr++;
    }
    document.querySelector('#content').appendChild(fragment);

}
