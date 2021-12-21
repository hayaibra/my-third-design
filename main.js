let span = document.querySelectorAll(".skill .goal");
let skill = document.querySelector(".our-skills");
console.log(span);
console.log(skill);

function increaseWidth(ele) {
  ele.forEach(function (ele) {
    let percent = ele.dataset.percent;
    ele.style.width = percent;
  });
}

increaseWidth(span);

/************************************************** */
let dateSelected = new Date("Dec 31 , 2021 , 23:59:59").getTime();
let count = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = dateSelected - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days > 9 ? days : `0${days}`;
  document.querySelector(".hours").innerHTML = hours > 9 ? days : `0${hours}`;
  document.querySelector(".minutes").innerHTML =
    minutes > 9 ? minutes : `0${minutes}`;
  document.querySelector(".seconds").innerHTML =
    seconds > 9 ? seconds : `0${seconds}`;
});
/*********************************************************** */
let section = document.querySelector(".stats");
let nums = document.querySelectorAll(".box .goal");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(function () {
    ele.innerHTML++;
    if (ele.innerHTML == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
