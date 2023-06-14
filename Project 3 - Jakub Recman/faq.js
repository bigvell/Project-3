const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

arrows.forEach((arrow, index) => {
  const answer = answers[index];

  arrow.addEventListener("click", () => {
    answer.classList.toggle("show-faq");
    arrow.classList.toggle("arrow-rotate");
  });
});
