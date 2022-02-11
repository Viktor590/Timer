const timer = () => {
  const hour = document.querySelector('.hour');
  const minuts = document.querySelector('.minuts');
  const second = document.querySelector('.second');
  const buttons = document.querySelectorAll('.btn');
  const results = document.querySelector('.list');


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

  let indexArr = () => {
    let count = 1;
    for (let i = count; i <= results.children.length; i++) {
      count = i + 1
    }
    return count
  }


  function lap() {
    const hourLap = hour.textContent;
    const minutsLap = minuts.textContent;
    const secondLap = second.textContent;
    const element = document.createElement('li');
    element.classList.add('result');
    element.innerHTML = `
             <div class="result-top">
            <h3 class="result-title">
              Lap ${indexArr()}
            </h3>
            <button class="result-delete">Delete</button>
          </div>
          <h2 class="result-time">
            ${hourLap}h:${minutsLap}m:${secondLap}s
          </h2>
        `;
    results.append(element)
    const deleteBtn = document.querySelectorAll('.result-delete');

    deleteBtn.forEach((el) => {
      el.addEventListener('click', () => {
        el.parentNode.parentNode.remove()
      })
    })

  }

  function pauseTimer() {
    clearTimeout(time);
  }
}
export default timer;