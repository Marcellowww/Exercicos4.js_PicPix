function process(name, accountNumber, bank, bankCode, value, lname){
    reset()

    const date = new Date
    const monthArray = new Array(01, 02, 03, 03, 05, 06, 07, 08, 09, 10, 11, 12);

    document.getElementById('confirmation').style.display =' block'; 
    document.getElementById('confirmation').innerHTML = `
    <table class="table">
    <tbody>
      <tr>
        <td>Nome:</td>
        <td>${name.value}</td>
        <td>${lname.value}</td>
      </tr>
      <tr>
        <td>Agencia - Banco:</td>
        <td>${bankCode.value}</td>
        <td>${bank.value}</td>
      </tr>
      <tr>
        <td>Número da conta:</td>
        <td></td>
        <td>${accountNumber.value}</td>
      </tr>
      <tr>
        <td>Valor:</td>
        <td></td>
        <td>${value.value}</td>
      </tr>
      <tr>
        <td>Data:</td>
        <td></td>
        <td>${date.getDate()} / ${monthArray[date.getMonth()]} / ${date.getFullYear()}</td>
      </tr>
    </tbody>
  </table>
    <div class="button-container">
        <button type="submit" onclick="reset()" class="btn btn-primary">Enviar</button>
    </div>`

  document.getElementById('confirmation').style.display =' block'; 
    
}

function verify(){
    const accountNumber = document.getElementById('account-number');
    const bank = document.getElementById('bank');
    const bankCode = document.getElementById('bank-code');
    const name = document.getElementById('name');
    const lname = document.getElementById('lName');
    const value =  document.getElementById('value');

    if(accountNumber.value == "" | bank.value == "" | bankCode.value == "" | name.value == "" | value.value == "" |lname.value == "")return;
        
    process(name, accountNumber, bank, bankCode, value, lname);
    
    
}

function reset(){
    document.getElementById('confirmation').style.display =' none'; 
}

