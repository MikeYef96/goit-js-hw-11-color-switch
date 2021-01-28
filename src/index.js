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

refs.start.addEventListener('click', startColorGenHandler);
// refs.stop.addEventListener('click', stopColorGenHandler);

function startColorGenHandler() {
  refs.body.style.backgroundColor = setInterval(
    randomIntegerFromInterval(...colors),
    1000,
  );
}

// const handleColorGeneration = event => {
//   body.style.backgroundColor = colors;
// };

// startBtn.addEventListener('click', handleColorGeneration);
// stopBtn.addEventListener('click', handleStopColorGeneration);
