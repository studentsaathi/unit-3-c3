// Store the wallet amount to your local storage with key "amount"
var totalamount =JSON.parse(localStorage.getItem("amount"))||[];

function add_to_wallet(){
    let amount=document.getElementById("amount").value;
    console.log(amount);
    let totals= (amount)
    document.getElementById("wallet").append(totals);
    totalamount=push.amount
    
}
localStorage.setItem("amount",JSON.stringify(totalamount));


