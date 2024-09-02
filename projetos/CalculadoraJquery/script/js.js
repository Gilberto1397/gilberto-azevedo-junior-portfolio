$(document).ready(function() {

    //Propriedade #people desativada por tempo indefinido

    function reset() {
        $("#reset").click(function(e) {
            e.preventDefault();
            $("#comandaTotal").val(" ");
            $("#total").val(" ");
            $("#tipAmount").val(" ");
            //$("#people").val(" ")
        });
    }

    function tip() {
        do {
            var comandaTotal = $("#comandaTotal").val();
            reset()

            if (comandaTotal >= 0) {
                var gorjetaAcumulada = 0
                var btn = $(":button")
                    //var people = parseInt($("#people").val())


                $(btn).click(function(e) {
                    e.preventDefault();
                    var comandaTotal = $("#comandaTotal").val();
                    console.log();
                    if (comandaTotal > 0) {

                        var percent = this.value
                        var gorjeta = comandaTotal * percent
                        gorjetaAcumulada += gorjeta
                        console.log("Gorjeta atual de: " + gorjetaAcumulada);
                        $("#total").val("$" + gorjetaAcumulada.toFixed(2));
                        $("#tipAmount").val("$" + gorjeta.toFixed(2));
                        var comandaTotal = $("#comandaTotal").val(" ");
                        // people += 1
                        //  $("#people").val("0" + people)
                    } else {
                        comandaTotal = 0
                        gorjetaAcumulada = 0
                            //people = 0
                    }


                });

            }

        } while (comandaTotal >= 1);

    }

    tip()

});