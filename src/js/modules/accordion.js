const wedoAccordionHeader = document.querySelectorAll(".wedo__accordion-header");

wedoAccordionHeader.forEach((wedoAccordionHeader) => {
  wedoAccordionHeader.addEventListener("click", (event) => {
    wedoAccordionHeader.classList.toggle("active");
  });
});
