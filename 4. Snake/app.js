const board = document.getElementById("board")

const SQUARES_NUMBER = 400
const colors = ['#89D8B3', '#EB6126', '#DE5B47', '#C2B802', '#0B8AA1']

for(let i = 0; i<SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add("square")

  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })


  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 3px ${color}, 0 0 30px ${color}`
  element.style.borderRadius = '50%'
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d"
  element.style.boxShadow = `0 0 3px #000`
  element.style.borderRadius = `0%`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}