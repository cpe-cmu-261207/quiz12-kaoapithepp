//Quiz 1.1
let inputNumber = document.getElementById('input-number');
let message = document.getElementById('compute-result')
let buttonCom = document.getElementById('button-compute')

function plusID() {
    let number = Number(inputNumber.value)
    let outputHtml = String(620612168+number)
    message.innerHTML = outputHtml
}

buttonCom.addEventListener('click', plusID)


//Quiz 1.2
let inputRow = document.getElementById('input-row')
let inputCol = document.getElementById('input-col')
let genButton = document.getElementById('button-create-table')
//let showCredit = document.getElementById('show-credit')


function tableGen() {
    
}

genButton.addEventListener('click', tableGen)