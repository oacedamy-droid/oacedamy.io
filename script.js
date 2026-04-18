/* SLIDER */
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(()=>{
slides[i].classList.remove("active");
i = (i+1)%slides.length;
slides[i].classList.add("active");
},4000);

/* INTRO FIX */
window.addEventListener("load", ()=>{
let intro = document.getElementById("intro");

setTimeout(()=>{
intro.classList.add("intro-hide");
document.body.classList.remove("intro-lock");
},2000);

setTimeout(()=>{
intro.remove();
},3000);
});
