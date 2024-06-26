var exchangeForm = document.querySelector(".exchangeForm");
var result = document.querySelector(".result");
var exchange_data=[];
exchangeForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    var exchange = {
        amount:elements[0].value,
        exchange_to:elements[1].value,

    };
    exchange_data.push(exchange);
   var converted; 
   if(exchange.exchange_to === 'dollar'){
        converted=exchange.amount/3.5;}
    else if (exchange.exchange_to === 'dinar'){
        converted=exchange.amount/5;
   }
   else {
    converted=exchange.amount;}
   
    result.textContent = `Converted amount: ${converted}`;
};

