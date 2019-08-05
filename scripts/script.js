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
  for (let i = 0; i < 100; i++) {
    const brick = document.createElement("div");
    brick.className = "brick";
    brick.style.transitionDelay = `.5s`;
    document.querySelector(".bricks-container").appendChild(brick);
  }
}
window.load = createBricks();

const bricks = document.querySelectorAll(" .brick");
const hammer = document.querySelector(".hammer");
const bricksContainer = document.querySelector(".bricks-container");
let hitCounter = 0;
let animationDone = false;

const destroy = () => {
  if (hitCounter < 2) {
    hammer.classList.add("animate");
    setTimeout(() => {
      hammer.classList.remove("animate");
    }, 1000);

    if (hitCounter === 0) {
      [...bricks][45].style.animation = `fall 2.5s linear .5s forwards`;
      [...bricks][45].style.border = `1px solid #fff`;
      hitCounter++;
    } else if (hitCounter === 1) {
      [...bricks][81].style.animation = `fall 2.5s linear .5s forwards`;
      [...bricks][81].style.border = `1px solid #fff`;
      [...bricks][63].style.animation = `fall 2.5s linear .9s forwards`;
      [...bricks][63].style.border = `1px solid #fff`;
      [...bricks][11].style.animation = `fall 2.5s linear .6s forwards`;
      [...bricks][11].style.border = `1px solid #fff`;
      [...bricks][37].style.animation = `fall 2.5s linear .7s forwards`;
      [...bricks][37].style.border = `1px solid #fff`;
      for (let i = 0; i < 20; i++) {
        bricks[
          Math.floor(Math.random() * (80 - 20 + 1)) + 20
        ].style.borderBottom = "1px solid white";
        bricks[
          Math.floor(Math.random() * (80 - 20 + 1)) + 20
        ].style.borderRight = "1px solid white";
      }
      hitCounter++;
    }
  } else {
    hammer.classList.add("animateFall");
    bricks.forEach(brick => {
      brick.style.animation = `fall 1s linear ${(
        Math.random() * (2.2 - 0.5 + 1) +
        0.5
      ).toFixed(1)}s forwards`;
    });
    animationDone = true;
  }
};

document.querySelector(".hammer").addEventListener("click", destroy);

const timer = setInterval(() => {
  if (animationDone) {
    setTimeout(() => {
      bricksContainer.remove();
      hammer.remove();
      clearInterval(timer);
    }, 4000);
  }
}, 10000);
