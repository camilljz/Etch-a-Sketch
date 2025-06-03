document.body.style.backgroundColor = 'lightblue'
const buttonWrap = document.createElement('div')
document.body.appendChild(buttonWrap)
const container = document.createElement('div')
document.body.appendChild(container)


const button = document.createElement('button')
buttonWrap.append(button)
buttonWrap.style.display = 'flex'
buttonWrap.style.justifyContent = 'center'
buttonWrap.style.backgroundColor = 'lightblue'
buttonWrap.style.padding = '15px 0 0 0'
button.textContent = 'Change Grid'
button.style.fontFamily = 'Courier New'
button.style.fontWeight = '1000'
button.style.fontSize = '25px'


for (i = 0; i<16*16; i++) {
    const box  = document.createElement('div')
    box.className = "boxes"
    container.appendChild(box)
    
}

const boxes = document.querySelectorAll('.boxes')

let width = (100/16)
boxes.forEach (box => {
    box.style.width = width+'%'
    box.style['aspectRatio'] ='1/1'
    box.style['display'] = 'flex'
    box.style.boxSizing = 'border-box'
    box.style.margin = '0px'
    box.style.padding = '0px'
    
})

container.style['display'] = 'flex'
container.style['flex-wrap'] = 'wrap'
container.style['backgroundColor'] = 'lightblue'
container.style.margin = '0px'
container.style.padding = '0px'


const allBoxes = document.querySelectorAll('.boxes')
allBoxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
        change(box)
    })
})

function change(box) {
    box.style['backgroundColor'] = 'white'
}

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
            box.style.width = width+'%'
            box.style.aspectRatio = '1/1'
            box.style.boxSizing = 'border-box'
            box.style.margin = '0px'
            box.style.padding = '0px'

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
