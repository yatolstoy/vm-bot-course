const startBtn = document.getElementById('start')
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector("#timeList")
const timeEl = document.querySelector('#time')
const board = document.getElementById('board')
const record = document.getElementById('record')
let selectedTime = null
let time = 0
let intervalId = null
let recordScore = 0

let score = 0

startBtn.addEventListener("click", (event) => {
  event.preventDefault()
  screens[0].classList.add("up")
})

timeList.addEventListener("click", event => {
  if(event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.dataset.time)
    selectedTime = time
    screens[1].classList.add("up")
    startGame()
  }
})

board.addEventListener('click', event => {
  if(event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  intervalId = setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if(time === 0) {
    finishGame()
  } else {
    let current = --time
    setTime(current)
  }
}

function setTime(value) {
  if(value < 10) value = `0${value}`
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1>
  <a href="#" class="start" id="restartBtn">Попробовать ещё</a>`
  timeEl.parentNode.classList.add('hide')
  const restartBtn = document.getElementById('restartBtn')
  restartBtn.addEventListener('click', restartGame)
  clearInterval(intervalId)
  recordScore = (score > recordScore) ? score : recordScore
  record.innerText = recordScore
}

function restartGame(event) {
  event.preventDefault()
  score = 0
  time = selectedTime
  timeEl.parentNode.classList.remove('hide')
  record.parentNode.classList.remove('hide')
  board.innerHTML = ''
  startGame()
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = colorGenerator()

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = color
  circle.style.boxShadow = `0 0 30px ${color}`

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function colorGenerator() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color; 
}