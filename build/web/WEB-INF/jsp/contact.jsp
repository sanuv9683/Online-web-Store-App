<%-- 
    Document   : contact
    Created on : Nov 16, 2017, 7:21:01 PM
    Author     : Sanu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Google Tag Manager -->
        <script>(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start':
                            new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-MWFBQPM');</script>
        <!-- End Google Tag Manager -->
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <meta charset="utf-8">
        <title>Contact Us Dinmarkholdings</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Contac Details Of Dinmarkholdings... Visit here for contac us and have a good service" />
        <meta name="keywords" content="Dinmarkholdings">
        <meta name="author" content="Sanu Vithanage">
        <link href="resources/web-css/bootstrap.min.css" rel="stylesheet" />
        <link href="resources/web-css/fancybox/jquery.fancybox.css" rel="stylesheet"> 
        <link href="resources/web-css/flexslider.css" rel="stylesheet" />
        <link href="resources/web-css/style.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWFBQPM"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <div id="wrapper">
            <!-- start header -->
            <header>
                <div class="navbar navbar-default navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <%@include file="logo.jsp" %>
                        </div>
                        <div class="navbar-collapse collapse ">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="web">Home</a></li> 
                                <li class="dropdown">
                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">About Us <b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about">Company</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">News</a></li> 
                                        <li><a href="#">Investors</a></li>
                                    </ul>
                                </li>
                                <li><a href="service">Services</a></li> 
                                <li><a href="profit">Order Now</a></li>
                                <li><a href="pricing">Pricing</a></li>
                                <li><a href="contaa">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header><!-- end header -->
            <section id="inner-headline">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="pageTitle">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div><h2>Get In Touch</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</div>
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <!-- Form itself -->
                            <form name="sentMessage" id="contactForm"  novalidate>
                                <h3>Contact me</h3>
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="text" class="form-control" 
                                               placeholder="Full Name" id="name" required
                                               data-validation-required-message="Please enter your name" />
                                        <p class="help-block"></p>
                                    </div>
                                </div> 	
                                <div class="control-group">
                                    <div class="controls">
                                        <input type="email" class="form-control" placeholder="Email" 
                                               id="email" required
                                               data-validation-required-message="Please enter your email" />
                                    </div>
                                </div> 	

                                <div class="control-group">
                                    <div class="controls">
                                        <textarea rows="10" cols="100" class="form-control" 
                                                  placeholder="Message" id="message" required
                                                  data-validation-required-message="Please enter your message" minlength="5" 
                                                  data-validation-minlength-message="Min 5 characters" 
                                                  maxlength="999" style="resize:none"></textarea>
                                    </div>
                                </div> 		 
                                <div id="success"> </div> <!-- For success/fail messages -->
                                <button type="submit" class="btn btn-primary pull-right">Send</button><br />
                            </form>	
                        </div>
                        <div class="col-md-offset-1 col-md-6" id="map" style="height: 500px">
                            <script>
                                function initMap() {
                                    var uluru = {lat: -25.363, lng: 131.044};
                                    var map = new google.maps.Map(document.getElementById('map'), {
                                        zoom: 4,
                                        center: uluru
                                    });
                                    var marker = new google.maps.Marker({
                                        position: uluru,
                                        map: map
                                    });
                                }
                            </script>
                            <script async defer
                                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCandcrc5Wr-ZtWWEVG7FRYAoMAixlC2P4&callback=initMap">
                            </script>
                        </div>
                    </div>
                </div>

            </section>
            <footer>
                <%@include file="webfoot.jsp"%>
        </div>
        <a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>
        <!-- javascript
            ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="resources/web-js/jquery.js"></script>
        <script src="resources/web-js/jquery.easing.1.3.js"></script>
        <script src="resources/web-js/bootstrap.min.js"></script>
        <script src="resources/web-js/jquery.fancybox.pack.js"></script>
        <script src="resources/web-js/jquery.fancybox-media.js"></script> 
        <script src="resources/web-js/portfolio/jquery.quicksand.js"></script>
        <script src="resources/web-js/portfolio/setting.js"></script>
        <script src="resources/web-js/jquery.flexslider.js"></script>
        <script src="resources/web-js/animate.js"></script>
        <script src="resources/web-js/custom.js"></script> 
    </body>
</html>
