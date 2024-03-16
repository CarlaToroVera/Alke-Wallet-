$(document).ready(function() {
    var balance = 1500000;
  
    function updateBalance() {
      $('#saldo-cuenta').text("$" + balance.toFixed(0) + " CLP");
    }
  
    $('#deposito').click(function() {
      var amount = parseFloat($('#monto').val());
      if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        $('#monto').val('');
        alert('Deposito realizado!');
      } else {
        alert('Monto invalido. Por favor ingrese un número positivo.')
  }
    });
  });
