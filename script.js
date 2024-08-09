const searchButton = document.getElementById("searchButton");
searchButton.onclick = async () => {
  const searchItem = document.getElementById("searchItem").value;

  var allData;

  const videoShow = () => {
    const videos_container = document.getElementById("videos_container");

    allData.map((val, index) => {
      const newDiv = document.createElement("div");
      newDiv.className = "videoContainer";

      newDiv.innerHTML = `
        <div class="main_videos_container">
          <iframe src="https://www.youtube.com/embed/${val.id.videoId}?si=RYjWO2x3onpXtIfC" id="video_frame"></iframe>
          <div class="discription_box">
            <div class="channel_image">
              <img src="https://picsum.photos/200/300" alt="">
            </div>
            <div class="discriptions">
              <p id="video_discription">Calling on the Commandos I Inside NSG I
                  I Full Episode I Sl- El I National....</p>
              <p class="video_sub_disc">National Geographic India</p>
              <div class="views">
                <p>1.5 M views</p>
                <p>.</p>
                <p>2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      `;
      videos_container.appendChild(newDiv);
    });
  };

  await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBblUAoCPnpo1r0LVrTNH6RWzSEI0LJb8A&maxResults=10&part=snippet&q=${searchItem}`)
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      allData = results.items;  // Assuming that results contain an 'items' array
      videoShow();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
