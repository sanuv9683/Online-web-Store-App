<%-- 
    Document   : about
    Created on : Nov 16, 2017, 7:19:51 PM
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
        <title>About Dinmarkholdings</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dinmarkholdings | Consulting Service.We are the number one consulting service in the world,Visit here for more information..!" />
        <meta name="keywords" content="Dinmarkholdings">
        <meta name="author" content="Sanu Vithanage">
        <link href="resources/web-css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="resources/simple-line-icons/css/simple-line-icons.css">
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
                            <h2 class="pageTitle">About Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="content">
                <div class="container">
                    <div class="about">
                        <section class="features">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div><h2>Who We Are</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</div>
                                        <br>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div><h2>Our Awesome Features</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</div>
                                        <br/>
                                    </div>
                                </div>
                                <div class="row">         
                                    <div class="col-md-6">
                                        <div class="features-item">
                                            <div class="features">
                                                <div class="icon">
                                                    <i class="icon-map icons"></i>
                                                </div>
                                                <div class="features-content">
                                                    <h3>Premium Sliders Included</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam id, odit dolore inventore.</p>
                                                </div>
                                            </div>
                                            <div class="features">
                                                <div class="icon">
                                                    <i class="icon-envelope-open icons"></i>
                                                </div>
                                                <div class="features-content">
                                                    <h3>100% Responsive Layout</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam id, odit dolore inventore.</p>
                                                </div>
                                            </div>
                                            <div class="features">
                                                <div class="icon">
                                                    <i class="icon-badge icons"></i>
                                                </div>
                                                <div class="features-content">
                                                    <h3>Support System</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam id, odit dolore inventore.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img class="img-responsive" src="img/img1.png" alt="img">
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="row">
                            <div class="col-md-4">
                                <!-- Heading and para -->
                                <div class="block-heading-two">
                                    <h3><span>Why Choose Us?</span></h3>
                                </div>
                                <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. <br/><br/>Sed ut perspiciaatis iste natus error sit voluptatem probably haven't heard of them accusamus.</p>
                            </div>
                            <div class="col-md-4">
                                <div class="block-heading-two">
                                    <h3><span>Our Solution</span></h3>
                                </div>		
                                <!-- Accordion starts -->
                                <div class="panel-group" id="accordion-alt3">
                                    <!-- Panel. Use "panel-XXX" class for different colors. Replace "XXX" with color. -->
                                    <div class="panel">	
                                        <!-- Panel heading -->
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseOne-alt3">
                                                    <i class="fa fa-angle-right"></i> Accordion Heading Text Item # 1
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne-alt3" class="panel-collapse collapse">
                                            <!-- Panel body -->
                                            <div class="panel-body">
                                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseTwo-alt3">
                                                    <i class="fa fa-angle-right"></i> Accordion Heading Text Item # 2
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo-alt3" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseThree-alt3">
                                                    <i class="fa fa-angle-right"></i> Accordion Heading Text Item # 3
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree-alt3" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseFour-alt3">
                                                    <i class="fa fa-angle-right"></i> Accordion Heading Text Item # 4
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour-alt3" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Accordion ends -->

                            </div>

                            <div class="col-md-4">
                                <div class="block-heading-two">
                                    <h3><span>Our Expertise</span></h3>
                                </div>								
                                <h6>Managment</h6>
                                <div class="progress pb-sm">
                                    <!-- White color (progress-bar-white) -->
                                    <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <h6>Computerized</h6>
                                <div class="progress pb-sm">
                                    <div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <h6>Finance</h6>
                                <div class="progress pb-sm">
                                    <div class="progress-bar progress-bar-lblue" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <h6>Managment</h6>
                                <div class="progress pb-sm">
                                    <div class="progress-bar progress-bar-yellow" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                        <span class="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <br>
                        <!-- Our Team starts -->

                        <!-- Heading -->
                        <div class="block-heading-six">
                            <h4 class="bg-color">Our Team</h4>
                        </div>
                        <br>

                        <!-- Our team starts -->

                        <div class="team-six">
                            <div class="row">
                                <div class="col-md-3 col-sm-6">
                                    <!-- Team Member -->
                                    <div class="team-member">
                                        <!-- Image -->
                                        <img class="img-responsive" src="resources/web-img/team1.jpg" alt="img">
                                        <!-- Name -->
                                        <h4>Johne Doe</h4>
                                        <span class="deg">Creative</span> 
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!-- Team Member -->
                                    <div class="team-member">
                                        <!-- Image -->
                                        <img class="img-responsive" src="resources/web-img/team2.jpg" alt="img">
                                        <!-- Name -->
                                        <h4>Jennifer</h4>
                                        <span class="deg">Programmer</span> 
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!-- Team Member -->
                                    <div class="team-member">
                                        <!-- Image -->
                                        <img class="img-responsive" src="resources/web-img/team3.jpg" alt="img">
                                        <!-- Name -->
                                        <h4>Christean</h4>
                                        <span class="deg">CEO</span> 
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <!-- Team Member -->
                                    <div class="team-member">
                                        <!-- Image -->
                                        <img class="img-responsive" src="resources/web-img/team4.jpg" alt="img">
                                        <!-- Name -->
                                        <h4>Kerinele rase</h4>
                                        <span class="deg">Manager</span> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Our team ends -->


                    </div>

                </div>
            </section>

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
