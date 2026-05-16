const clock = document.querySelector('.clock');
const hourLine = document.getElementById('hour-line');
const minuteLine = document.getElementById('minute-line');
const secondLine = document.getElementById('second-line');

function createHourNumbers() {
  for (let i = 1; i <= 12; i++) {
    const num = document.createElement('div');
    num.classList.add('hour-number');
    num.textContent = i;
    clock.appendChild(num);
  }
}

function positionHourNumbers() {
  const radius = clock.offsetWidth / 2;
  document.querySelectorAll('.hour-number').forEach((number, index) => {
    const angle = (index + 1) * 30;
    const radians = (angle - 90) * Math.PI / 180;
    const x = radius + radius * 0.78 * Math.cos(radians) - number.offsetWidth / 2;
    const y = radius + radius * 0.78 * Math.sin(radians) - number.offsetHeight / 2;
    number.style.left = `${x}px`;
    number.style.top = `${y}px`;
  });
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourText = Array(6).fill(hours).map(v => `<div>${v}</div>`).join('');
  const minuteText = Array(8).fill(minutes).map(v => `<div>${v}</div>`).join('');
  const secondText = Array(10).fill(seconds).map(v => `<div>${v}</div>`).join('');

  hourLine.innerHTML = hourText;
  minuteLine.innerHTML = minuteText;
  secondLine.innerHTML = secondText;

  const hourAngle = hours * 30 + minutes * 0.5; // smooth hour movement
  const minuteAngle = minutes * 6 + seconds * 0.1; // smooth minute movement
  const secondAngle = seconds * 6;

  hourLine.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
  minuteLine.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  secondLine.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;

}

window.onload = () => {
  createHourNumbers();
  requestAnimationFrame(positionHourNumbers);
  updateClock();
  setInterval(updateClock, 1000);
};

window.onresize = positionHourNumbers;
