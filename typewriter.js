"use strict";

const sound = document.getElementById("typekey1");
const sound2 = document.getElementById("typekey2");

const h1 = document.querySelector("#typewriter");

const text = h1.textContent;

h1.textContent = "";

let i = 0;

function initLoop() {
  type();
}

// Define the speed of the effect
const speed = 200;

function type() {
  if (i < text.length) {
    h1.textContent += text.charAt(i);
    i++;
    console.log(i);
    sound.play();
    setTimeout(type, speed);
  }
}

// Start the typewriter effect

initLoop();
