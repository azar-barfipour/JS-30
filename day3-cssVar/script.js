const input = document.querySelectorAll("input");

function changeHandler(e) {
  const prefix = e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    `${e.target.value}${prefix}`
  );
}

input.forEach((el) => el.addEventListener("change", changeHandler));
input.forEach((el) => el.addEventListener("mousemove", changeHandler));
