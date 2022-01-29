const secondsHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegree = (seconds / 60) * 365 + 90;
  secondsHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutesDegree = (minutes / 60) * 365 + 90;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hourDegree = (hours / 12) * 365 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
