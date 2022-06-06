const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

const keysListener = [32, 38, 87];

const jump = (e) => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
  /*
  var event = window.event ? window.event : e;

  if (keysListener.includes(event.keyCode)) {
    
  }*/
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
  }
}, 10);

document.addEventListener("keyup", jump);
