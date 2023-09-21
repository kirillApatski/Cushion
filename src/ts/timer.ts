import {hours, minutes, seconds} from "../constants/constants.ts";

const offerTimer = document.querySelector('.header__main-limited-offer__offer-timer')


let timeInSeconds: number = hours * 3600 + minutes * 60 + seconds
export function startTimer() {
  const interval = setInterval(() => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if(offerTimer) {
      offerTimer.innerHTML = formattedTime
      timeInSeconds--
    }
    if (Number(formattedTime) === 0) {
      clearInterval(interval);
    }
  }, 1000);
}