
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
    if (event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "o&rlz=1C1RXQR_enIN963IN963&oq=" + input + "&aqs=chrome.0.0i355i433i512j46i340i433i512l2j0i131i433i512j0i131i433i650j46i340i433i512j0i512j46i433i512j0i131i433i650j0i271.2072j0j15&sourceid=chrome&ie=UTF-8";
}
