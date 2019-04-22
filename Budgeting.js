class AppUser {
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





var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";
let parentIncome = document.getElementById("totalIncome");
let editIncome = document.createElement('button');
let user1 = new AppUser();



var donateIncome = document.createElement('button')












class BudgetingApp {
    constructor(){
        this.user = new appUser();
    }

    createPieGraph(){

    }
}



















































































parentIncome.addEventListener('click', () => {});

incomeButton.addEventListener('click', () => {
    user1.storeUserIncome();
});
