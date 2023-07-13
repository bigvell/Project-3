///////////////////////// GALLERY /////////////////////////

const modal = document.querySelector(".modal");
const scaleItem = document.querySelector(".scale-image");
const closeBtn = document.querySelector(".close-button");
const images = document.querySelectorAll(".gallery-item-img");

images.forEach((x) => {
  x.addEventListener("click", () => {
    const src = x.getAttribute("src");
    const alt = x.getAttribute("alt");
    scaleItem.setAttribute("src", src);
    scaleItem.setAttribute("alt", alt);
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
