/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
lco();
$('#ho').click(function () {
    window.location.href = "adm";
});
$('#pu').click(function () {
    window.location.href = "addorder";
});
$('#pe').click(function () {
    window.location.href = "pendingorder";
});
$('#puo').click(function () {
    window.location.href = "ongoing";
});
$('#dol').click(function () {
    window.location.href = "submitorders";
});
$('#reon').click(function () {
    window.location.href = "returnorder";
});
$('#cch').click(function () {
    window.location.href = "canorder";
});
$('#mki').click(function () {
    window.location.href = "addpro";
});
$('#upi').click(function () {
    window.location.href = "updatepro";
});
$('#vpro').click(function () {
    window.location.href = "viewpro";
});
$('#cr').click(function () {
    window.location.href = "repocust";
});
$('#ure').click(function () {
    window.location.href = "repousr";
});
$('#ore').click(function () {
    window.location.href = "repoorder";
});
$('#posd').click(function () {
    window.location.href = "repopro";
});
$('#sty').click(function () {
    $.post("whois", function (e) {
        var res = e;
        if (res == "adm") {
            window.location.href = "admset";
        } else if (res == "use") {
            window.location.href = "setting";
        }
    });
});

$('#home').click(function () {
    window.location.href = "adm";
});

$('#userm').click(function () {
    window.location.href = "userform";
});

$('#backupm').click(function () {
    $('#lloggd2').empty();
    var htp = '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">\n\
                                   <div class="modal-dialog">\n\
                                         <div class="loginmodal-container">\n\
                                                 <h1>Enter Admin Email Password..!</h1><br>\n\
                                           <form id="fcid">\n\
                                                 <input type="text" name="email" placeholder="Email">\n\
                                                 <input type="password" name="pass" placeholder="Password">\n\
                                                 <button type="button" id="papn">Confirm</button>\n\
                                           </form>\n\
                                                 \n\
                                           <div class="login-help">\n\
                                                 <a href="#">Register</a> - <a href="#">Forgot Password</a>\n\
                                           </div>\n\
                                         </div>\n\
                                 </div>\n\
                           </div>';
    $('#lloggd2').append(htp);
    $("#login-modal").modal("show");

    $("#papn").click(function () {
        var fomr = $("#fcid").serialize();
        $.post("loginn", fomr, function (response) {
            if (response == "admin") {
                alertify.alert("Bacupup Completed..Check Volume C for Bacup..!");
                $('.modal').modal('hide');
                $.getJSON("backup");
            } else if (response == "user") {
                alertify.log("You Cannot Use This Account...Sorry..!");
            } else if (response == "Banned") {
                alertify.log("You Cannot Use This Account...Sorry..!");
            } else {
                alertify.log("Username Or Password Wrong..!");
            }
        });
    });


});

$('#settingsm').click(function () {
    $.post("whois", function (e) {
        var res = e;
        if (res == "adm") {
            window.location.href = "admset";
        } else if (res == "use") {
            window.location.href = "setting";
        }
    });

});



//email send from setting
$("#ssbtn").click(function () {
    var email = $("#emailSen").serialize();
    $.post("sendm", email, function () {});
    alertify.log('Email Sended..!');
    $("#emailmessage").val("");
    $("#emailad").val("");
    $("#emsub").val("");
});


//update user or admin details

$("#btnttn").click(function () {
    var details = $("#updateFor").serialize();
    $.post("updateUA", details, function () {
        alertify.alert('User Details Updated..!');
    });
    $("#ufname").val("");
    $("#ulname").val("");
    $("#uuemail").val("");
    $("#uuaddress").val("");
    $("#unumber").val("");
    $("#unic").val("");
});




//update user or admin pass
$("#btnttn2").click(function () {
    var details = $("#passCh").serialize();
    var newPas = $("#newPass").val();
    var newPas2 = $("#cnPass").val();
    if (newPas == newPas2) {
        $.post("changePass", details, function (res) {
            if (res == "ok") {
                alertify.alert('Password Changed..!');
                $("#cuurentP").val("");
                $("#newPass").val("");
                $("#cnPass").val("");
            } else {
                alertify.alert('Plz try Again Laiter..!');
                $("#cuurentP").val("");
                $("#newPass").val("");
                $("#cnPass").val("");
            }
        });

    } else {
        alertify.log("Both PassWords Must Be Same....!");
    }


});




//show pending orders
viewAllDO();
function viewAllDO() {
    $.getJSON("getAllOrdersInDetails", function (resp) {
        var response = resp;
        $("#tab1").empty();
        $("#tab2").empty();
        $("#tab3").empty();
        $("#tab4").empty();
        $("#tab5").empty();
        $("#tab6").empty();
        $("#tab7").empty();

        for (var i in response) {
            var tem = response[i];

            var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                           <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-primary">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
            $("#tab7").append(dd);

            if (tem.ostate == "Pending") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                           <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-primary">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab1").append(dd);
            } else if (tem.ostate == "Processing") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-info">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab2").append(dd);
            } else if (tem.ostate == "Delivered") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                          <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-success">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab3").append(dd);
            } else if (tem.ostate == "Completed") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-danger">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab4").append(dd);
            } else if (tem.ostate == "Returned") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-danger">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab5").append(dd);
            } else if (tem.ostate == "Cancelled") {
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-danger">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tab6").append(dd);
            }
            $(function () {
                $('#exm1').DataTable()
                $('#exm2').DataTable()
                $('#exm3').DataTable()
                $('#exm4').DataTable()
                $('#exm5').DataTable()
                $('#exm6').DataTable()
                $('#exm7').DataTable()
                $('#exm8').DataTable({
                    'paging': true,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': true,
                    'info': true,
                    'autoWidth': false
                });
            });
        }

        $('.cc').click(function () {
            $('#mymo2').empty();
            $.getJSON("OrderInDetails?id=" + this.id + "", function (resp) {
                var response = resp;
                if (response.ostate == "Pending") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo" enctype="multipart/form-data" method="post"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdingsa@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select name="pay" class="form-control" style="margin-top:10px">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p style="margin-top:50px">Upload a document for this order</p>\n\
                                                                         <hr>\n\
                                                                          <div class="form-group">\n\
                                                                            <label>Select Document</label> \n\
                                                                            <label class="pull-right label label-success clit" style="cursor: pointer;">Upload</label> \n\
                                                                            <input type="file" name="cvupload" class="" style="max-width:350px;overflow: hidden;">\n\
                                                                            <input type="text" name="id" style="display:none" class="" value="' + response.oid + '">\n\
                                                                        </div>\n\
                                                                        <div class="form-group">\n\
                                                                            <textarea name="coomm" value="' + response.ocomment + '" class="form-control" row="3">\n\
                                                                            </textarea>\n\
                                                                        </div>\n\
                                                                      <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-primary" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Processing</option>\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                    $('.clit').click(function () {
                        var form = new FormData($("#flo")[0]);
                        $.ajax({
                            url: "savepdf",
                            method: "POST",
                            dataType: 'json',
                            data: form,
                            processData: false,
                            contentType: false,
                            success: function (result) {

                            },
                            error: function (er) {
                            }
                        });
                        alertify.alert("Document Uploaded..!");
                    });
                } else if (response.ostate == "Processing") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p>Select Your Payment Plan Before Perchace</p>\n\
                                                                         <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-info" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Delivered</option>\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Delivered") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: Dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p>Select Your Payment Plan Before Perchace</p>\n\
                                                                        <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-warning" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Completed</option>\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                            <option>Returned</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Completed") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control optii" disabled>\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input disabled="" type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst" class="label label-success">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Cancelled") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select disabled="" style="margin-top:10px" name="pay" class="form-control optii">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input disabled="" name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst" class="label label-danger">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Returned") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select disabled="" style="margin-top:10px" name="pay" class="form-control optii">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input disabled="" name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst"  class="label label-danger">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                }
                $("#psete").click(function () {
                    payFix();
                });
                function payFix() {
                    var tax = parseFloat($('#tax').val());
                    var fixedP = parseFloat($('#fulla').text());
                    var fixedP2 = parseFloat($('#fixedp').val());
                    var mustPay = parseFloat($('#ppa').val());

//if customer havent pay yet
                    if ($("#pa2").val() == 0) {
                        //tax gen
                        var resss = (fixedP * tax) / 100 + fixedP;
                        $("#ppam").val(resss);//fixed price with tax
                        if ($('#ppa').val() != "") {
                            var souldpay = parseFloat($("#ppam").val());
                            var alredPay = parseFloat($('#ppa').val());
                            var balace = souldpay - alredPay;
                            $("#ppam").val(balace);

                            var pa = parseFloat($("#pa2").val());
                            var cusp = parseFloat($("#ppa").val());
                            var sdf = pa + cusp;
                            $("#pa").val(sdf);

                        } else {
                            $('#ppa').focus();
                        }
                    } else {
                        $("#tax").prop('disabled', true);
                        if ($('#ppa').val() != "") {
                            var shdPay = parseFloat($("#fixedp").val());
                            var alredPay = parseFloat($('#ppa').val());
                            var balace = shdPay - alredPay;
                            $("#ppam").val(balace);

                            var pa = parseFloat($("#pa2").val());
                            var cusp = parseFloat($("#ppa").val());
                            var sdf = pa + cusp;
                            $("#pa").val(sdf);

                        } else {
                            $('#ppa').focus();
                        }
                    }

                }
                $(".orpro").click(function () {
                    payFix();
                    var vv = $(".optii").find(':selected').val();
                    if (vv == "Cancelled") {
                        var htp = '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">\n\
                                   <div class="modal-dialog">\n\
                                         <div class="loginmodal-container">\n\
                                                 <h1>Enter Admin Email Password..!</h1><br>\n\
                                           <form id="fcid">\n\
                                                 <input type="text" name="email" placeholder="Email">\n\
                                                 <input type="password" name="pass" placeholder="Password">\n\
                                                 <button type="button" id="papn">Confirm</button>\n\
                                           </form>\n\
                                                 \n\
                                           <div class="login-help">\n\
                                                 <a href="#">Register</a> - <a href="#">Forgot Password</a>\n\
                                           </div>\n\
                                         </div>\n\
                                 </div>\n\
                           </div>';
                        $('#lloggd').append(htp);
                        $("#login-modal").modal("show");

                        $("#papn").click(function () {
                            var fomr = $("#fcid").serialize();
                            $.post("loginn", fomr, function (response) {
                                if (response == "admin") {
                                    var aa = $("#flo").serialize();
                                    $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                                        alertify.alert("Order Was Successfully Updated..!");
                                        viewAllDO();
                                        $('.modal').modal('hide');
                                    });
                                } else if (response == "user") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else if (response == "Banned") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else {
                                    alertify.log("Username Or Password Wrong..!");
                                }
                            });
                        });


                    } else if (vv == "Returned") {
                        var htp = '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">\n\
                                   <div class="modal-dialog">\n\
                                         <div class="loginmodal-container">\n\
                                                 <h1>Enter Admin Email Password..!</h1><br>\n\
                                           <form id="fcid">\n\
                                                 <input type="text" name="email" placeholder="Email">\n\
                                                 <input type="password" name="pass" placeholder="Password">\n\
                                                 <button type="button" id="papn">Confirm</button>\n\
                                           </form>\n\
                                                 \n\
                                           <div class="login-help">\n\
                                                 <a href="#">Register</a> - <a href="#">Forgot Password</a>\n\
                                           </div>\n\
                                         </div>\n\
                                 </div>\n\
                           </div>';
                        $('#lloggd').append(htp);
                        $("#login-modal").modal("show");

                        $("#papn").click(function () {
                            var fomr = $("#fcid").serialize();
                            $.post("loginn", fomr, function (response) {
                                if (response == "admin") {
                                    var aa = $("#flo").serialize();
                                    $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                                        alertify.alert("Order Was Successfully Updated..!");
                                        viewAllDO();
                                        $('.modal').modal('hide');
                                    });
                                } else if (response == "user") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else if (response == "Banned") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else {
                                    alertify.log("Username Or Password Wrong..!");
                                }
                            });
                        });


                    } else if (vv == "Completed") {
                        var i = parseInt($('#ppam').val());
                        if (i == 0) {
                            var aa = $("#flo").serialize();
                            $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                                alertify.alert("Order Was Successfully Updated..!");
                                viewAllDO();
                                $('.modal').modal('hide');
                            });
                        } else {
                            alertify.alert("Please Complete the Payment..!");
                        }
                    } else {
                        var aa = $("#flo").serialize();
                        $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                            alertify.alert("Order Was Successfully Updated..!");
                            viewAllDO();
                            $('.modal').modal('hide');
                        });
                    }
                });
            });
        });
    });
}

setInterval("viewAllDO()", 10000);

//load pro
getProo();
function getProo() {
    $.getJSON("getAllProducts", function (response) {
        var arr = response;
        $('#prselec').empty();
        $('#pspele').empty();
        $('#mymo').empty();
        for (var i in arr) {
            var tem = arr[i];
            if (tem.status == "available") {
                var htm = '<option class="form-controll">' + tem.productName + '</option>';
                $('#prselec').append(htm);              
            }
             $('#pspele').append(htm);
        }
    });
}



$('#adcuor').click(function () {
    $('#ofname').each(function (e) {
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

    $("#olname").each(function (e) {
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
//            alertify.log("Company Title : ✔️");
        }
    });

    $("#octry").each(function (e) {
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
//            alertify.log("Company Title : ✔️");
        }
    });

    $("#olctye").each(function (e) {
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
//            alertify.log("Company Title : ✔️");
        }
    });

    $("#oemail").each(function (e) {
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
//            alertify.log("Company Title : ✔️");
        }
    });


    $("#onic").each(function (e) {
        email_address = $(this);
        email_regex = /[0-9]{9}[x|X|v|V]$/g;
        if (email_address.val() != "") {
            if (!email_regex.test(email_address.val())) {
                email_address.focus();
                email_address.css({"border": "1px solid red"});
                alertify.log("6.!");
                e.preventDefault();
                return false;
            } else {
                email_address.css({"border": "1px solid green"});
            }
        } else {
            email_address.css({"border": "1px solid green"});
        }

    });


    $("#oppo").each(function (e) {
        email_address = $(this);
        email_regex = /^[0-9]+$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Something Wrong Check Again..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Title : ✔️");
        }
    });

    $("#ooadde").each(function (e) {
        email_address = $(this);
        if (email_address.val() == "") {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Something Wrong Check Again..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
//            alertify.log("Company Title : ✔️");
        }
    });

    var form = $('#aduserorder2').serialize();
    $.post("proceedOrder2", form, function (res) {
        alertify.alert("Order Was Aded Successfully..!");
        $('#ofname').val("");
        $('#olname').val("");
        $('#octry').val("");
        $('#olctye').val("");
        $('#oemail').val("");
        $('#onic').val("");
        $('#oppo').val("");
        $('#ooadde').val("");
        $('#oocomme').val("");
        clr();
        viewAllDO();
    });
});

$("#onic,#ofname,#oocomme,#oppo,#olctye").click(function () {
    var email = $("#oemail").val();
    $.getJSON("searchClient?email=" + email + "", function (res) {
        $('#ofname').val(res.firstName);
        $('#olname').val(res.lastName);
        $('#octry').val(res.country);
        $('#olctye').val(res.city);
        $('#oemail').val(res.email);
        $('#onic').val(res.nic);
        $('#oppo').val(res.conumber);
        $('#ooadde').val(res.address);
        $('#oocomme').val(res.comment);
    });

});


$('#canc').click(function () {
    clr();
});

function clr() {
    $('#ofname').val("");
    $('#olname').val("");
    $('#octry').val("");
    $('#olctye').val("");
    $('#oemail').val("");
    $('#onic').val("");
    $('#oppo').val("");
    $('#ooadde').val("");
    $('#oocomme').val("");
}

$("#abcdbtn").click(function () {
    $("#seres").fadeIn(1500);
    var form = $("#abcd").serialize();
    $("#tabb").empty();
    $.post("advaSer", form, function (resp) {
        if (resp.constructor === Array) {
            for (var i in resp) {
                var respp = resp;
                var tem = respp[i];
                var dd = '<tr>\n\
                            <td><a>' + tem.oid + '</a></td>\n\
                            <td><a>' + tem.ofrom + '</a></td>\n\
                            <td><a>' + tem.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.iproductName + '</div>\n\
                            <td><span class="label label-danger">' + tem.ostate + '</span></td>\n\
                            <td><span id="' + tem.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
                $("#tabb").append(dd);
            }
        } else {
            $("#tabb").empty();
            var dd = '<tr>\n\
                            <td><a>' + resp.oid + '</a></td>\n\
                            <td><a>' + resp.ofrom + '</a></td>\n\
                            <td><a>' + resp.cemail + '</a></td>\n\
                            <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + resp.iproductName + '</div>\n\
                            <td><span class="label label-danger">' + resp.ostate + '</span></td>\n\
                            <td><span id="' + resp.oid + '" class="label label-warning cc">View Order</span></td>\n\
                            </td>\n\
                        </tr>';
            $("#tabb").append(dd);
        }
        $('.cc').click(function () {
            $('#mymo2').empty();
            $.getJSON("OrderInDetails?id=" + this.id + "", function (resp) {
                var response = resp;
                if (response.ostate == "Pending") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo" enctype="multipart/form-data" method="post"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select name="pay" class="form-control" style="margin-top:10px">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p style="margin-top:50px">Upload a document for this order</p>\n\
                                                                         <hr>\n\
                                                                          <div class="form-group">\n\
                                                                            <label>Select Document</label> \n\
                                                                            <label class="pull-right label label-success clit" style="cursor: pointer;">Upload</label> \n\
                                                                            <input type="file" name="cvupload" class="" style="max-width:350px;overflow: hidden;">\n\
                                                                            <input type="text" name="id" style="display:none" class="" value="' + response.oid + '">\n\
                                                                        </div>\n\
                                                                        <div class="form-group">\n\
                                                                            <textarea name="coomm" value="' + response.ocomment + '" class="form-control" row="3">\n\
                                                                            </textarea>\n\
                                                                        </div>\n\
                                                                      <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-primary" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                            <option>Processing</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    $("#ppam,#pa").prop('disabled', true);
                    $('.clit').click(function () {
                        var form = new FormData($("#flo")[0]);
                        $.ajax({
                            url: "savepdf",
                            method: "POST",
                            dataType: 'json',
                            data: form,
                            processData: false,
                            contentType: false,
                            success: function (result) {

                            },
                            error: function (er) {
                            }
                        });
                        alertify.alert("Document Uploaded");
                    });
                } else if (response.ostate == "Processing") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p>Select Your Payment Plan Before Perchace</p>\n\
                                                                         <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-info" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Delivered</option>\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Delivered") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Methods:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                        <p>Select Your Payment Plan Before Perchace</p>\n\
                                                                        <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span class="label label-warning" id="stst">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Update Status:</th>\n\
                                                                                    <td>\n\
                                                                                        <select name="option" class="form-control optii">\n\
                                                                                            <option>Completed</option>\n\
                                                                                            <option>Cancelled</option>\n\
                                                                                            <option>Returned</option>\n\
                                                                                        </select>\n\
                                                                                    </td>\n\
                                                                                </tr>\n\
                                                                                <tr><td></td><td><label class="label label-danger" id="psete">Settle Payment</label></td></tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button" id="' + response.oid + '" class="btn btn-success orpro">Proceed</button>\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Completed") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select style="margin-top:10px" name="pay" class="form-control optii" disabled>\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input disabled="" type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst" class="label label-success">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Cancelled") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select disabled="" style="margin-top:10px" name="pay" class="form-control optii">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input disabled="" name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst" class="label label-danger">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                } else if (response.ostate == "Returned") {
                    $('#mymo2').empty();
                    var gtm2 = '<form id="flo"><div id="">\n\
                                <div class="modal fade" id="oid' + response.oid + '" tabindex="-1" role="dialog">\n\
                                    <div class="modal-dialog  modal-lg">\n\
                                        <!-- Modal content-->\n\
                                        <div class="modal-content">\n\
                                            <div class="modal-header">\n\
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                                <h2>Order View</h2>\n\
                                            </div>\n\
                                            <div class="modal-body">\n\
                                                <!-- /.box -->\n\
                                                <!-- general form elements disabled -->\n\
                                                <div class="">\n\
                                                    <div class="">\n\
                                                    </div>\n\
                                                    <!-- /.box-header -->\n\
                                                    <div class="box-body">\n\
                                                        \n\
                                                        <div class="wrapper">\n\
                                                            <!-- Main content -->\n\
                                                            <section class="invoice">\n\
                                                                <!-- title row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12">\n\
                                                                        <h2 class="page-header">\n\
                                                                            <i class="fa fa-globe"></i> DinmarkHoldings.\n\
                                                                            <small class="pull-right">Date:' + response.pdate + '</small>\n\
                                                                        </h2>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- info row -->\n\
                                                                <div class="row invoice-info">\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        From\n\
                                                                        <address>\n\
                                                                            <strong>' + response.cfirstName + ' ' + response.clastName + '</strong><br>\n\
                                                                            ' + response.caddress + '<br>\n\
                                                                            ' + response.country + '   ' + response.ccity + '<br>\n\
                                                                            Phone: ' + response.cconumber + '<br>\n\
                                                                            Email: ' + response.cemail + '\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        To\n\
                                                                        <address>\n\
                                                                            <strong>Dinmarkholdings</strong><br>\n\
                                                                            Address Line One<br>\n\
                                                                            Address Line Two<br>\n\
                                                                            Phone: +94 716331268<br>\n\
                                                                            Email: dinmarkholdings@gmail.com\n\
                                                                        </address>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-sm-4 invoice-col">\n\
                                                                        <b>Invoice #' + response.oid + '</b><br>\n\
                                                                        <br>\n\
                                                                        <b>Order ID:</b> ' + response.oid + '<br>\n\
                                                                        <b>Payment Due:</b> ' + response.pdate + '<br>\n\
                                                                        <b>Account:</b> ' + response.cid + '\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <!-- Table row -->\n\
                                                                <div class="row">\n\
                                                                    <div class="col-xs-12 table-responsive">\n\
                                                                        <table class="table table-striped">\n\
                                                                            <thead>\n\
                                                                                <tr>\n\
                                                                                    <th>Product</th>\n\
                                                                                    <th>Qty</th>\n\
                                                                                    <th>OID #</th>\n\
                                                                                    <th>Description</th>\n\
                                                                                    <th>Subtotal</th>\n\
                                                                                </tr>\n\
                                                                            </thead>\n\
                                                                            <tbody>\n\
                                                                                <tr>\n\
                                                                                    <td>' + response.iproductName + '</td>\n\
                                                                                    <td>1</td>\n\
                                                                                    <td>' + response.oid + '</td>\n\
                                                                                    <td>' + response.ocomment + '</td>\n\
                                                                                    <td>Rs ' + response.iprice + '</td>\n\
                                                                                </tr>\n\
                                                                                    \n\
                                                                            </tbody>\n\
                                                                        </table>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                                    \n\
                                                                <div class="row">\n\
                                                                    <!-- accepted payments column -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Payment Method:</p>\n\
                                                                        <img src="resources/web-images/visa.png" alt="Visa">\n\
                                                                        <img src="resources/web-images/mastercard.png" alt="Mastercard">\n\
                                                                        <img src="resources/web-images/american-express.png" alt="American Express">\n\
                                                                        <img src="resources/web-images/paypal2.png" alt="Paypal">\n\
                                                                            \n\
                                                                        <div class="form-group">\n\
                                                                            <select disabled="" style="margin-top:10px" name="pay" class="form-control optii">\n\
                                                                                <option>On Cash</option>\n\
                                                                                <option>Cheque</option>\n\
                                                                                <option>Visa</option>\n\
                                                                            </select>\n\
                                                                        </div>\n\
                                                                    <a href="viewPdf?id=' + response.oid + '" target="_blank">View Documnet</a>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                    <div class="col-xs-6">\n\
                                                                        <p class="lead">Amount Due ' + response.odate + '</p>\n\
                                                                            \n\
                                                                        <div class="table-responsive">\n\
                                                                            <table class="table">\n\
                                                                                <tr>\n\
                                                                                    <th style="width:50%">Subtotal:</th>\n\
                                                                                    <td >Rs :<span name="sss" id="fulla">' + response.iprice + '<span></td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Tax (%)</th>\n\
                                                                                    <td><input disabled="" name="tax" class="form-control" id="tax" type="text" value="' + response.itax + '"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Paid Amount:</th>\n\
                                                                                    <td><input type="text" class="form-control" id="pa"  value="' + response.pamount + '">\n\
                                                                                       <input disabled="" name="pai" style="display:none" class="form-control" id="pa2" type="text" value="' + response.pamount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th></th>\n\
                                                                                    <td><input disabled="" type="text" name="toti" class="form-control" id="fixedp"  value="' + response.ppenndingAmount + '" style="display:none"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>To Pay :</th>\n\
                                                                                    <td><input disabled="" type="text"  class="form-control" id="ppam"  value="' + response.ppenndingAmount + '"/> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Customer Payment :</th>\n\
                                                                                    <td><input disabled="" type="text" name="nowP" class="form-control" id="ppa"  value="0"> </td>\n\
                                                                                </tr>\n\
                                                                                <tr>\n\
                                                                                    <th>Current Status :</th>\n\
                                                                                    <td><span id="stst"  class="label label-danger">' + response.ostate + '</span> </td>\n\
                                                                                </tr>\n\
                                                                            </table>\n\
                                                                        </div>\n\
                                                                    </div>\n\
                                                                    <!-- /.col -->\n\
                                                                </div>\n\
                                                                <!-- /.row -->\n\
                                                            </section>\n\
                                                            <!-- /.content -->\n\
                                                        </div>\n\
                                                        <!-- ./wrapper -->\n\
                                                        \n\
                                                    </div>\n\
                                                    <!-- /.box-body -->\n\
                                                </div>\n\
                                                <!-- /.box -->\n\
                                            </div>\n\
                                            <div class="modal-footer">\n\
                                               <input type="text" style="display:none" value="' + response.oid + '" name="mid">\n\
                                                <button type="button"  class="btn btn-success ">Print</button>\n\
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                            </div>\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div></form>';
                    $('#mymo2').append(gtm2);
                    $("#oid" + response.oid).modal("show");
                    payFix();
                    //payment validation
                    $("#ppam,#pa").prop('disabled', true);
                }
                $("#psete").click(function () {
                    payFix();
                });
                function payFix() {
                    var tax = parseFloat($('#tax').val());
                    var fixedP = parseFloat($('#fulla').text());
                    var fixedP2 = parseFloat($('#fixedp').val());
                    var mustPay = parseFloat($('#ppa').val());

//if customer havent pay yet
                    if ($("#pa2").val() == 0) {
                        //tax gen
                        var resss = (fixedP * tax) / 100 + fixedP;
                        $("#ppam").val(resss);//fixed price with tax
                        if ($('#ppa').val() != "") {
                            var souldpay = parseFloat($("#ppam").val());
                            var alredPay = parseFloat($('#ppa').val());
                            var balace = souldpay - alredPay;
                            $("#ppam").val(balace);

                            var pa = parseFloat($("#pa2").val());
                            var cusp = parseFloat($("#ppa").val());
                            var sdf = pa + cusp;
                            $("#pa").val(sdf);

                        } else {
                            $('#ppa').focus();
                        }
                    } else {
                        $("#tax").prop('disabled', true);
                        if ($('#ppa').val() != "") {
                            var shdPay = parseFloat($("#fixedp").val());
                            var alredPay = parseFloat($('#ppa').val());
                            var balace = shdPay - alredPay;
                            $("#ppam").val(balace);

                            var pa = parseFloat($("#pa2").val());
                            var cusp = parseFloat($("#ppa").val());
                            var sdf = pa + cusp;
                            $("#pa").val(sdf);

                        } else {
                            $('#ppa').focus();
                        }
                    }

                }
                $(".orpro").click(function () {
                    payFix();
                    var vv = $(".optii").find(':selected').val();
                    if (vv == "Cancelled") {
                        var htp = '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">\n\
                                   <div class="modal-dialog">\n\
                                         <div class="loginmodal-container">\n\
                                                 <h1>Enter Admin Email Password..!</h1><br>\n\
                                           <form id="fcid">\n\
                                                 <input type="text" name="email" placeholder="Email">\n\
                                                 <input type="password" name="pass" placeholder="Password">\n\
                                                 <button type="button" id="papn">Confirm</button>\n\
                                           </form>\n\
                                                 \n\
                                           <div class="login-help">\n\
                                                 <a href="#">Register</a> - <a href="#">Forgot Password</a>\n\
                                           </div>\n\
                                         </div>\n\
                                 </div>\n\
                           </div>';
                        $('#lloggd').append(htp);
                        $("#login-modal").modal("show");

                        $("#papn").click(function () {
                            var fomr = $("#fcid").serialize();
                            $.post("loginn", fomr, function (response) {
                                if (response == "admin") {
                                    var aa = $("#flo").serialize();
                                    $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                                        alertify.alert("Order Was Successfully Updated..!");
                                        viewAllDO();
                                        $('.modal').modal('hide');
                                    });
                                } else if (response == "user") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else if (response == "Banned") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else {
                                    alertify.log("Username Or Password Wrong..!");
                                }
                            });
                        });


                    } else if (vv == "Returned") {
                        var htp = '<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">\n\
                                   <div class="modal-dialog">\n\
                                         <div class="loginmodal-container">\n\
                                                 <h1>Enter Admin Email Password..!</h1><br>\n\
                                           <form id="fcid">\n\
                                                 <input type="text" name="email" placeholder="Email">\n\
                                                 <input type="password" name="pass" placeholder="Password">\n\
                                                 <button type="button" id="papn">Confirm</button>\n\
                                           </form>\n\
                                                 \n\
                                           <div class="login-help">\n\
                                                 <a href="#">Register</a> - <a href="#">Forgot Password</a>\n\
                                           </div>\n\
                                         </div>\n\
                                 </div>\n\
                           </div>';
                        $('#lloggd').append(htp);
                        $("#login-modal").modal("show");

                        $("#papn").click(function () {
                            var fomr = $("#fcid").serialize();
                            $.post("loginn", fomr, function (response) {
                                if (response == "admin") {
                                    var aa = $("#flo").serialize();
                                    $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                                        alertify.alert("Order Was Successfully Updated..!");
                                        viewAllDO();
                                        $('.modal').modal('hide');
                                    });

                                } else if (response == "user") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else if (response == "Banned") {
                                    alertify.log("You Cannot Use This Account...Sorry..!");
                                } else {
                                    alertify.log("Username Or Password Wrong..!");
                                }
                            });
                        });


                    } else {
                        var aa = $("#flo").serialize();
                        $.post("updateOrder?tax=" + $("#tax").val() + "&paid=" + $("#pa").val() + "&tot=" + $("#ppam").val() + "", aa, function (res) {
                            alertify.alert("Order Was Successfully Updated..!");
                            viewAllDO();
                            $('.modal').modal('hide');
                        });
                    }

                });
            });
        });
    });
});

loadPrrr();
function loadPrrr() {
    var sele = $("#pspele").find(":selected").val();
    $.getJSON("serByNname?name=" + sele + "", function (resp) {
        $("#bpn").val(resp.productName);
        $("#sdtate").val(resp.status).change();
        $("#prd1").val(resp.description1);
        $("#prd2").val(resp.description2);
        $("#ptax").val(resp.tax);
        $("#proce").val(resp.price);
        $("#dfp").val(resp.pbanner);
    });
}

$("#pupbtn").click(function () {
    getProo();
    loadPrrr();
});

$("#pupbtn2").click(function () {
    loadPrrr();
    var form = new FormData($("#propUp")[0]);
    $.ajax({
        url: "updateProduct",
        method: "POST",
        dataType: 'json',
        data: form,
        processData: false,
        contentType: false,
        success: function (result) {

        },
        error: function (er) {
        }
    });
    alertify.alert("Product was Successfully Updated..!");
});



$("#pspele").change(function () {
 loadPrrr();
});

ref();
function ref() {
    $.getJSON("dashup", function () {});
}

loadUser();
function loadUser() {
    $.getJSON("getAllUsers", function (resp) {
        var res = resp;
        $('#tabbody7').empty();
        for (var i in res) {
            var te = res[i];
            var row = '<tr><td><a>' + te.email + '</a></td><td>' + te.nic + '</td><td>' + te.firstName + ' ' + te.lastName + '</td><td>"' + te.conumber + '"</td></tr>';
            $('#tabbody7').append(row);
        }
    });
}

ref();



//product register

$("#padd").click(function () {
//    prod validation
    $("#pname").each(function (e) {
        email_address = $(this);
        email_regex = /^[a-zA-Z ]{2,50}$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Product Name Cannot Be Empty..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
        }
    });
    $("#pprice").each(function (e) {
        email_address = $(this);
        email_regex = /^[1-9]\d*(\.\d+)?$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Product Price Cannot be Empty..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
        }
    });
    $("#ptax").each(function (e) {
        email_address = $(this);
        email_regex = /^[0-9]\d*(\.\d+)?$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Product tax must be 0 or more..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
        }
    });
    $("#pdes").each(function (e) {
        email_address = $(this);
        email_regex = /^(.|\s)*[a-zA-Z]+(.|\s)*$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Please Enter Description one..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
        }
    });
    $("#pdes1").each(function (e) {
        email_address = $(this);
        email_regex = /^(.|\s)*[a-zA-Z]+(.|\s)*$/;
        if (!email_regex.test(email_address.val())) {
            email_address.focus();
            email_address.css({"border": "1px solid red"});
            alertify.log("Please Enter Description two..!..!");
            e.preventDefault();
            return false;
        } else {
            email_address.css({"border": "1px solid green"});
        }
    });

    if ($("#pbaner").val() == '') {
        alertify.log("Please Select a Image For Product..!");
        $("#pbaner").focus();
        return false;
    }

    $('#pbaner').change(
            function () {
                var fileExtension = ['jpeg', 'jpg', 'gif'];
                if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                    alertify.log("Only '.jpeg','.jpg','.pdf' formats are allowed.");
                    return false;
                }
            });


    var form = new FormData($("#proform")[0]);
    $.ajax({
        url: "addProduct",
        method: "POST",
        dataType: 'json',
        data: form,
        processData: false,
        contentType: false,
        success: function (result) {
        },
        error: function (er) {
            console.log(er);
        }

    });
    alertify.alert("Product was Successfully Registerd..!");
    cleadd();
});
//end product register

function cleadd() {
    $("#pname").val("");
    $("#pprice").val("");
    $("#ptax").val("");
    $("#pdes").val("");
    $("#pdes1").val("");
    $("#pbaner").val("");
}


$('#adminaa2').click(function () {

    if ($("#gfpot").val() == '') {
        alertify.log("Please Select a Image For Update..!");
        $("#gfpot").css({"border": "1px solid black"});
        $("#gfpot").focus();
        return false;
    }

    $('#gfpot').change(
            function () {
                var fileExtension = ['jpeg', 'jpg', 'gif'];
                if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
                    alertify.log("Only '.jpeg','.jpg','.pdf' formats are allowed.");
                    return false;
                }
            });


    var form = new FormData($("#adpropr2")[0]);
    $.ajax({
        url: "updatePic",
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



var activeEl = 2;
$(function () {
    var items = $('.btn-nav');
    $(items[activeEl]).addClass('active');
    $(".btn-nav").click(function () {
        $(items[activeEl]).removeClass('active');
        $(this).addClass('active');
        activeEl = $(".btn-nav").index(this);
    });
});




getProds();
function getProds() {
    $.getJSON("getAllProducts", function (response) {
        var arr = response;
        $("#tab9").empty();
        for (var i in arr) {
            var tem = arr[i];
            var dd = '<tr>\n\
                            <td><a>' + tem.id + '</a></td>\n\
                            <td><a>' + tem.status + '</a></td>\n\
                           <td><div class="sparkbar" data-color="#00a65a" data-height="20">' + tem.productName + '</div>\n\
                            <td><span class="label label-primary">Rs: ' + tem.price + '</span></td>\n\
                            <td><span id="" class="label label-warning cc">' + tem.tax + '%</span></td>\n\
                            </td>\n\
                        </tr>';
            $("#tab9").append(dd);
        }
    });
}
checkOnline();
function checkOnline() {
    $.getJSON("getOnlineUsers", function (resp) {
        var ress = resp;
        $('.onll').empty();
        for (var i in ress) {
            var a = ress[i];
            var tt = '<li>\n\
                    <a href="#">\n\
                      <img src="resources/images/' + a.ppic + '" class="menu-icon bg-red"></i>\n\
                      <div class="menu-info">\n\
                        <h4 class="control-sidebar-subheading">' + a.firstName + ' ' + a.lastName + '</h4>\n\
                        <p><i class="fa fa-circle text-success"></i> Online</p>\n\
                      </div>\n\
                    </a>\n\
                  </li>';
            $('.onll').append(tt);
        }
    });
}

setInterval("checkOnline()", 25000);
lco();
function lco() {
    $('#octry').empty();
    $.getJSON("getCtry", function (response) {
        var res = response;
        for (var i in res) {
            var arra = res[i];
            var ht = "<option>" + arra.countryname + "</option>";
            $('#octry').append(ht);
        }

    });
}
