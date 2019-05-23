/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(window).load(function () {
//    $.getJSON("addCountry", function () {
//
//    });
//});

//loading all other products manuall
getProd();
function getProd() {
    $.getJSON("getAllProducts", function (response) {
        var arr = response;
        $('#otherpp2').empty();
        $('#mymo').empty();
        for (var i in arr) {
            var tem = arr[i];
            if (tem.status == "available" && tem.website=="DinmarkHoldings") {
                var htm = '<div class="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative">\n\
                    <div class="gallery-item">\n\
                        <div class="gallery-thumb">\n\
                            <img src="resources/images/' + tem.pbanner + '" class="img-responsive" alt="1st gallery Thumb">\n\
                            <div class="image-overlay"></div>\n\
                            <a  class="gallery-link orderbtnn" id="' + tem.id + '"><i class="fa fa-shopping-cart" style="cursor:pointer"> Order </i></a>\n\
                        </div>\n\
                        <div class="gallery-details">\n\
                            <div class="editContent">\n\
                                <h5>' + tem.productName + '</h5>\n\
                            </div>\n\
                            <div class="editContent">\n\
                                <p>Nullam id dolor id nibh ultricies vehicula.</p>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>';
                $('#otherpp2').append(htm);
                var gtm2 = '<div class="modal fade sd' + tem.id + '" id="sd' + tem.id + '" tabindex="-1" role="dialog">\n\
                        <div class="modal-dialog ">\n\
                            <!-- Modal content-->\n\
                            <div class="modal-content">\n\
                                <div class="modal-header">\n\
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>\n\
                                    <h5>' + tem.productName + '</h5>\n\
                                </div>\n\
                                <div class="modal-body">\n\
                                    <!-- /.box -->\n\
                                            <img src="resources/web-images/2.jpg" alt=" " class="img-responsive">\n\
                                            <p>' + tem.description1 + '</p>\n\
                                            <p>' + tem.description2 + '</p>\n\
                                    <!-- general form elements disabled -->\n\
                                    <div class="box box-warning">\n\
                                        <div class="box-header with-border">\n\
                                            <h3 class="box-title">Fill the Form and Submit to Order This Product</h3>\n\
                                        </div>\n\
                                        <!-- /.box-header -->\n\
                                        <div class="box-body">\n\
                                            \n\
                                            <hr>\n\
                                            <form id="orderorder' + tem.id + '" method="post" enctype="multipart/form-data">\n\
                                                <!-- text input -->\n\
                                                <div class="row">\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group">\n\
                                                <input style="display:none" type="text"  name="sdss" class="form-control" placeholder="Enter...">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-user"></i> First Name</label>\n\
                                                    <input type="text" id="ofname' + tem.id + '" name="ofname" class="form-control ofname" placeholder="Enter...">\n\
                                                    <input style="display:none" type="text" id="sds' + tem.id + '" value="' + tem.id + '" name="sds" class="form-control sds" placeholder="Enter...">\n\
                                                </div>\n\
                                                </div>\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-user"></i> Last Name</label>\n\
                                                    <input type="text" id="olname' + tem.id + '" name="olname" class="form-control olname" placeholder="Enter ...">\n\
                                                </div>\n\
                                                </div>\n\
                                                <div class="col-md-6">\n\
                                                <!-- input states -->\n\
                                                <div class="form-group has-error">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-check"></i> Your Email</label>\n\
                                                    <input type="text" class="form-control oemail"  id="oemail' + tem.id + '" name="oemail" placeholder="Enter ...">\n\
                                                    <span class="help-block">This will be your order confirm email</span>\n\
                                                </div>\n\
                                                \n\</div>\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group has-error">\n\
                                                    <label class="control-label" for="inputWarning"><i class="fa fa-bell-o"></i> You NIC Or Passport ID</label>\n\
                                                    <input type="text" class="form-control onic"  id="onic' + tem.id + '" name="onic" placeholder="Enter ...">\n\
                                                    <span class="help-block">Please Enter your Nic or Passport ID Carefully..</span>\n\
                                                </div>\n\
                                                \n\</div>\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-wordpress"></i> Your Country</label>\n\
                                                    <select type="text" id="octry' + tem.id + '" name="octry" class="form-control octry"></select>\n\
                                                </div>\n\
                                                </div>\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group has-success">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-circle"></i> Your City</label>\n\
                                                    <input type="text" id="olctye' + tem.id + '" name="olctye" class="form-control olctye" placeholder="Enter ...">\n\
                                                </div>\n\
                                                </div>\n\
                                                <div class="col-md-6">\n\
                                                <div class="form-group has-error">\n\
                                                    <label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Your Contack Number</label>\n\
                                                    <input type="text" class="form-control oppo"  id="oppo' + tem.id + '" name="oppo" placeholder="Enter ...">\n\
                                                    <span class="help-block">This will be used to contact you</span>\n\
                                                </div>\n\
                                                \n\</div>\n\
                                                <div class="col-md-6">\n\
                                                <!-- textarea -->\n\
                                                <div class="form-group ">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-address-card"></i> Your Address</label>\n\
                                                    <textarea class="form-control ooadde" id="ooadde' + tem.id + '" name="ooadde" rows="3" placeholder="Enter ..."></textarea>\n\
                                                </div>\n\
                                                \n\</div>\n\
                                                <div class="col-md-12">\n\
                                                <div class="form-group has-success">\n\
                                                    <label class="control-label" for="inputSuccess"><i class="fa fa-mail-reply"></i> Comment</label>\n\
                                                    <textarea class="form-control oocomme" rows="3" id="oocomme' + tem.id + '" name="oocomme" placeholder="Enter ..."></textarea>\n\
                                                </div>\n\
                                                \n\</div>\n\
                                               \n\
                                              </div>\n\
                                            </form>\n\
                                        </div>\n\
                                        <!-- /.box-body -->\n\
                                    </div>\n\
                                    <!-- /.box -->\n\
                                </div>\n\
                                <div class="modal-footer">\n\
                                    <button type="button" id="' + tem.id + '" class="btn btn-success orpro">Proceed</button>\n\
                                    <button type="button" id="canbtn" class="btn btn-danger" data-dismiss="modal">Cancel</button>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                    </div>';
                $('#mymo').append(gtm2);
            }
        }//for end

        $('.orderbtnn').click(function () {
            var proid = this.id;
            $('#octry' + proid + '').empty();
            $.getJSON("getCtry", function (response) {
                var res = response;
                for (var i in res) {
                    var arra = res[i];
                    var ht = "<option>" + arra.countryname + "</option>";
                    $('#octry' + proid + '').append(ht);
                }
            });
            
            $('#sd' + proid).modal('show');
            $.getJSON("seoProd?id=" + proid + "", function (resp) {

            });
            clr();
        });
        //validation
        $('.orpro').click(function (e) {

            $('#ofname' + this.id + '').each(function (e) {
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

            $('#olname' + this.id + '').each(function (e) {
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

            $('#octry' + this.id + '').each(function (e) {
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

            $('#olctye' + this.id + '').each(function (e) {
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

            $('#oemail' + this.id + '').each(function (e) {
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


            $('#onic' + this.id + '').each(function (e) {
                email_address = $(this);
                email_regex = /[0-9]{9}[x|X|v|V]$/g;
                if (email_address.val() != "") {
                    if (!email_regex.test(email_address.val())) {
                        email_address.focus();
                        email_address.css({"border": "1px solid red"});
                        alertify.log("Something Wrong with .!");
                        e.preventDefault();
                        return false;
                    } else {
                        email_address.css({"border": "1px solid green"});
                    }
                } else {
                    email_address.css({"border": "1px solid green"});
                }

            });


            $('#oppo' + this.id + '').each(function (e) {
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

            $('#ooadde' + this.id + '').each(function (e) {
                email_address = $(this);
                if (email_address.val() == "") {
                    email_address.focus();
                    email_address.css({"border": "1px solid red"});
                    alertify.log("Something Wrong With Address Check Again..!");
                    e.preventDefault();
                    return false;
                } else {
                    email_address.css({"border": "1px solid green"});
//            alertify.log("Company Title : ✔️");
                }
            });



            //place order
            var prr = $('#orderorder' + this.id).serialize();
            $.post("proceedOrder", prr, function (resp) {
                alertify.alert("You were Successfully Orderd This Product Please Check Your Email For More Details..!");
                $('.modal').modal('hide');
                clr();
            });


        });

        $(".onic,.ofname,.oocomme,.oppo,.olctye").click(function () {
            var aid = this.id;
            var temm = aid.substr(aid.length - 1);
            var email = $("#oemail" + temm + "").val();
            $.getJSON("searchClient?email=" + email + "", function (res) {
                $('#ofname' + temm + '').val(res.firstName);
                $('#olname' + temm + '').val(res.lastName);
                $('#octry' + temm + '').val(res.country);
                $('#olctye' + temm + '').val(res.city);
                $('#oemail' + temm + '').val(res.email);
                $('#onic' + temm + '').val(res.nic);
                $('#oppo' + temm + '').val(res.conumber);
                $('#ooadde' + temm + '').val(res.address);
                $('#oocomme' + temm + '').val(res.comment);
            });
        });
    });
}//imain func end

setInterval("getProd()", 240000);

function clr() {
    $('.ofname').val("");
    $('.olname').val("");
    $('.octry').val("");
    $('.olctye').val("");
    $('.oemail').val("");
    $('.onic').val("");
    $('.oppo').val("");
    $('.ooadde').val("");
    $('.oocomme').val("");
}

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 4000
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function () {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});



//



$(document).ready(function () {
// invoke the carousel
    $('#myCarousel').carousel({
        interval: 6000
    });

// scroll slides on mouse scroll 
    $('#myCarousel2').bind('mousewheel DOMMouseScroll', function (e) {

        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');


        } else {
            $(this).carousel('next');

        }
    });

//scroll slides on swipe for touch enabled devices 

    $("#myCarousel2").on("touchstart", function (event) {

        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function (event) {

            var yMove = event.originalEvent.touches[0].pageY;
            if (Math.floor(yClick - yMove) > 1) {
                $(".carousel").carousel('next');
            } else if (Math.floor(yClick - yMove) < -1) {
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });

});
//animated  carousel start
$(document).ready(function () {

//to add  start animation on load for first slide 
    $(function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });
        $('.item1.active img').animateCss('slideInDown');
        $('.item1.active h2').animateCss('zoomIn');
        $('.item1.active p').animateCss('fadeIn');

    });

//to start animation on  mousescroll , click and swipe



    $("#myCarousel2").on('slide.bs.carousel', function () {
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass(animationName);
                });
            }
        });

// add animation type  from animate.css on the element which you want to animate

        $('.item1 img').animateCss('slideInDown');
        $('.item1 h2').animateCss('zoomIn');
        $('.item1 p').animateCss('fadeIn');

        $('.item2 img').animateCss('zoomIn');
        $('.item2 h2').animateCss('swing');
        $('.item2 p').animateCss('fadeIn');

        $('.item3 img').animateCss('fadeInLeft');
        $('.item3 h2').animateCss('fadeInDown');
        $('.item3 p').animateCss('fadeIn');
    });
});
