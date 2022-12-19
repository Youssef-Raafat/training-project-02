// Skills var
let ourSkills = document.querySelector(".our-skills");
let ourProg = document.querySelectorAll(".our-skills span");

// Stats var
let stats = document.querySelector(".stats");
let ourNumber = document.querySelectorAll(".stats .number");
let started = false; // function started ? no .. to run function one

// Start Functions
// Stats Counter
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  // Skills Progress
  if (window.scrollY >= ourSkills.offsetTop - 200) {
    ourProg.forEach((pr) => {
      pr.style.width = pr.dataset.prog;
    });
  }

  // Stats Numbers
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      ourNumber.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// start Events
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

  document.querySelector(".events .days").innerHTML =  days < 10 ? `0${days}` : days; 
  document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
