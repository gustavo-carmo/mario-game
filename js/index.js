const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const clouds = document.getElementById("clouds");
const gameBoardWidth = document.getElementById("game-board").offsetWidth;
const backgroundMusic = document.getElementById("background-sound");

let pipeCurrentSpeed = 2;

const jump = (e) => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
  /*
const keysListener = [32, 38, 87];

  var event = window.event ? window.event : e;

  if (keysListener.includes(event.keyCode)) {
    
  }*/
};

const startUp = () => {
  if (gameBoardWidth < 800) {
    pipeCurrentSpeed = 1.5;
  }

  backgroundMusic.play();
  loopSpeed();
};

const loopSpeed = () => {
  pipe.style.animationDuration = `${pipeCurrentSpeed}s`;

  if (pipeCurrentSpeed > 1) {
    /*
    const currentSpeedMultiplier = 0.9;
    pipeCurrentSpeed = pipeCurrentSpeed * currentSpeedMultiplier;
    console.log("pipeCurrentSpeed: ", pipeCurrentSpeed);
    */
  }
};

const loop = () => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    //clearInterval(loopId);
    //clearInterval(loopSpeedIntervalId);
    //clearTimeout(startUpId);
  }
};

const startUpId = setTimeout(startUp, 0);
const loopSpeedIntervalId = setInterval(loopSpeed, 5 * 1000);
const loopId = setInterval(loop, 10);

document.addEventListener("keyup", jump);
