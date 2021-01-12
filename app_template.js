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
    let num_rows = inputRow.value
    let num_cols = inputCol.value
    let tableHead = '<table border="1">\n'
    let tableBody = ''

    for (let i=0; i < num_rows;i++){
        tableBody += '<tr>'
        for (let j=0; j < num_cols; j++){
            tableBody += '<td>';
            tableBody += 'Cell ' + i + ',' + j;
            tableBody += '</td>'
        }
        tableBody += '</tr>\n';
    }
    let tableFoot = '</table>'
    document.getElementById('table').innerHTML = tableHead + tableBody + tableFoot
}

genButton.addEventListener('click', tableGen)