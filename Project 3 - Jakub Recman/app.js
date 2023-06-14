const body = document.body;
const p = document.querySelectorAll("p");
const introtext = document.querySelector(".introtext");
const undertext = document.querySelector(".undertext");
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const H4 = document.querySelectorAll("h4");
const headerScroll = document.querySelector("nav");
const pic = document.querySelector(".border");
const text = document.querySelector(".text-about-me");

//////////// BURGER SCRIPT ////////////////

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

///////////////// SCROLL ///////////////////
let arrowToTopCreated = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && !arrowToTopCreated) {
    headerScroll.classList.add("scroll");
    arrowToTopCreated = true;
    createArrowToTop();
  } else if (window.scrollY <= 200) {
    headerScroll.classList.remove("scroll");
    removeArrowToTop();
    arrowToTopCreated = false;
  }
});

///////////// ARROW TO TOP SCRIPT ////////////////

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

//////////////// DARK AND LIGHT MODE /////////////////////

const mode = document.getElementById("mode");
const localStorageKey = "preferred-mode";
let isDarkMode = false;

function toggleMode() {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  const preferredMode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem(localStorageKey, preferredMode);
}

mode.addEventListener("click", toggleMode);
const preferredMode = localStorage.getItem(localStorageKey);
if (preferredMode === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}
