const menuBar = document.querySelector("#abc");
const sideBar = document.querySelector(".sideBar");
const container = document.querySelector(".container")
menuBar.onclick = () => {
    sideBar.classList.toggle("small_sidebar");
    container.classList.toggle("large_container");
}


