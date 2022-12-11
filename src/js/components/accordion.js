const wedo__accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < wedo__accordion.length; i++) {
  wedo__accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
