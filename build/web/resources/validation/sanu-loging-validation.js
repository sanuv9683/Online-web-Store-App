/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//country update
$(window).load(function () {
    $.getJSON("addCountry", function () {

    });
});
$('#logbthn').click(function (e) {
    $(".loaded").fadeIn();
//    $(".preloader").delay(1000).fadeOut("slow");
    $('#email').each(function (e) {
        email_address = $(this);
        email_regex = /\S+@\S+\.\S+/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
//            alertify.log("Company name must not be empty..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Name : ✔️");
        }
    });

    $("#pass").each(function (e) {
        email_address = $(this);
        email_regex = /(?=.{5,})/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
//            alertify.log("Company title must not be empty..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Title : ✔️");
        }
    });

    var fomr = $("#loglogii").serialize();
    $.post("loginn", fomr, function (response) {
        if (response == "admin") {
            window.location.href = "adm";
            alertify.log("Login Succses As Admin: ✔️");
        } else if (response == "user") {
            window.location.href = "user";
            alertify.log("Login Succses as User: ✔️");
        } else if (response == "Banned") {
            alertify.log("Sorry You are not allowed to accsess your acount for now..!");
            $('#email').val("");
            $("#pass").val("");
            $('#email').focus();
        } else {
            alertify.log("Username Or Password Wrong..!");
            $('#email').val("");
            $("#pass").val("");
            $('#email').focus();
        }
    });

});


