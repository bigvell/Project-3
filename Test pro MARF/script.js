///////////////// SCROLL TO SHOW ARROW ///////////////////
let arrowToTopCreated = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && !arrowToTopCreated) {
    arrowToTopCreated = true;
    createArrowToTop();
  } else if (window.scrollY <= 200) {
    removeArrowToTop();
    arrowToTopCreated = false;
  }
});

///////////// CREATE and REMOVE ARROW ////////////////
const body = document.body;

const createArrowToTop = () => {
  const arrowToTop = document.createElement("div");
  arrowToTop.id = "arrowToTop";
  body.appendChild(arrowToTop);
  arrowToTop.classList.add("arrow-to-top");
  arrowToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
const removeArrowToTop = () => {
  const arrowToTop = document.getElementById("arrowToTop");
  if (arrowToTop) {
    arrowToTop.remove();
  }
};

/////////////// HAMBURGER MENU /////////////////

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
