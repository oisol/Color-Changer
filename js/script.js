const botao = document.getElementById("color-change");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");

// retorna hexadecimal de rgb
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

function changeColor () {
    n1 = Math.floor((Math.random() * 255) + 1)
    n2 = Math.floor((Math.random() * 255) + 1)
    n3 = Math.floor((Math.random() * 255) + 1)
    let cor = `rgb(${n1}, ${n2}, ${n3})`

    // Mudar cor do bg
    const mudaCor = document.body.style.backgroundColor = cor;
    // Valor em RGB
    rgb.innerText = `${cor.valueOf()}`; 
    // Valor RGB em HEX
    hex.innerText = `${rgbToHex(n1, n2, n3)}`; 
}

function copyRGB () {
  navigator.clipboard.writeText(rgb.innerText);
  swal({
    title: "Cor em RGB copiada!",
    text: "",
    icon: "success",
    button: "Yayyy",
  });
}

function copyHex () {
  navigator.clipboard.writeText(hex.innerText);
  swal({
    title: "Cor em Hexadecimal copiada!",
    text: "",
    icon: "success",
    button: "o(≧▽≦)o",
  });
}

botao.addEventListener("click", changeColor)
rgb.addEventListener("click", copyRGB)
hex.addEventListener("click", copyHex)

