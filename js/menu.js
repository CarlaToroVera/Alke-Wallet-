$(document).ready(function() {
    // Simular la obtención del saldo actual 
    var saldoActual = 1500000;
    $("#saldo-cuenta").text("$" + saldoActual);

    $("#ver-transacciones").click(function() {
        window.location.href = "transactions.html";
    });

    $("#realizar-deposito").click(function() {
        window.location.href = "deposit.html";
    });

    $("#enviar-dinero").click(function() {
        window.location.href = "sendmoney.html";
    });
});
