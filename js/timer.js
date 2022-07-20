const timerBlock = document.querySelector('.timer__time');
const deadline = '31 June 2022';

let interval;

const updateClock = () => {
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000;
    const day = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 60 / 60 % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    const fDays = day < 10 ? '0' + day : day;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinuts = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    timerBlock.textContent = `${fDays}:${fHours}:${fMinuts}:${fSeconds}`;
    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `Акция завершена!`;

    }
};
updateClock();

interval = setInterval(updateClock, 500);