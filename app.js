console.log("Let's get this party started!");

async function getGif(){
    let newGif = $(".text-input").val()
    let apiKey = "0jgJnoGdV3pvTQnbzJuF2E3lnLTzVSJb"

    //let gif = await axios.get( "api.giphy.com/v1/gifs/translate", newGif )
    
    //let gif = await axios.get( "api.giphy.com/v1/gifs/search" ,  {q:newGif , api_key:"0jgJnoGdV3pvTQnbzJuF2E3lnLTzVSJb" } )

    let gif = await axios.get( `http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=0jgJnoGdV3pvTQnbzJuF2E3lnLTzVSJb` )
    
    
    return gif.data
}

$(".search").on("click",getGif) 