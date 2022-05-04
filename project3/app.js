const progressBar = document.querySelector("#progress-bar");
const section =document.querySelector('section');

const animationProgressbar = () => {
let scrollDistance = -section.getBoundingClientReact().top;
let progressWidth =  (scrollDistance /(section.getBoundingClientReact().height - document.documentElement.clientHeight)) *100;
let value = Math.floor(progresswidth);
console.log(value);
progressBar.getElementsByClassName.width = value+'%';

};
window.addEventListener("scroll",animateprogressBar);