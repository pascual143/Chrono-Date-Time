window.addEventListener('DOMContentLoaded', () => {
  // watch
  const watch = document.querySelector('#watch')
  const watchScreen = watch.querySelector('.screen')

  function setTime() {
    const now = new Date()
    watchScreen.innerHTML = now.toLocaleTimeString()
  }
  setTime()
  setInterval(setTime, 1000)

  // timer
  const timer = document.querySelector('#timer')
  const timerScreen = timer.querySelector('.screen')
  const startStopBtn = timer.querySelector('#startStop')

  let timeRemaining = 10
  let jim = null

  function startStopTimer() {
    // if the timer is running stop it
    clearInterval(jim)
    jim = setInterval(() => {
      timeRemaining--
      timerScreen.textContent =  timeRemaining
      if (timeRemaining === 0) {
        clearInterval(jim)
        timer.classList.add('ringing')
        setTimeout(() => {
          timer.classList.remove('ringing')
          timeRemaining = 10
          timerScreen.textContent = timeRemaining
        }, 1500)
      }
    }, 1000)
  }

  startStopBtn.addEventListener('click', startStopTimer)
})
