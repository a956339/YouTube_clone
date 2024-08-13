const searchButton = document.querySelector("#searchButton");
var allData;

const videoShow = () => {
  const videos_container = document.getElementById("videos_container");
  videos_container.innerHTML = '';

  allData.map((val) => {
    const newDiv = document.createElement("div");
    newDiv.className = "videoContainer";

    newDiv.innerHTML = `
          <div class="main_videos_container">
       
         <iframe src="https://www.youtube.com/embed/${val.id.videoId}" id="video_frame"></iframe>
        <div class="discription_box">
          <div class="channel_image">
            <img src="https://picsum.photos/200/300" alt="">
          </div>
          <div class="discriptions">
          <a href="./play_video.html"> <p class="video_sub_disc">${val.snippet.channelTitle}</p></a>
           
            <div class="views">
              <p>1.5 M views</p>
              <p>.</p>
              <p>${val.snippet.publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    videos_container.appendChild(newDiv);
  });
};

const fetchVideo = async () => {
  await fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBblUAoCPnpo1r0LVrTNH6RWzSEI0LJb8A&maxResults=10&part=snippet")
    .then((response) => response.json())
    .then((results) => {
      console.log(results.items);
      allData = results.items;
      videoShow();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

window.onload = fetchVideo;

searchButton.addEventListener("click", async () => {
  const searchItem = document.getElementById("searchItem").value;
  await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBblUAoCPnpo1r0LVrTNH6RWzSEI0LJb8A&maxResults=10&part=snippet&q=${searchItem}`)
    .then((response) => response.json())
    .then((results) => {
      allData = results.items;
      videoShow();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
