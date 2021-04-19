document.querySelector("#sun").addEventListener("click", () => {
  let planets = document.querySelectorAll(".planets");
  let count = 1;
  planets.forEach((planet) => {
    planet.style.animationDuration = `${count}s`;
    planet.classList.toggle("rotate");
    count *= 2;
  });
});
