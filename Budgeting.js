class BudgetingApp {
    constructor(){
          this.user = new AppUser();
    }

    storeUserIncome(){
        totalIncome = income.value ;
        fullIncome = fullIncome + Number.parseInt(totalIncome);
        parentIncome.textContent = fullIncome;
        parentIncome.appendChild(editIncome).textContent = "Edit Income";

    }
    editIncome(){
        parentIncome.removeChild(editIncome);
        parentIncome.appendChild(incomeButton);
        parentIncome.appendChild(income);
        income.value = "";

    }
    storeUserPurchases(){
        purchaseBox.textContent = "";

        purchases.textContent = purchaseBox.value;


    }

}
class AppUser {
    constructor(){
    }
}



let list = document.createElement('li');
let purchaseBox = document.getElementById("Purchases");
let purchaseButton = document.getElementById("addPurchase");
let purchases = document.getElementById("purchaseList");
var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";
let parentIncome = document.getElementById("totalIncome");
let editIncome = document.createElement('button');
let fullIncome = 0;
let editbox = document.createElement('input');
editbox.type = "text";





var donateButton = document.getElementById("donateIncome");























































































let ba = new BudgetingApp();


editIncome.addEventListener('click', () => {
    ba.editIncome();
     totalIncome = "";
});


incomeButton.addEventListener('click', () => {
    ba.storeUserIncome();
});


purchaseButton.addEventListener('click', () => {
    ba.storeUserPurchases();
})

