
const container = document.createElement('div')
document.body.appendChild(container)

for (i = 0; i<16*16; i++) {
    
    const box  = document.createElement('div')
    box.className = "boxes"
    container.appendChild(box)
    
    
}

const boxes = document.querySelectorAll('.boxes')

let width = (100/16)
boxes.forEach (box => {
    box.style.width = width+'vw'
    box.style.height = '6.25vh'
    box.style['flex'] = '1 1 auto'
    box.style['aspectRatio'] ='1/1'
    box.style['display'] = 'flex'
    box.style.boxSizing = 'border-box'
    box.style.margin = '0px'
    box.style.padding = '0px'
    
})

container.style['display'] = 'flex'
container.style['flex-wrap'] = 'wrap'
container.style['width'] = '100vw'
container.style['height'] = '100vh'
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
