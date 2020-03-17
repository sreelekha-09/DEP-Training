function next() {
    var tempVideo = document.querySelectorAll('.card');
    let count = 0;

    if ((curr) % 15 == 0) {
        console.log(curr);
        loadNext();
    }

    for (let i = curr; i < curr + 3 && i < videoList.length; i++) {
        console.log(i);
        tempVideo[count].querySelector('img').setAttribute("src", videoList[i].snippet.thumbnails.high.url);
        tempVideo[count].querySelector('h3').innerHTML=videoList[i].snippet.title;
        tempVideo[count].querySelector('#channel').innerHTML=videoList[i].snippet.channelTitle;
        count++;
    }
    curr = curr + count;

}
function prev() {
    var tempVideo = document.querySelectorAll('.card');

    curr--;
    let prevcount = 0;
    let pcount = 2;
    for (let i = curr; i > curr - 3 && i >= 0; i--) {
        console.log(i);
        tempVideo[pcount].querySelector('img').setAttribute("src", videoList[i].snippet.thumbnails.high.url);
        tempVideo[pcount].querySelector('h3').innerHTML=videoList[i].snippet.title;
        tempVideo[pcount].querySelector('#channel').innerHTML=videoList[i].snippet.channelTitle;
        pcount--;
        prevcount++;
    }
    curr = curr - prevcount + 1;
    if (curr == 0) {
        loadPrev();
    }
}
