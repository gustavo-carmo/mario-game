const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

const keysListener = [32, 38, 87];

const jump = (e) => {
  var event = window.event ? window.event : e;

  if (keysListener.includes(event.keyCode)) {
    mario.classList.add("jump");

    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

document.addEventListener("keyup", jump);
