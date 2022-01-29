// init
// const key = document.querySelector(".key");
const keys = document.querySelectorAll(".key");
const audio = new Audio("./assets/audio/smw_coin.wav");

const changeStyles = (str) => {
  audio.play();
  keys.forEach((k) => {
    k.childNodes[1].textContent === str
      ? k.childNodes[1].parentElement.classList.add("change")
      : "";
    setTimeout(() => {
      k.childNodes[1].parentElement.classList.remove("change");
    }, 500);
  });
};
window.addEventListener("keypress", function (e) {
  if (e.key === "A" || e.key === "a") {
    changeStyles("A");
  }
  if (e.key === "S" || e.key === "s") {
    changeStyles("S");
  }
  if (e.key === "D" || e.key === "d") {
    changeStyles("D");
  }
  if (e.key === "F" || e.key === "f") {
    changeStyles("F");
  }
  if (e.key === "G" || e.key === "g") {
    changeStyles("G");
  }
  if (e.key === "H" || e.key === "h") {
    changeStyles("H");
  }
  if (e.key === "J" || e.key === "j") {
    changeStyles("J");
  }
  if (e.key === "K" || e.key === "k") {
    changeStyles("K");
  }
  if (e.key === "L" || e.key === "l") {
    changeStyles("L");
  }
});
