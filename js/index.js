function process(){
    console.log(bank.value)
}

function verify(){
    const accountNumber = document.getElementById('account-number');
    const bank = document.getElementById('bank');
    const bankCode = document.getElementById('bank-code');
    const name = document.getElementById('name');
    const value =  document.getElementById('value');

    if(accountNumber.value == "" | bank.value == "" | bankCode.value == "" | name.value == "" | value.value == "")return;
        
    process();
    

    
}

