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
    brick.style.transitionDelay = `.5s`;
    document.querySelector(".bricks-container").appendChild(brick);
  }
}
window.load = createBricks();

const bricks = document.querySelectorAll(" .brick");
const hammer = document.querySelector(".hammer");
let hitCounter = 0;

const destroy = () => {
  if (hitCounter < 2) {
    hammer.classList.add("animate");
    setTimeout(() => {
      hammer.classList.remove("animate");
    }, 1000);

    if (hitCounter === 0) {
      [...bricks][191].style.animation = `fall 2.5s linear .5s forwards`;
      [...bricks][191].style.border = `1px solid #fff`;
      hitCounter++;
    } else if (hitCounter === 1) {
      [...bricks][193].style.animation = `fall 2.5s linear .5s forwards`;
      [...bricks][193].style.border = `1px solid #fff`;
      [...bricks][212].style.animation = `fall 2.5s linear .9s forwards`;
      [...bricks][212].style.border = `1px solid #fff`;
      [...bricks][109].style.animation = `fall 2.5s linear .6s forwards`;
      [...bricks][109].style.border = `1px solid #fff`;
      [...bricks][343].style.animation = `fall 2.5s linear .7s forwards`;
      [...bricks][343].style.border = `1px solid #fff`;
      for (let i = 0; i < 20; i++) {
        bricks[
          Math.floor(Math.random() * (350 - 100 + 1)) + 100
        ].style.borderBottom = "1px solid white";
        bricks[
          Math.floor(Math.random() * (350 - 100 + 1)) + 100
        ].style.borderRight = "1px solid white";
      }
      hitCounter++;
    }
  } else {
    hammer.classList.add("animateFall");
    setTimeout(() => {
      hammer.classList.remove("animate");
    }, 1000);
    bricks.forEach(brick => {
      brick.style.animation = `fall 1s linear ${(
        Math.random() * (2.2 - 0.5 + 1) +
        0.5
      ).toFixed(1)}s forwards`;
    });
  }
};

document.querySelector(".hammer").addEventListener("click", destroy);
