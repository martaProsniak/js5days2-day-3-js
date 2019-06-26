const carElement = document.createElement('div')
const body = document.querySelector('body')

const tickDuration = 10
const velocity = 100
let accelerate = false;

let position = 0


function displayCar() {
    carElement.style.width = '100px'
    carElement.style.height = '100px'
    carElement.style.backgroundColor = 'red'

    carElement.style.position = 'absolute'
    carElement.style.left = position + 'px'

    body.appendChild(carElement)
}

function move() {
    if (accelerate) {
        const displacementPerTick = velocity * (tickDuration / 1000)

        position += displacementPerTick
        carElement.style.left = position + 'px'
    }

}

displayCar();

setInterval(
    // move instead of move() to pass the whole function into setInterval function
    move,
    tickDuration
)

window.addEventListener(
    'keydown',
    function (event) {
        if (event.key === 'a') {
            accelerate = true
        }
    }
)

window.addEventListener(
    'keyup',
    function (event) {
        if (event.key === 'a') {
            accelerate = false
        }
    }
)

