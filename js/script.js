

const button = document.getElementById("button");
const audioelement = document.getElementById("audio");

// disable / enable button

function toglebbutton() {
    button.disabled = !button.disabled
}

// voicerss speech functionh

function tellme(joke) {
    const jokestring = joke.trim().replace(/ /g, "%20")
    // voiverss speech parameter
    VoiceRSS.speech({
        key: "b6ac19daf99647ac8e0bc1bf89a146ca",
        src: jokestring,
        hl: "en-us",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    })
}

// async function

async function getjokes() {
    let joke = ""
    const apiurl = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";
    try {
        const responce = await fetch(apiurl)
        const data = await responce.json();

        // assign one or two part joke
        if (data.setup) {
            // spread operater . . .
            joke = `${data.setup} ... ${data.delivery}`
        }
        else {
            joke = date.joke;
        }
        // passing joke to voiverss api
        tellme(joke)
        // disabled buton
        toglebbutton()
    }
    catch (error) {
        // catch error here
    }
}

// event listners

button.addEventListener("click", getjokes)
audioelement.addEventListener("ended", toglebbutton);   