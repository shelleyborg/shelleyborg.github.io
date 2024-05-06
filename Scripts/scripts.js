var videos = ['Styling/Videos/LiveShow.mp4', 'Styling/Videos/videoplayback(6).mp4'];
var currentVideoIndex = 0;

function videoslider(link) {
    document.querySelector(".slider").src = link;
    currentVideoIndex = videos.indexOf(link);
    console.log('current Vide:'+ link)
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    document.querySelector(".slider").src = videos[currentVideoIndex];
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    document.querySelector(".slider").src = videos[currentVideoIndex];
}