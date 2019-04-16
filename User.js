var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";
let parentIncome = document.getElementById("totalIncome");
let editIncome = document.createElement('button');
incomeButton.addEventListener('click', displayIncome);

class appUser(){
    constructor(){
    }
    storeUserIncome(){
    totalIncome = income.value ;
    parentIncome.textContent = totalIncome;
    parentIncome.appendChild(editIncome).textContent = "Edit Income";

    }
    storeUserPurchases(){

    }
    userDonate(){

    }

}
