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
    $("#countrybyname-alltext").click(function (e) {
        var pais = prompt("Introduce el pais en ingles");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/name/" + pais + "?fullText=true",
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
    $("#countrybyalpha").click(function (e) {
        var codigo = prompt("Introduce el codigo alpha del pais");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/alpha/" + codigo,
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
    $("#countriesbyalpha").click(function (e) {
        var paises = prompt("Cuantos paises quieres buscar?");
        var link = "https://restcountries.eu/rest/v2/alpha/?codes=";

        for (let i = 0; i < paises; i++) {
            var codigo = prompt("Introduce el pais " + (i + 1));
            if (i + 1 != paises) {
                link += codigo + ";";
            } 
        }
        $.ajax({
            type: "GET",
            url: link,
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
    $("#countriesbycurrency").click(function (e) {
        var codigo = prompt("Introduce el codigo de moneda a filtrar");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/currency/" + codigo,
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
    $("#countriesbylang").click(function (e) {
        var codigo = prompt("Introduce el codigo de idioma a filtrar");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/lang/" + codigo,
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
    $("#countriesbycapital").click(function (e) {
        var codigo = prompt("Introduce el codigo de capital a filtrar");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/capital/" + codigo,
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
    $("#countriesbycallingcode").click(function (e) {
        var codigo = prompt("Introduce el codigo telefonico a filtrar");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/callingcode/" + codigo,
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
    $("#countriesbyregion").click(function (e) {
        var codigo = prompt("Introduce el codigo de región a filtrar");
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/region/" + codigo,
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