/*Creating the outside element wrapping the button and the sketch-area*/
const outside = document.createElement('div')
document.body.appendChild(outside)
outside.setAttribute('id', 'outside')
outside.style.display = 'flex'
outside.style.flexDirection = 'column'
outside.style.alignContent = 'space-around'
/*Dynamically changes the height when the window is resized*/
function setHeight() {
    const height = window.innerHeight;
    document.documentElement.style.setProperty('--real-vh', `${height}px`)
}
window.addEventListener('resize', setHeight)
setHeight();

const title = document.createElement('h1')
outside.append(title)

const buttonWrap = document.createElement('div')
outside.append(buttonWrap)
buttonWrap.style.display = 'flex'
const button = document.createElement('button')
buttonWrap.append(button)


const container = document.createElement('div')
outside.appendChild(container)
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
outside.style.justifyContent = 'center'
outside.style.alignItems = 'center'
outside.style.alignSelf = 'center'

title.textContent = 'Etch-a-Sketch'
title.style.margin = '0 0 20px 0'
title.setAttribute('id', 'title')

button.textContent = 'Change Grid'
button.style.fontFamily = 'Courier New'
button.style.fontWeight = '1000'
button.style.fontSize = '25px'

buttonWrap.style.margin = '0 0 20px 0'

for (i = 0; i<16*16; i++) {
    const box  = document.createElement('div')
    box.className = "boxes"
    container.appendChild(box)
}

const boxes = document.querySelectorAll('.boxes')


let height = outside.clientHeight - button.clientHeight
let width = outside.clientWidth 
const size = Math.floor(Math.min(width, height) / 16)
const containerWidth = width/2
const containerHeight = height/1.5

container.style.width = `${containerWidth}px`
container.style.height = `${containerHeight}px`
container.style.border = 'black dotted 1.5px'

button.style.fontSize = `${containerWidth/28}px`
button.style.width = `${containerWidth/3}px`

boxes.forEach (box => {
    box.style.backgroundColor = 'lightblue'
    box.style.width = `${containerWidth/16}px`;
    box.style.height = `${containerHeight/16}px`;
    box.style['display'] = 'flex'
    box.style.boxSizing = 'border-box'
    box.style.margin = '0'
    box.style.padding = '0px'
    box.style.opacity = '1'
    
})


container.style.margin = '0px'
container.style.padding = '0px'

function change(box) {
    let opacity = parseFloat(box.style.opacity)

    if (opacity > 0) {
        let change = Math.max(0, opacity-0.1)
        box.style.opacity = change.toString()
    }
    
}

const allBoxes = document.querySelectorAll('.boxes')
allBoxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
        change(box)
    })
})



button.addEventListener("click", (e) => {
    let boxwish = prompt('How many boxes do you want on a box x box basis?', 'Enter number')
    if (boxwish <=100) {
        container.innerHTML = ''
        for (i = 0; i<boxwish*boxwish; i++) {
            const box  = document.createElement('div')
            box.className = "boxes"
            container.appendChild(box)
        }

        let width = (100/boxwish)
        const boxes = document.querySelectorAll('.boxes');

        boxes.forEach (box => {
            box.style.backgroundColor = 'lightblue'
            box.style.width = `${containerWidth/boxwish}px`;
            box.style.height = `${containerHeight/boxwish}px`;
            box.style.aspectRatio = '1/1'
            box.style.boxSizing = 'border-box'
            box.style.margin = '0px'
            box.style.padding = '0px'
            box.style.opacity = '1'

        })

        const allBoxes = document.querySelectorAll('.boxes')
        allBoxes.forEach((box) => {
            box.addEventListener("mouseleave", () => {
                change(box)
            })
        })
    }

    else {
        alert('Too many boxes requested, maximum is 100.')
    }
})
