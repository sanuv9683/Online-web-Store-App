/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//userr resgister
$('#usregi').click(function () {

    $('#fname').each(function (e) {
        email_address = $(this);
        email_regex = /^[a-z ,.'-]+$/i;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Something Wrong Check Again..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Name : ✔️");
        }
    });

    $('#lname').each(function (e) {
        email_address = $(this);
        email_regex = /^[a-z ,.'-]+$/i;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Something Wrong Check Again..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Name : ✔️");
        }
    });

    $('#uemail').each(function (e) {
        email_address = $(this);
        email_regex = /\S+@\S+\.\S+/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Something Wrong Check Again..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Name : ✔️");
        }
    });

    var pass1 = $('#upass').val();
    var pass2 = $('#upass2').val();
    if (pass1 != pass2) {
        $('#upass').focus();
        $('#upass').css({"border": "1px solid red"});
        $('#upass2').css({"border": "1px solid red"});
        alertify.log("Something Wrong Check Again..!");
        return false;
    } else {
        $('#upass').css({"border": "1px solid green"});
        $('#upass2').css({"border": "1px solid green"});
    }

    var use = $('#usermf').serialize();
    $.post("regnewUser", use, function (response) {
        alertify.alert("User was Successfully Registerd..!");
        loadUser();
    });
    clearUser();
});
//end user register

function  clearUser() {
    $('#fname').val("");
    $('#lname').val("");
    $('#uemail').val("");
    $('#upass').val("");
    $('#upass2').val("");
}




//view all payments end
getPay();
function getPay() {
    $.getJSON("getAllPayment", function (rep) {
        var response = rep;
        $("#tabbody2").append(dd);
        for (var i in response) {
            if (i < 7) {
                var tem = response[i];
                var dd = '<tr>\n\
                        <td><a>' + tem.id + '</a></td>\n\
                        <td>' + tem.amount + '</td>\n\
                        <td><span class="label label-success">' + tem.penndingAmount + '</span></td>\n\
                        <td>\n\
                            <div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.date + '</div>\n\
                        </td>\n\
                        </tr>';
                $("#ordertab2").append(dd);
            }
        }
    });
}

//view latest products
getProd();
function getProd() {
    $.getJSON("getAllProducts", function (response) {
        var arr = response;
        $('#lpro').empty();
        for (var i in arr) {
            var tem = arr[i];
            if (i < 5) {
                var htm = '<li class="item">\n\
                            <div class="product-img">\n\
                                <img src="resources/images/' + tem.pbanner + '" alt="Product Image">\n\
                            </div>\n\
                            <div class="product-info">\n\
                                <a href="javascript:void(0)" class="product-title">' + tem.productName + '\n\
                                    <span class="label label-warning pull-right">Rs:' + tem.price + '</span></a>\n\
                                <span class="product-description">\n\
                                   ' + tem.productName + ' Service .\n\
                                </span>\n\
                            </div>\n\
                        </li>';
                $('#lpro').append(htm);
            }
        }
    });
}
//end view latest pro

//view latest user
//
loadLa();
function loadLa() {
    $("#lluser").empty();
    $.getJSON("bestCus", function (res) {
        var temp = res;
        for (var i in temp) {
            var te = temp[i];
            if (i <= 6) {
                var tem = '<li>\n\
                    <img src="resources/images/admin.jpg" alt="User Image">\n\
                    <a class="users-list-name" href="#">' + te.firstName + '</a>\n\
                    <span class="users-list-date">View</span>\n\
                </li>';
                $("#lluser").append(tem);
            }

        }
    });
}


//end


$("#seouuu").click(function () {
    var form = $("#kwe").serialize();
    $.post("seoUser", form, function (res) {
        var resp = res;
        if (resp == "No User") {
            $('#usta').text("");
            alertify.log("No Users for this email..!");
        } else {

            $('#usta').text("");
            $('#usta').text(resp.state);
        }

    });
});

$("#ssave").click(function () {
    var form = $("#kwe").serialize();
    $.post("upstateu", form, function (res) {
        alertify.alert("Update Succsess...!");
    });
});



//client messages

'<div class="direct-chat-msg">\n\
    <div class="direct-chat-info clearfix">\n\
        <span class="direct-chat-name pull-left">Alexander Pierce</span>\n\
        <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n\
    </div>\n\
    <img class="direct-chat-img" src="resources/images/admin.jpg" alt="message user image">\n\
    <div class="direct-chat-text">\n\
        Is this template really for free? That\n\
    </div>\n\
    </div>';

//ccmess

$('#adminaa').click(function () {
    if ($("#dfcvo").val() == '') {
        alertify.log("Please Select a Image For Update..!");
        $("#dfcvo").focus();
        return false;
    }
    
    $('#dfcvo').change(
                function () {
                    var fileExtension = ['jpeg', 'jpg', 'gif'];
                    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                        alertify.log("Only '.jpeg','.jpg','.pdf' formats are allowed.");
                        return false; }
    });
    
    
    var form = new FormData($("#adpropr")[0]);
    $.ajax({
        url: "updateAdminPic",
        method: "POST",
        dataType: 'json',
        data: form,
        processData: false,
        contentType: false,
        success: function (result) {

        },
        error: function (er) {
//             alertify.alert("Profile pic Update Failed..!");
        }
    });
    alertify.alert("Profile pic Updated..!");
});



//dashboard managing
reff();
function reff() {
    $.getJSON("dashup", function (response) {
        var m = response;
        $("#for").text(m.orders);
        $("#pprr").text(m.product);
        $("#clee").text(m.clients);
        $("#sta").text(m.staff);
        $("#peno").text(m.pendingorders);
        $("#ppo").text(m.procceing);
        $("#ddo").text(m.submitO);
        $("#cco").text(m.completd);
        $("#cao").text(m.canceldO);
        $("#reo").text(m.retured);
    });
}
setInterval("reff()", 35000);

