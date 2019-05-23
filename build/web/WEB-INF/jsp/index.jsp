<%-- 
    Document   : index2
    Created on : Dec 17, 2017, 7:13:29 AM
    Author     : Sanu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
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
        <title>Dinmarkholdings System</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Loging For Internal System" />
        <meta name="keywords" content="Dinmarkholdings">
        <meta name="author" content="Sanu Vithanage">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
        <link href="//fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet">
        <link href="//fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
        <link href="resources/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />
        <link href="resources/css/style.css" rel='stylesheet' type='text/css' media="all" />
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWFBQPM"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <%
            if (!session.isNew() && (session.getAttribute("cuAdmin") != null || session.getAttribute("cuUser") != null)) {
                if (session.getAttribute("cuAdmin") != null) {
                    response.sendRedirect("adm");
                } else {
                    response.sendRedirect("user");
                }
            }
        %>
        <div class='preloader'><div class='loaded'>&nbsp;</div></div> 

        <!-- <h1 class="w3ls">Official Signup Form</h1> -->
        <div class="content-w3ls" style="margin-top: 50px">

            <div class="content-agile1">
                <h2 class="agileits1">Dinmarkholdings</h2>
                <p class="agileits2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="content-agile2">
                <form action="#" method="post" id="loglogii" style="margin-top: 80px">
                    <div class="form-control w3layouts">	
                        <input type="email" id="email" name="email" placeholder="mail@example.com" title="Please enter a valid email" required="">
                    </div>

                    <div class="form-control agileinfo">	
                        <input type="password" class="lock" name="pass" placeholder="Password" id="pass" required="">
                    </div>	
                    <input type="button" id="logbthn" class="register" value="Login">
                </form>

                <p class="wthree w3l">Fast Signup To Your Favourite Social Profile</p>
                <ul class="social-agileinfo wthree2">
                    <li><a href="https://www.facebook.com/" target="_blanck"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/" target="_blanck"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://twitter.com/?lang=en" target="_blanck"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://plus.google.com" target="_blanck"><i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div>

            <div class="clear"></div>

        </div>
        <script type="text/javascript" src="resources/js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/validation/sanu-loging-validation.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap.js"></script>     
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script type="text/javascript" src="resources/js/sanu-forlog.js"></script>
    </body>
</html>
