const carElement = document.createElement('div')
const body = document.querySelector('body')
let position = 0
const tickDuration = 10
const velocity = 100



function displayCar() {
    carElement.style.width = '100px'
    carElement.style.height = '100px'
    carElement.style.backgroundColor = 'red'

    carElement.style.position = 'absolute'
    carElement.style.left = position + 'px'

    body.appendChild(carElement)
}

function move() {
    const displacementPerTick = velocity * (tickDuration/1000)

    position += displacementPerTick
    carElement.style.left = position + 'px'
}

displayCar();

setInterval(
    // move instead of move() to pass the whole function into setInterval function
    move,
    tickDuration
)

