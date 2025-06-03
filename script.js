const buttonWrap = document.createElement('div')
document.body.appendChild(buttonWrap)
const container = document.createElement('div')
document.body.appendChild(container)

document.body.style.margin = '0px'
document.body.style.padding = '0px'
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
    box.style.backgroundColor = 'lightblue'
    box.style.width = width+'%'
    box.style['aspectRatio'] ='1/1'
    box.style['display'] = 'flex'
    box.style.boxSizing = 'border-box'
    box.style.margin = '0px'
    box.style.padding = '0px'
    box.style.opacity = '1'
    
})

container.style['display'] = 'flex'
container.style['flex-wrap'] = 'wrap'
container.style.margin = '0px'
container.style.padding = '0px'

function change(box) {
    let opacity = parseFloat(box.style.opacity) || 1
    let change = Math.max(0, opacity-0.1)
    box.style.opacity = change.toString()
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
            box.style.width = width+'%'
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
