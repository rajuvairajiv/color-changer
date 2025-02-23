const heading = document.querySelector(".heading")
const btnbackground = document.querySelector(".background");
const btntitle = document.querySelector(".title");
const btnnormal = document.querySelector(".normal");
const body = document.querySelector("body");

btnbackground.addEventListener("click", function () {
    body.style.backgroundColor = 'yellow';
});

btntitle.addEventListener("click", () => {
    heading.style.fontSize = '70px';
});

btnnormal.addEventListener("click", () => {
    body.style.backgroundColor = "";
    heading.style.fontSize = "";
});