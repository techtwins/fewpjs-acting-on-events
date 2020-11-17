// Your code here
let dodger = document.querySelector('#dodger')
dodger.style.backgroundColor = 'red'
const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 15}px`
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

/* Move Right */

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 15}px`
  }
}
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
