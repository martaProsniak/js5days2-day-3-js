const carElement = document.createElement('div')
const body = document.querySelector('body')
let position = 0



function displayCar() {
    carElement.style.width = '100px'
    carElement.style.height = '100px'
    carElement.style.backgroundColor = 'red'

    carElement.style.position = 'absolute'
    carElement.style.left = '0px'

    body.appendChild(carElement)
}

function move() {
    position += 10
    carElement.style.left = position + 'px'
}

displayCar();

setInterval(
    // move instead of move() to pass the whole function into setInterval function
    move,
    100
)

