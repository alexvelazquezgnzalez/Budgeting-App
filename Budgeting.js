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
        let secondT = fullIncome- Number.parseInt(purchases.firstElementChild.textContent);
        let thirdT = secondT - Number.parseInt(purchases.children[1].textContent);
        let fourthT = thirdT - Number.parseInt(purchases.children[2].textContent);
        let fifthT = fourthT - Number.parseInt(purchases.children[3].textContent);

                var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Starting Income', 'Second Transacton', 'Third Transacton', 'fourth Transacton', 'Fifth Transacton'],
        datasets: [{
            label: 'Account History',


            backgroundColor: 'rgb(100, 100, 200)',
            borderColor: 'rgb(10, 10, 200)',
         data: [ fullIncome, secondT, thirdT , fourthT, fifthT ]

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




let li = document.getElementsByTagName('ul')[0];
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
editIncome.className = 'btn btn-danger';





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

