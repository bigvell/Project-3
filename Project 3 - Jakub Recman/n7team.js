const titleContainer = document.querySelector(".title-container");
const btn = document.querySelector(".btn-to-rolling-text");
const header = document.querySelector(".header-me");

const createDiv = (obsah) => {
  const div = document.createElement("div");
  div.textContent = obsah;
  titleContainer.appendChild(div);
  div.classList.add("title");
  div.addEventListener("animationend", () => {
    btn.style.visibility = "visible";
    header.style.visibility = "visible";
  });
};

btn.addEventListener("click", () => {
  createDiv(
    "I am a descendant of an ancient race of dark sorcerers, with magical abilities passed down through generations. I have acquired powerful sorcery skills and can command dark rituals and manipulate energies. My lifelong goal has always been to defeat and destroy the heroes who stand against the forces of darkness. However, recently, I decided that I deserve a break and some respite from my malevolent pursuits. Thus, I embarked on a vacation to momentarily silence my wickedness. I chose the planet Dalorix, one of the most exotic destinations in the galaxy. On this planet, adorned with forests and colossal waterfalls, I can find tranquility and relaxation away from the world of superheroes. Here, I can enjoy observing incredible creatures and exploring the secrets of forgotten temples. Even on vacation, I cannot rid myself of my sorcerous powers. On the planet Dalorix, I can utilize my magic to commune with nature, control the elements, and safeguard against dangers. Nevertheless, I strive to keep my magical prowess in the background and focus on relaxation and the discovery of this fantastic planet. After the vacation ends, I will return to the realm of supervillains with renewed energy and a fresh perspective. I intend to develop new dark spells and strategies that will aid me in achieving ultimate victory over those pesky superheroes. However, the timing and location of my return remain concealed for now."
  );
  btn.style.visibility = "hidden";
  header.style.visibility = "hidden";
});
