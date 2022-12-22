'use strict';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function disableStartBtn() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function disableStopBtn() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

function startBodyColor() {
  if (!timerId) {
    timerId = setInterval(changeBodyColor, 1000);
  }
  disableStartBtn();
}

function stopBodyColor() {
  clearInterval(timerId);
  timerId = null;
  disableStopBtn();
}

refs.startBtn.addEventListener('click', startBodyColor);
refs.stopBtn.addEventListener('click', stopBodyColor);
