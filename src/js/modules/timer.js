const timer = () => {
  const hour = document.querySelector('.hour');
  const minuts = document.querySelector('.minuts');
  const second = document.querySelector('.second');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('start')) startTimer()
      if (e.target.classList.contains('start')) startTimer()
    })
  })

  let seconds = 0;
  let time;

  function startTimer() {
    clearInterval(time);
    time = setInterval(() => {
      seconds += 10;
      let startDate = new Date(seconds);

      if (startDate.getUTCHours() <= 9) {
        hour.innerHTML = `0${startDate.getUTCHours()}`;
      } else {
        hour.innerHTML = `${startDate.getUTCHours()}`;
      }

      if (startDate.getUTCMinutes() <= 9) {
        minuts.innerHTML = `0${startDate.getUTCMinutes()}`;
      } else {
        minuts.innerHTML = `${startDate.getUTCMinutes()}`;
      }

      if (startDate.getUTCSeconds() <= 9) {
        second.innerHTML = `0${startDate.getUTCSeconds()}`;
      } else {
        second.innerHTML = `${startDate.getUTCSeconds()}`;
      }
    }, 10)
  }

  function stopTimer() {

  }

  function lap() {

  }

  function pauseTimer() {

  }

  function clearInterval() {

  }
}
export default timer;