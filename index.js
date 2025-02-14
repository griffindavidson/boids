const canvas = document.querySelector('.canvas');
const menu = document.querySelector('.menu');

// prevents right-click on menu
menu.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// place obstacles
canvas.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.left = `${event.clientX - 25}px`;
    obstacle.style.top = `${event.clientY - 25}px`;
    canvas.appendChild(obstacle);
    console.log(`Obstacle Placed! (${event.clientX}, ${event.clientY})`);
});

// place boids
canvas.addEventListener("click", function(mouse) {
    const boid = document.createElement("div");
    boid.classList.add("boid");
    boid.style.left = `${mouse.clientX - 25}px`;
    boid.style.top = `${mouse.clientY - 25}px`;
    canvas.appendChild(boid);
    console.log(`Boid Placed! (${mouse.clientX}, ${mouse.clientY})`);
});