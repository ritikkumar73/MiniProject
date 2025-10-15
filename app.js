
let gameseq = [];
let userseq = [];
let colors = ["red", "green", "purple", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 300);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // pick a random color
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameseq.push(randColor);
  console.log(gameseq);

  // flash that button
  btnflash(randbtn);
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000); // ✅ fixed
    }
  } else {
    h2.innerHTML = `Game over! Focus meri jaan 💞 Kashish 😎😁 your score is : <b>${level}</b> <br> Press any key to start again `;
    reset(); // ✅ restart game
  }
}

function btnpress() {
  let btn = this;
  btnflash(btn);

  let usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);

  checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
