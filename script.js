const carElement = document.createElement('div')

carElement.style.width = '100px'
carElement.style.height = '100px'
carElement.style.backgroundColor = 'red'

carElement.style.position = 'absolute'
carElement.style.left = '0px'

const body = document.querySelector('body')
body.appendChild(carElement)

let position = 0

setInterval(
    // declaration of anonymous function
    function () {
        position += 10
        carElement.style.left = position + 'px'
    },
    100
)

