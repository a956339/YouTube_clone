const searchButton = document.getElementById("searchButton");
// searchButton.onclick = () => {

  const searchItem = document.getElementById("searchItem").value;



  var allData;

  // fetch(https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBblUAoCPnpo1r0LVrTNH6RWzSEI0LJb8A${searchItem}&maxResults=10&part=snippet)
  fetch('https://fakestoreapi.com/products/categories')
    .then((response) => response.json())  // Parse the JSON from the response
    .then((results) => {
      console.log(results);
      allData = results;
      videoShow();

      // console.log(allData.items[0].id.videoId);
    })
    .catch((error) => {

      console.error('Error:', error);
    });

  const videoShow = () => {
    const videos_container = document.getElementById("videos_container");

  
    
    allData.map((val, index) => {
      // const newBox = document.createElement("div");
      // newBox.setAttribute("allowfullscreen", true);
      // newBox.className="videoFrame"
      // // newBox.src = https://www.youtube.com/embed/${val.id.videoId}?si=RYjWO2x3onpXtIfC
      // newBox.src = "https://www.youtube.com/embed/iYS9RoqiPig?si=hz3DXBkghF6rjVgG"
      // videoList.appendChild(newBox);
 const newDiv = document.createElement("div");
      newDiv.className = "videoContainer";

      // const newBox = document.createElement("iframe");
      // newBox.className = "videoFrame";
      // newBox.src = "https://www.youtube.com/embed/iYS9RoqiPig?si=hz3DXBkghF6rjVgG";

      // const description = document.createElement("p");
      // description.innerText = "Video description";

      // newDiv.appendChild(newBox);
      // newDiv.appendChild(description);
      // videos_container.appendChild(newDiv);

      newDiv.innerHTML = `
      
 <div class="main_videos_container">
        <iframe src="https://www.youtube.com/embed/CeInpw_deRk?si=5D3Ua4TOJP9VvFJI" id="video_frame"></iframe>
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


      
      `
      
      videos_container.appendChild(newDiv);
    });
    
    
  }
// }

