import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  start: document.querySelector("button[data-action='start']"),
  stop: document.querySelector("button[data-action='stop']"),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;
refs.start.addEventListener('click', startColorGenHandler);
refs.stop.addEventListener('click', stopColorGenHandler);

function startColorGenHandler(event) {
  if (event.target) {
    event.target.disabled = true;
    intervalId = setInterval(
      () =>
        (refs.body.style.backgroundColor =
          colors[randomIntegerFromInterval(0, colors.length)]),
      1000,
    );
  }
}

function stopColorGenHandler(event) {
  if (event.target) {
    clearInterval(intervalId);
    refs.start.disabled = false;
    refs.body.style.backgroundColor = '';
  }
}
