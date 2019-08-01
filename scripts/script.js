// const effect = document.querySelector(".effect");
// lottie.loadAnimation({
//   container: document.getElementById("lottie"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "https://assets4.lottiefiles.com/datafiles/0Be3ZyAz36H7Mmk/data.json"
// });
// const createBricks = () => {
//   for (let i = 0; i < 50; i++) {
//     const brick = document.createElement("div");
//     brick.className = `brick brick-${i}`;
//     [...document.querySelectorAll(".bricks")].forEach(container => {
//       container.appendChild(brick);
//     });
//   }
// };
// window.load = createBricks();

function createBricks() {
  for (let i = 0; i < 400; i++) {
    const brick = document.createElement("div");
    brick.className = "brick";
    brick.style.transitionDelay = `${(
      Math.random() * (0.5 - 0 + 1) +
      0
    ).toFixed(1)}s`;
    document.querySelector(".bricks-container").appendChild(brick);
  }
}
window.load = createBricks();

const bricks = document.querySelectorAll(" .brick");
let hitCounter = 0;
const destroy = () => {
  if (hitCounter <= 2) {
    for (let i = 0; i < 20; i++) {
      bricks[Math.floor(Math.random() * (399 - 0 + 1)) + 0].style.borderBottom =
        "1px solid white";
      bricks[Math.floor(Math.random() * (399 - 0 + 1)) + 0].style.borderRight =
        "1px solid white";
    }
    hitCounter++;
  } else {
    bricks.forEach(brick => {
      brick.style.animation = `fall 1s linear ${(
        Math.random() * (2 - 0 + 1) +
        0
      ).toFixed(1)}s forwards`;
    });
  }
};

document.querySelector(".bricks-container").addEventListener("click", destroy);
