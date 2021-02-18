$(function () {
    $("#allcountries").click(function (e) { 
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/all",
            dataType: "json",
            headers: {
                'Accept':'application/json',
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                console.log(response);
                alert("Mira la respuesta por Consola");
            },
            error: function (error) {
                console.log(error);
            }
        });
        e.preventDefault();
        
    });
    $("#countrybyname").click(function (e) {
        var pais = prompt("Introduce el pais en ingles");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/name/" + pais,
            dataType: "json",
            headers: {
                'Accept':'application/json',
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                console.log(response);
                alert("Mira la respuesta por Consola");
            },
            error: function (error) {
                console.log(error);
            }
        });
        e.preventDefault();
        
    });
});