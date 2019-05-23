<%-- 
    Document   : services
    Created on : Nov 16, 2017, 7:24:01 PM
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
        <title>Services of Dinmarkholdings</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is for give you a breef discription about the dinmarkholdings services that we provided.. please visit to view more" />
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
                            <h2 class="pageTitle">Services</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div class="container content">	
                    <div class="row">
                        <div class="col-md-12">
                            <div><h2>Our Quality Service</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</div>
                            <br>
                        </div>
                    </div>		
                    <!-- Service Blcoks -->
                    <div class="row service-v1 margin-bottom-40">
                        <div class="col-md-4 md-margin-bottom-40">
                            <img class="img-responsive" src="img/service1.jpg" alt="">   
                            <h3>Managment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
                        </div>
                        <div class="col-md-4">
                            <img class="img-responsive" src="img/service2.jpg" alt="">            
                            <h3>Construction</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
                        </div>
                        <div class="col-md-4 md-margin-bottom-40">
                            <img class="img-responsive" src="img/service3.jpg" alt="">  
                            <h3>Finance</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
                        </div>
                    </div>
                    <!-- End Service Blcoks -->

                    <hr class="margin-bottom-50">

                    <!-- Info Blcoks -->
                    <div class="row">
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-user"></i>
                            <div class="info-blocks-in">
                                <h3>Awesome Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-star"></i>
                            <div class="info-blocks-in">
                                <h3>FontAwesome</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-book"></i>
                            <div class="info-blocks-in">
                                <h3>Bootstrap</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Info Blcoks -->


                    <!-- Info Blcoks -->
                    <div class="row">
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-home"></i>
                            <div class="info-blocks-in">
                                <h3>SEO Ready</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-flag-o"></i>
                            <div class="info-blocks-in">
                                <h3>Fully Responsive</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                        <div class="col-sm-4 info-blocks">
                            <i class="icon-info-blocks fa fa-thumbs-o-up"></i>
                            <div class="info-blocks-in">
                                <h3>CSS3 + HTML5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Info Blcoks -->


                </div>
            </section>
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
