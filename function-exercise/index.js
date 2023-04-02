document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const face = document.querySelector(".face");
    let count = 0;
    function moveBobLeft() {
      count += 50;
      if (count <= 800) {
        face.style.left = count + "px";
      }
    }

    function moveBobRight() {
      count -= 50;
      if (count >= -800) {
        face.style.left = count + "px";
      }
    }
    face.addEventListener("click", moveBobLeft);
    face.addEventListener("contextmenu", moveBobRight);
  });
});
