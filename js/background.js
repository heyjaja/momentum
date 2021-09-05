const images = ["1994.jpg","1978.jpg","1666.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `url(img/${chosenImage})`;

