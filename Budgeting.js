var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";
let parentIncome = document.getElementById("totalIncome");
let editIncome = document.createElement('button');
function displayIncome() {
    totalIncome = income.value ;
    parentIncome.textContent = totalIncome;
    parentIncome.appendChild(editIncome).textContent = "Edit Income";
}

incomeButton.addEventListener('click', displayIncome);

class budgetingApp {
    constructor(){
    }
    storeUserIncome(){

    }
    storeUserPurchases(){

    }
    userDonate(){

    }

}
