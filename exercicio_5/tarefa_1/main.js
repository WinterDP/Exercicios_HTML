const colorWindow = document.querySelector(".centro")
const changeColorButton = document.querySelector("button")
const h1ColorText = document.querySelector("h1")

changeColorButton.addEventListener('click', ChangeColor)

function ChangeColor() {
    let colorRGB = RandomRGB();
    colorWindow.style.backgroundColor = colorRGB
    //console.log(colorRGB);
    h1ColorText.innerText = "Cor de fundo: " + colorRGB
}

function RandomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}