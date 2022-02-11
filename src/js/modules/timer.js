const timer = () => {
  const hour = document.querySelector('.hour');
  const minuts = document.querySelector('.minuts');
  const second = document.querySelector('.second');
  const buttons = document.querySelectorAll('.btn');
  const results = document.querySelector('.list')


  buttons.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('start')) startTimer()
      if (e.target.classList.contains('stop')) stopTimer()
      if (e.target.classList.contains('pause')) pauseTimer()
      if (e.target.classList.contains('lap')) lap()
    })
  })

  let seconds = 0;
  let time;
  const arr = [];


  function startTimer() {
    clearTimeout(time);

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
    clearTimeout(time)
    seconds = 0;
    hour.textContent = '00';
    minuts.textContent = '00';
    second.textContent = '00';
  }



  function lap() {
    const hourLap = hour.textContent;
    const minutsLap = minuts.textContent;
    const secondLap = second.textContent;
    const element = document.createElement('li');
    const indexLap = arr.length;
    element.classList.add('result');
    element.innerHTML = `
             <div class="result-top">
            <h3 class="result-title">
              Lap ${indexLap}
            </h3>
            <button class="result-delete">Delete</button>
          </div>
          <h2 class="result-time">
            ${hourLap}h:${minutsLap}m:${secondLap}s
          </h2>
        `;
    results.append(element)
    arr.push(element)
    console.log(arr);

  }


  function pauseTimer() {
    clearTimeout(time);
  }

  function clearInterval() {

  }
}
export default timer;