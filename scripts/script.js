//Entry animation - creates div 'wall' with 100 destructible bricks. After 3 hits wall falls apart and div is removed from DOM.

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
const bricksContainer = document.querySelector(".bricks-container");
const wallAdvice = document.querySelector(".wallAdvice");
wallAdvice.textContent = `${
  window.innerWidth < 900 ? "Tap" : "Click"
} to destroy the wall!`;
let hitCounter = 0;
let animationDone = false;

const destroy = e => {
  if (hitCounter < 2) {
    if (hitCounter === 0) {
      e.target.style.animation = `fall 1.5s linear .1s forwards`;
      e.target.style.border = `3px solid #fff`;
      e.target.style.zIndex = `9`;
      hitCounter++;
    } else if (hitCounter === 1) {
      e.target.style.animation = `fall 1.5s linear .1s forwards`;
      e.target.style.border = `3px solid #fff`;
      e.target.style.zIndex = `9`;
      [...bricks][81].style.animation = `fall .7s linear .3s forwards`;
      [...bricks][81].style.border = `3px solid #fff`;
      [...bricks][81].style.zIndex = `9`;
      [...bricks][63].style.animation = `fall .7s linear .6s forwards`;
      [...bricks][63].style.border = `3px solid #fff`;
      [...bricks][63].style.zIndex = `9`;
      [...bricks][11].style.animation = `fall .7s linear .4s forwards`;
      [...bricks][11].style.border = `3px solid #fff`;
      [...bricks][11].style.zIndex = `9`;
      [...bricks][37].style.animation = `fall .7s linear .5s forwards`;
      [...bricks][37].style.border = `3px solid #fff`;
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
    wallAdvice.style.opacity = "0";
    wallAdvice.style.visibility = "hidden";
    bricks.forEach((brick, index) => {
      if (index !== 11 && index !== 37 && index !== 63 && index !== 81) {
        brick.style.animation = `fall .7s linear ${(
          Math.random() * (1.2 - 0.2 + 1) +
          0.2
        ).toFixed(1)}s forwards`;
        brick.style.zIndex = "9";
        setTimeout(() => {
          bricksContainer.style.zIndex = "-1";
        }, 2500);
      }
      e.target.style.animation = `fall 1.5s linear .1s forwards`;
      e.target.style.border = `3px solid #fff`;
      e.target.style.zIndex = `9`;
    });
    animationDone = true;
  }
};

bricks.forEach(brick => {
  brick.addEventListener("click", destroy);
});

const timer = setInterval(() => {
  if (animationDone) {
    setTimeout(() => {
      bricksContainer.remove();
      wallAdvice.remove();
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

const closeMenu = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
};

//close menu on header/section click

document.querySelectorAll("section").forEach(section => {
  section.addEventListener("click", closeMenu);
});
document.querySelector("header").addEventListener("click", closeMenu);

//header vehicle animation image change

const vehicle = document.querySelector(".vehicle");
const vehicleImg = document.querySelector(".vehicle img");

window.load = setInterval(() => {
  vehicleImg.src = `img/png/${Math.floor(Math.random() * (10 - 1 + 1)) +
    1}.png`;
  vehicle.style.animation = "ride 5s linear forwards";
  setTimeout(() => {
    vehicle.style.animation = "none";
  }, 5100);
}, 5200);

//sections on scroll animations

window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const offer = document.querySelector(".offer");
  const contact = document.querySelector(".contact");

  if (
    window.scrollY >
    about.offsetTop + about.offsetHeight - window.innerHeight - 70
  ) {
    about.classList.add("active");
  }
  if (
    window.scrollY >
    offer.offsetTop + offer.offsetHeight - window.innerHeight - 100
  ) {
    offer.classList.add("active");
  }
  if (
    window.scrollY >
    contact.offsetTop + contact.offsetHeight - window.innerHeight - 400
  ) {
    contact.classList.add("active");
  }
  if (window.scrollY < 100) {
    about.classList.remove("active");
    offer.classList.remove("active");
    contact.classList.remove("active");
  }
});

//add different transition delay for each building image

let delay;
const addDelay = () => {
  document.querySelectorAll(".building").forEach((building, index) => {
    switch (index) {
      case 0:
        delay = 0;
        break;
      case 1:
        delay = 0.4;
        break;
      case 2:
        delay = 0.5;
        break;
      case 3:
        delay = 0.1;
        break;
      case 4:
        delay = 0.2;
        break;
      case 5:
        delay = 0.6;
        break;
      case 6:
        delay = 0.7;
        break;
      case 7:
        delay = 0.3;
        break;
    }
    building.style.transitionDelay = `${delay}s`;
  });
};
window.load = addDelay();
