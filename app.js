console.log("Let's get this party started!");
let gif;

async function getGif() {
    let gifInput = $(".text-input").val()
    apiKey = "0jgJnoGdV3pvTQnbzJuF2E3lnLTzVSJb"
    gif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${gifInput}&api_key=${apiKey}`)
    console.log(gif.data);
    return gif.data.data[0].images.original.url;
}

let submitButton = document.querySelector(".addGif");
submitButton.addEventListener("click", handleClick);
async function handleClick(evt) {
    evt.preventDefault();
    let selectedGif = await getGif();
    console.log(selectedGif);
    let newGif = document.createElement("img");
    newGif.className = "gif";
    newGif.src = selectedGif;
    let gifContainer = document.querySelector(".print");
    gifContainer.append(newGif);
}

let $remove = $(".remove");
$remove.on("click", removeAll);
function removeAll(evt) {
evt.preventDefault();
$(".print").empty();
}



