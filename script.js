// const menuBar = document.querySelector("#abc");
// const sideBar = document.querySelector(".sideBar");
// const container = document.querySelector(".container")
// menuBar.onclick = () => {
//     sideBar.classList.toggle("small_sidebar");
//     container.classList.toggle("large_container");
// }


// const APIKey = AIzaSyBKtNXbJ-eHEGygXXMLQVQrqUn1I215u2E;

//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBKtNXbJ-eHEGygXXMLQVQrqUn1I215u2E


//(`${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxItems}&part=snippet`);

fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBKtNXbJ-eHEGygXXMLQVQrqUn1I215u2E&q=$apple&maxResults=10&part=snippet")
  .then((response) => response.json())  // Parse the JSON from the response
  .then((results) => {
    console.log(results); 
  })
  .catch((error) => {
    
    console.error('Error:', error);  
  });
