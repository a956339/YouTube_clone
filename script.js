


var allData;

fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBKtNXbJ-eHEGygXXMLQVQrqUn1I215u2E&q=$apple&maxResults=10&part=snippet")
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
  allData.items.map((val, index) => {

    console.log(val.id.videoId)
    const newBox = document.createElement("iframe");
    newBox.src = `https://www.youtube.com/embed/${val.id.videoId}?si=RYjWO2x3onpXtIfC`
    videos_container.appendChild(newBox);

    

  })


}