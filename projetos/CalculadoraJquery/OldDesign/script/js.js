$(document).ready(function() {

    function reset() {
        $("#reset").click(function(e) {
            e.preventDefault();
            $("#comandaTotal").val(" ");
            $("#total").html(" ");
            $("#tipAmount").html(" ");
            $("#people").val(" ")



        });
    }

    function tip() {
        do {

            var comandaTotal = $("#comandaTotal").val();
            reset()

            if (comandaTotal >= 0) {
                var gorjetaAcumulada = 0
                var btn = $(":button")
                var people = parseInt($("#people").val())


                $(btn).click(function(e) {
                    e.preventDefault();
                    var comandaTotal = $("#comandaTotal").val();
                    if (comandaTotal > 0) {

                        var percent = this.value
                        var gorjeta = comandaTotal * percent
                        gorjetaAcumulada += gorjeta
                        console.log("Gorjeta atual de: " + gorjetaAcumulada);
                        $("#total").html("$" + gorjetaAcumulada.toFixed(2));
                        $("#tipAmount").html("$" + gorjeta.toFixed(2));
                        var comandaTotal = $("#comandaTotal").val(" ");
                        people += 1
                        $("#people").val("0" + people)
                    } else {
                        comandaTotal = 0
                        gorjetaAcumulada = 0
                        people = 0
                    }


                });

            }

        } while (comandaTotal >= 1);

    }

    tip()

});

/* $("#bcustom").click(function (e) { 
    e.preventDefault();
   var custom = $("#bcustom").replaceWith("<input></input>").val();
   console.log(custom);
}); */