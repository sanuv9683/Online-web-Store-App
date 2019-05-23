<%-- 
    Document   : portfolio
    Created on : Nov 16, 2017, 7:22:08 PM
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
        <title>Online Order From Dinmarkholdings</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="View ,Order and get Deliverd to you Home..Order Now..." />
        <meta name="keywords" content="Dinmarkholdings">
        <meta name="author" content="Sanu Vithanage">
        <!-- css -->
        <link href="resources/web-css/bootstrap.min.css" rel="stylesheet" />
        <link href="resources/web-css/fancybox/jquery.fancybox.css" rel="stylesheet"> 
        <link href="resources/web-css/flexslider.css" rel="stylesheet" />
        <link href="resources/web-css/magnific-popup.css" rel="stylesheet"> 
        <link href="resources/web-css/style.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
        <link href="resources/web-css/gallery-1.css" rel="stylesheet">
        <style>
            #content img {
                max-width: 100%;
                height: auto;
                max-height: 200px;
            }
            .gallery-item {
                overflow: hidden;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
                border-radius: 3px;
                max-height: 294px;
                min-height: 294px;
            }
        </style>
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
                            <h2 class="pageTitle">Order Now</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div><h2>Our Other Products</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</div>
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- Start Gallery 1-2 -->
                            <section id="gallery-1" class="content-block section-wrapper gallery-1">
                                <div class="container">

                                    <!--                                    <div class="editContent">
                                                                            <ul class="filter">
                                                                                <li class="active"><a href="#" data-filter="*">All</a></li>
                                                                                <li><a href="#" data-filter=".artwork">Artwork</a></li>
                                                                                <li><a href="#" data-filter=".creative">Creative</a></li>
                                                                                <li><a href="#" data-filter=".nature">Nature</a></li>
                                                                                <li><a href="#" data-filter=".outside">Outside</a></li>
                                                                                <li><a href="#" data-filter=".photography">Photography</a></li>
                                                                            </ul>
                                                                        </div>-->
                                    <div id="mymo"></div>
                                    <!-- /.gallery-filter -->
                                    <div class="row">                                      
                                        <div id="isotope-gallery-container">
                                            <div id="otherpp2"></div>
                                        </div>
                                        <!-- /.isotope-gallery-container -->
                                    </div>
                                    <!-- /.row --> 

                                    <!-- /.container -->
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
        </div>
    </section>
    <%@include file="webfoot.jsp"%>
</div>
<a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>
<!-- javascript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="resources/web-js/jquery.js"></script>
<script src="resources/css-dash/jquery.min.js"></script>
<script src="resources/css-dash/bootstrap.min.js"></script>
<script src="resources/web-js/jquery.easing.1.3.js"></script>
<script src="resources/web-js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/js/websocket.js"></script>
<script src="resources/ajax/sanu-web-ajax.js"></script>
<script src="resources/web-js/jquery.fancybox.pack.js"></script>
<script src="resources/web-js/jquery.fancybox-media.js"></script> 
<script src="resources/web-js/portfolio/jquery.quicksand.js"></script>
<script src="resources/web-js/portfolio/setting.js"></script>
<script src="resources/web-js/jquery.flexslider.js"></script>
<script src="resources/web-js/jquery.isotope.min.js"></script>
<script src="resources/web-js/jquery.magnific-popup.min.js"></script>
<script src="resources/web-js/animate.js"></script>
<script src="resources/web-js/custom.js"></script>
<script type="text/javascript" src="resources/js/alertify.js"></script>
</body>
</html>
