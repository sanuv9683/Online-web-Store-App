/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function callmeiyt() {
    //add a company
    var temp = '';
    $('.tags').each(function () {
        var va = $(this).text();
        if (temp === '') {
            temp = va + ",";
        } else {
            temp = temp + va + ",";
        }
        $('#comskees').val(temp);
    });
    var formSerialised = $("#cpyAdF").serialize();
    $.post("addcompany", formSerialised, function (response) {
        if (response === 'true') {
            alertify.alert("Your company was successfully registerd ✔️");
            clearallte();
        } else {
            alertify.log("☹️Registration Failed..try again laiter..!")
        }
    });
}


function clearallte() {
    $('#coName').val("");
    $('#coName').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#coTitle').val("");
    $('#coTitle').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#comdex').val("");
    $('#comdex').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#comweba').val("");
    $('#comweba').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#comAddress').val("");
    $('#comAddress').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#comskees').val("");
    $('#comskees').css({"border": "1px solid rgb(204, 204, 204)"});
    $('#coName').focus();
    $('#cvx').empty();
}

$('#cancelBtnf').click(function () {
    clearallte();
});


