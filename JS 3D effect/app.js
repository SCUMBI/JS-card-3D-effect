// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Moving animation Event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 23;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 23;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition="none"
})
//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "All 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})