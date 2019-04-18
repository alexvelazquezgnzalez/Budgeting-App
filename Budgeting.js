class AppUser {
    constructor(){
    }

    storeUserIncome(){
        totalIncome = income.value ;
        parentIncome.textContent = totalIncome;
        parentIncome.appendChild(editIncome).textContent = "Edit Income";

    }
    editIncome(){

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
let fullIncome = 0;

















class BudgetingApp {
    constructor(){
        this.user = new appUser();
    }
}




parentIncome.addEventListener('click', () => {
    user1.editIncome();
});

incomeButton.addEventListener('click', () => {
    user1.storeUserIncome();
    fullIncome = fullIncome+ Number.parseInt(totalIncome);
});
