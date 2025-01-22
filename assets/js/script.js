//variables
const valueInput = document.getElementById('value');
const nameInput = document.getElementById('name');
const tableOutput = document.getElementById('transaction-list');

let counter = JSON.parse(localStorage.getItem('counter')) || 0;

let transactionList = JSON.parse(localStorage.getItem('transactionList')) || [];

if (transacitionList.length > 0) {
    transactionList.forEach(transaction => {
        TableRowCreator({id: transaction.id, ...transaction});
    });
}

function TableRowCreator(transaction) {
    const newRow = document.createElement('tr');
    newRow.id = transaction.id;
    newRow.innerHTML = `
    <td>${transaction.counter + 1}</td>
    <td>${transaction.value}</td>
    <td>${transaction.value}</td>
    <td>
        <button onClick="DeleteFunction(${transaction.id})">X</button>
    </td>
    `

    tableOutput.appendChild(newRow);
}

function AddTransaction() {

}

function DeleteFunction(id) {
    transactionList = transactionList.filter(transaction => transaction.id !== id);
    
    document.getElementById(id).remove();

}

    TableRowCreator({
        id: (counter + 1),
        name: nameInput.value,
        value: valueInput.value
    });

    localStorage.setItem('transactionList', JSON.stringify(transactionList));
    localStorage.setItem('counter', JSON.stringify(counter));

    valueInput.value = 0;
    nameInput.value = '';

    counter++;

