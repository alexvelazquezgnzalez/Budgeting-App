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
        let list = document.createElement('li');
        purchaseBox.textContent = "";
        list.textContent = purchaseBox.value;
        purchases.appendChild(list);

    }
    graphHistory(){



                var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Starting Income', 'Second Transacton', 'Third Transacton', 'fourth Transacton', 'Fifth Transacton', 'Sixth Transacton', 'Seventh Transacton'],
        datasets: [{
            label: 'Account History',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [ fullIncome, fullIncome- Number.parseInt(purchases.firstElementChild.textContent), 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
    }

}
class AppUser {
    constructor(){
    }
}



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

let graphingButton = document.getElementById("graphing");

graphingButton.addEventListener('click', () => {
    ba.graphHistory();

})

