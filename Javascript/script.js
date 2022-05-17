let box = document.getElementById("box");
let joker = document.getElementById("joker");
let text = document.getElementById("TheBox");
let header = document.getElementById("header");
let footer

function event1() {
    box.classList.toggle("shapeshifter");

    if (text.innerHTML === "The Circle") {
        text.innerHTML = "The Box";
    } else {
        text.innerHTML = "The Circle";
    }

    if (buttontext.innerHTML === "Make a box!") {
        buttontext.innerHTML = "Make a circle!";
    } else {
        buttontext.innerHTML = "Make a box!";
    }
    
    
}

function rainbow() {
    box.classList.toggle("animation");
    joker.classList.toggle("animation");
    
}

function otherRainbow() {
    header.classList.toggle("animation");
}
//JOKEBUTTON

const jokeEl = document.getElementById('joke');
const getJoke = document.getElementById('joke_btn');

getJoke.addEventListener('click', fetchJoke);

fetchJoke();

async function fetchJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	jokeEl.innerHTML = joke.joke;
}



