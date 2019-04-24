class AppUser {
    constructor(){
    }

    storeUserIncome(){
        totalIncome = income.value ;
        fullIncome = fullIncome + Number.parseInt(totalIncome);
        parentIncome.textContent = fullIncome;
        parentIncome.appendChild(editIncome).textContent = "Edit Income";

    }
    editIncome(){
        parentIncome.removeChild(editIncome);
        parentIncome.appendChild(incomeButton)
        parentIncome.appendChild(income);
        income.value = "";

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
let editbox = document.createElement('input');
editbox.type = "text";





var donateButton = document.getElementById("donateIncome");













class BudgetingApp {
    constructor(){
        this.user = new AppUser();
    }
}














































































editIncome.addEventListener('click', () => {
    user1.editIncome();
     totalIncome = "";
});


incomeButton.addEventListener('click', () => {
    user1.storeUserIncome();
});



