let inputNumber = document.getElementById('input-number');
let message = document.getElementById('compute-result')
let buttonCom = document.getElementById('button-compute')

function plusID() {
    let number = Number(inputNumber.value)
    let outputHtml = String(620612168+number)
    message.innerHTML = outputHtml
}

buttonCom.addEventListener('click', plusID)