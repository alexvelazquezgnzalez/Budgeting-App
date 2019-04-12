var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";

function displayIncome() {
    totalIncome = income.value ;
}

incomeButton.addEventListener('click', displayIncome);

