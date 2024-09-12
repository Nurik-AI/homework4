const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const delenie = document.getElementById('delenie')
const up = document.getElementById('up')
const up2 = document.getElementById('up2')
const koren = document.getElementById('koren')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const result = document.getElementById('result')
plus.onclick = () =>{
    result.textContent = +num1.value + +num2.value
}

minus.onclick = () =>{
    result.textContent = num1.value  - num2.value
}

delenie.onclick = () =>{
    result.textContent = num1.value / num2.value
}

up.onclick = () =>{
    result.textContent = num1.value * num2.value
}
up2.onclick = () =>{
    result.textContent = num1.value ** num2.value
}

koren.onclick = () =>{
    result.textContent = Math.pow(num1.value, 1/num2.value)
}