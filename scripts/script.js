function createBricks() {
  for (let i = 0; i < 100; i++) {
    const brick = document.createElement("div");
    brick.className = "brick";
    brick.style.transitionDelay = `.2s`;
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
      [...bricks][45].style.animation = `fall 2.5s linear .2s forwards`;
      [...bricks][45].style.border = `1px solid #fff`;
      [...bricks][45].style.zIndex = `9`;
      hitCounter++;
    } else if (hitCounter === 1) {
      [...bricks][81].style.animation = `fall 2.5s linear .5s forwards`;
      [...bricks][81].style.border = `1px solid #fff`;
      [...bricks][81].style.zIndex = `9`;
      [...bricks][63].style.animation = `fall 2.5s linear .9s forwards`;
      [...bricks][63].style.border = `1px solid #fff`;
      [...bricks][63].style.zIndex = `9`;
      [...bricks][11].style.animation = `fall 2.5s linear .6s forwards`;
      [...bricks][11].style.border = `1px solid #fff`;
      [...bricks][11].style.zIndex = `9`;
      [...bricks][37].style.animation = `fall 2.5s linear .7s forwards`;
      [...bricks][37].style.border = `1px solid #fff`;
      [...bricks][37].style.zIndex = `9`;
      for (let i = 0; i < 30; i++) {
        bricks[
          Math.floor(Math.random() * (99 - 0 + 1)) + 0
        ].style.borderBottom = "3px solid white";
        bricks[Math.floor(Math.random() * (99 - 0 + 1)) + 0].style.borderRight =
          "3px solid white";
      }
      hitCounter++;
    }
  } else {
    hammer.classList.add("animateFall");
    bricks.forEach((brick, index) => {
      if (
        index !== 11 &&
        index !== 37 &&
        index !== 45 &&
        index !== 63 &&
        index !== 81
      ) {
        brick.style.animation = `fall .7s linear ${(
          Math.random() * (1.8 - 0.2 + 1) +
          0.2
        ).toFixed(1)}s forwards`;
        brick.style.zIndex = "9";
        setTimeout(() => {
          bricksContainer.style.zIndex = "-1";
        }, 3000);
      }
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

// handle NAV

const nav = document.querySelector(".nav");
const menuBtns = document.querySelectorAll(".menu");

menuBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

$("nav a").on("click", function(e) {
  const goToSection = `.${e.target.dataset.target}`;
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top
  });
});
