let randNo = document.getElementById("rand");
let generateButton = document.getElementById("genButton");
let rand;
generateButton.addEventListener("click", callGenerateRand);

function callGenerateRand()
{
generateRand(10,1);
}

function generateRand(max, min)
{
rand = Math.round(Math.random()*(max-min)+min);
randNo.innerText = rand;
}

