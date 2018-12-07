
var info = {title:"Khaqan Chaudhary", balance:"500", currency:"PKRS", IBAN:'PKN0506' , Deposit:0,WithDraw:0};

 document.getElementById("title").innerHTML = info.title;
   document.getElementById("balance").innerHTML = info.balance;
document.getElementById("currency").innerHTML = info.currency;
 document.getElementById("IBAN").innerHTML = info.IBAN;
     document.getElementById("deposit").innerHTML = info.Deposit;
   document.getElementById("withdraw").innerHTML = info.WithDraw;

var title =  document.getElementById("title");
var balance =  document.getElementById("balance");
var currency = document.getElementById("currency");
var IBAN = document.getElementById("IBAN");
var Deposit = document.getElementById("deposit");
var WithDraw = document.getElementById("withdraw");
   function deposit(e){

       document.getElementById('deposit-msg').innerText = "";
       if(e.key ==='Enter')
       {
           var amount = parseInt(Deposit.value , 10 );
           if(amount >0){
               balance.value += amount;
               balance.innerText =   balance.value;
               Deposit.value= '';
               var Table = document.getElementById('transaction-table');
               Table.innerHTML += '<tr>' + '<td>'+Date()+ '</td>'+ '<td>'+ "Credit" + '</td>'+ '<td>'+ amount +'</td>'+
                   '</tr>';
           }
           else {
               var error = document.getElementById('deposit-msg');
               error.innerText = 'Please enter the valid input';
           }

       }
   }

function withdraw(e){

    document.getElementById('deposit-msg').innerText = "";
    if(e.key ==='Enter')
    {
        var amount = parseInt(WithDraw.value , 10 );
        if(amount <= balance.value && amount >0){
            balance.value -= amount;
            balance.innerText =   balance.value;
            Deposit.value= '';
            var Table = document.getElementById('transaction-table');
            Table.innerHTML += '<tr>' + '<td>'+Date()+ '</td>'+ '<td>'+ "Debit" + '</td>'+ '<td>'+ amount +'</td>'+
                '</tr>';
        }
        else {
            var error = document.getElementById('withdraw-msg');
            error.innerText = 'Please enter the valid input';
        }

    }
}