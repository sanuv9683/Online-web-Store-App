/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.getJSON("getAllClients", function (resp) {
    var response = resp;
    $("#rep1").empty();
    for (var i in response) {
        var tem = response[i];
        var row = "<tr><td>" + tem.id + "</td><td>" + tem.email + "</td><td>" + tem.nic + "</td><td>" + tem.firstName + " " + tem.lastName + "</td><td>" + tem.address + "</td></tr>";
        $("#rep1").append(row);
    }
});

$.getJSON("getAllUsers", function (resp) {
    var response = resp;
    $("#rep2").empty();
    for (var i in response) {
        var tem = response[i];
        var row = "<tr><td>" + tem.id + "</td><td>" + tem.email + "</td><td>" + tem.firstName + " " + tem.lastName + "</td><td>" + tem.address + "</td><td>" + tem.nic + "</td></tr>";
        $("#rep2").append(row);
    }
});


$.getJSON("getTodayOrders", function (resp) {
    var response = resp;
    $("#rep5").empty();
    for (var i in response) {
        var tem = response[i];
        var date = tem.odate;
        var a = date.split('at');
        var row = "<tr><td>" + tem.oid + "</td><td>" + tem.cemail + "</td><td>" + tem.iproductName + "</td><td>" + tem.ostate + "</td><td>" + tem.odate + "</td></tr>";
        $("#rep5").append(row);
    }
});

$.getJSON("getMOrders", function (resp) {
    var response = resp;
    $("#rep6").empty();
    for (var i in response) {
        var tem = response[i];
        var date = tem.odate;
        var a = date.split('at');
        var row = "<tr><td>" + tem.oid + "</td><td>" + tem.cemail + "</td><td>" + tem.iproductName + "</td><td>" + tem.ostate + "</td><td>" + tem.odate + "</td></tr>";
        $("#rep6").append(row);
    }
});


//$.getJSON("getAnual", function (resp) {
//    var response = resp;
//    $("#rep3").empty();
//    for (var i in response) {
//        var tem = response[i];
//        var date = tem.odate;
//        var a = date.split('at');
//        var row = "<tr><td>" + tem.oid + "</td><td>" + tem.cemail + "</td><td>" + tem.iproductName + "</td><td>" + tem.ostate + "</td><td>" + tem.odate + "</td></tr>";
//        $("#rep3").append(row);
//    }
//});




//$("#re5").click(function () {
//    window.location.href = "getTodayReport";
//});
////$("#re3").click(function () {
////    window.location.href = "getAnualRepo";
////});
//$("#re6").click(function () {
//    window.location.href = "getMOrdersRe";
//});


//all products




$.getJSON("getAllProducts", function (response) {
    var arr = response;
    $("#rep4").empty();
    for (var i in arr) {
        var tem = arr[i];
        var row = "<tr><td>" + tem.id + "</td><td>" + tem.productName + "</td><td>Rs : " + tem.price + "</td><td>" + tem.tax + "%</td><td>" + tem.status + "</td></tr>";
        $("#rep4").append(row);
    }
});


//$('#gencusto').click(function () {
//    window.location.href = "custReport";
//});

//$("#userre").click(function () {
//    window.location.href = "userRepo";
//});
//
//
//$("#re4").click(function () {
//    window.location.href = "repoProd";
//});


$("#toda").click(function () {
    window.open("getTodayReport");
});

$("#month").click(function () {
    window.open("getMOrdersRe");
});

$("#anual").click(function () {
    window.open("getAnualRepo");
});

$("#bestS").click(function () {
    window.open("getPrdRerepo");
});

$("#totsa").click(function () {
    window.open("duePayment");
});

$("#reon2").click(function () {
    window.open("cusOrd");
});

$("#cchd").click(function () {
    window.open("salesre");
});

$("#mkoi").click(function () {
    window.open("salesre2");
});

$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange1 span,#reportrange2 span,#reportrange3 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange1,#reportrange2,#reportrange3').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});


$("#bt1").on('click', function () {
    var text = $('#reportrange1 span').text();
    alert(text);
    window.open("getPrdRerepo2?date="+text+"");

});

$("#bt2").on('click', function () {
    var text = $('#reportrange1 span').text();
    window.open("duePayment2?date="+text+"");
});

$("#bt3").on('click', function () {
    var text = $('#reportrange1 span').text();
    window.open("cusOrd2?date="+text+"");
});
