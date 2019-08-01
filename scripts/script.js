const effect = document.querySelector(".effect");
lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets4.lottiefiles.com/datafiles/0Be3ZyAz36H7Mmk/data.json"
});
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

function create() {
  [...document.querySelectorAll(".bricks")].forEach(container => {
    for (let i = 0; i < 200; i++) {
      const brick = document.createElement("div");
      brick.className = "brick";
      brick.style.animationDelay = `${(Math.random() * (2 - 0 + 1) + 0).toFixed(
        1
      )}s`;
      container.appendChild(brick);
    }
  });
}
window.load = create();
