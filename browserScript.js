const meowrush = document.querySelector('.meowrush-picture') 
const meowrushBlock = document.querySelector(".meowrush-block")

const a = navigator.vendor.includes("Apple") || navigator.vendor.includes("apple")
console.log(a)

if (a) {
    console.log('safari')
    meowrush.classList.add('meowrush-picture-safari')
    meowrushBlock.classList.add("meowrush-block-safari")
} else {
    console.log('not safari')
} 