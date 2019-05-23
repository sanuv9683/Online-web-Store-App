<%-- 
    Document   : user
    Created on : Nov 5, 2017, 12:15:46 PM
    Author     : Sanu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dinmarkholdings | SettingsManager</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" href="resources/css-dash/bootstrap.min.css">
        <link rel="stylesheet" href="resources/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="resources/Ionicons/css/ionicons.min.css">
        <link rel="stylesheet" href="resources/css-dash/AdminLTE.min.css">
        <link rel="stylesheet" href="resources/css-dash/_all-skins.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    </head>
   <%
        if (!session.isNew() && session.getAttribute("cuUser") != null) {
        } else {
            response.sendRedirect("index");
        }
    %>
    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            <%@include file="header.jsp" %>
            <%@include  file="sidebar.jsp" %>


            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        User Profile
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li class="active">User profile</li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">

                    <div class="row">
                        <div class="col-md-3">

                            <!-- Profile Image -->
                            <div class="box box-primary">
                                <div class="box-body box-profile">
                                    <form id="adpropr2" enctype="multipart/form-data" method="post">
                                        <label>
                                            <img class="profile-user-img img-responsive img-circle" src="resources/images/${cuAdmin.ppic}${cuUser.ppic}" alt="" style="margin-left: 60px">
                                            <input type="file" id="gfpot" name="cvupload" style="display: none"/>
                                        </label>
                                    </form>

                                    <h3 class="profile-username text-center">${cuUser.firstName} ${cuUser.lastName}${cuAdmin.firstName} ${cuAdmin.lastName}</h3>

                                   <p class="text-muted text-center" id="adminaa2"><span class="label label-success" style="cursor: pointer">Update Pic</span></p>
                                   

                                    <ul class="list-group list-group-unbordered">
                                        <li class="list-group-item">
                                            <b>Orders</b> <a class="pull-right">0</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Products</b> <a class="pull-right">0</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Users</b> <a class="pull-right">0</a>
                                        </li>
                                    </ul>

                                    <a href="web" class="btn btn-primary btn-block"><b>WebSite</b></a>
                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->


                        </div>
                        <!-- /.col -->
                        <div class="col-md-9">
                            <div class="nav-tabs-custom">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#activity" data-toggle="tab">My Details</a></li>
                                    <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
                                    <li><a href="#settings" data-toggle="tab">Settings</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="active tab-pane" id="activity">
                                        <!-- Post -->
                                        <div class="post">
                                            <strong><i class="fa fa-book margin-r-5"></i> Full Name</strong>

                                            <p class="text-muted">
                                                ${cuUser.firstName} ${cuUser.lastName}${cuAdmin.firstName} ${cuAdmin.lastName}
                                            </p>

                                            <hr>
                                            <strong><i class="fa fa-book margin-r-5"></i> Email</strong>

                                            <p class="text-muted">
                                                ${cuUser.email}${cuAdmin.email}
                                            </p>

                                            <hr>

                                            <strong><i class="fa fa-map-marker margin-r-5"></i> Address</strong>

                                            <p class="text-muted"> ${cuUser.address}${cuAdmin.address}</p>

                                            <hr>
                                            <strong><i class="fa fa-book margin-r-5"></i> Tp</strong>

                                            <p class="text-muted">
                                                ${cuUser.conumber}${cuAdmin.conumber}
                                            </p>

                                            <hr>
                                            <strong><i class="fa fa-book margin-r-5"></i> Gender</strong>

                                            <p class="text-muted">
                                                ${cuUser.gender}${cuAdmin.gender}
                                            </p>

                                            <hr>
                                            <strong><i class="fa fa-book margin-r-5"></i> Nic</strong>

                                            <p class="text-muted">
                                                ${cuUser.nic}${cuAdmin.nic}
                                            </p>

                                            <hr>
                                        </div>
                                        <!-- /.post -->
                                    </div>
                                    <!-- /.tab-pane -->
                                    <div class="tab-pane" id="timeline">
                                        <!-- The timeline -->
                                        <form method="post" id="emailSen">
                                            <ul class="timeline timeline-inverse">
                                                <!-- timeline time label -->
                                                <li class="time-label">
                                                    <span class="bg-red">
                                                        Send Email
                                                    </span>
                                                </li>
                                                <!-- /.timeline-label -->
                                                <!-- timeline item -->

                                                <li>

                                                    <i class="fa fa-envelope bg-blue"></i>

                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i></span>

                                                        <h3 class="timeline-header"><a href="#">Enter Email Message </a>for sent  an email</h3>

                                                        <div class="timeline-body">
                                                            <textarea rows="3" class="form-control" name="emailmessage" id="emailmessage"></textarea>
                                                        </div>
                                                        <div class="timeline-footer">
                                                            <a class="btn btn-danger btn-xs">Clear</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-user bg-aqua"></i>

                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i></span>

                                                        <h3 class="timeline-header no-border"><a href="#">Enter Email</a> of the Receivers
                                                        </h3>
                                                        <div class="timeline-body">
                                                            <input type="text" class="form-control"  name="emailad" id="emailad"/>
                                                        </div>
                                                    </div>
                                                </li>
                                                <!-- END timeline item -->
                                                <!-- timeline item -->
                                                <li>
                                                    <i class="fa fa-comments bg-yellow"></i>

                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fa fa-clock-o"></i> </span>

                                                        <h3 class="timeline-header"><a href="#">Enter </a> Your email subject</h3>

                                                        <div class="timeline-body">
                                                            Take me to your leader!
                                                            Switzerland is small and neutral!
                                                            We are more like Germany, ambitious and misunderstood!
                                                            <input type="text" class="form-control"  name="emsub" id="emsub"/>
                                                        </div>
                                                        <div class="timeline-footer">
                                                            <a class="btn btn-warning btn-flat btn-xs" id="ssbtn">Send The Email</a>
                                                        </div>
                                                    </div>
                                                </li>



                                                <!-- END timeline item -->
                                                <li>
                                                    <i class="fa fa-clock-o bg-gray"></i>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                    <!-- /.tab-pane -->

                                    <div class="tab-pane" id="settings">
                                        <form class="form-horizontal" id="updateFor">
                                            <div class="form-group">
                                                <label for="inputName" class="col-sm-2 control-label">First Name</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="ufname" name="ufname" value=" ${cuUser.firstName}${cuAdmin.firstName}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputName" class="col-sm-2 control-label">Last Name</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="ulname" name="ulname" value="${cuUser.lastName}${cuAdmin.lastName}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="uuemail" name="uuemail" value="${cuUser.email}${cuAdmin.email}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputName" class="col-sm-2 control-label">Address</label>

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="uuaddress" name="uuaddress" value="${cuUser.address}${cuAdmin.address}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputExperience" class="col-sm-2 control-label">Tp No</label>

                                                <div class="col-sm-10">
                                                    <input class="form-control" id="unumber" name="unumber" value="${cuUser.conumber}${cuAdmin.conumber}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputSkills" class="col-sm-2 control-label">Nic</label>

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="unic" name="unic" value="${cuUser.nic}${cuAdmin.nic}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-offset-2 col-sm-10">
                                                    <button type="button" class="btn btn-danger" id="btnttn">Set Details</button>
                                                </div>
                                            </div>
                                        </form>
                                        <form id="passCh" class="form-horizontal">
                                            <h4 style="margin-left: 10px">Password Change</h4>
                                            <hr>

                                            <div class="form-group">
                                                <label for="inputSkills" class="col-sm-2 control-label">Current Pass</label>

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="cuurentP" name="cuurentP" placeholder="Current Password">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="inputSkills" class="col-sm-2 control-label">New Pass</label>

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="newPass" name="newPass" placeholder="New Password"">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputSkills" class="col-sm-2 control-label">Confirm Pass</label>

                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" id="cnPass" name="cnPass" placeholder="Confirm Password">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-offset-2 col-sm-10">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-offset-2 col-sm-10">
                                                    <button type="button" class="btn btn-danger" id="btnttn2">Change Password</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- /.tab-pane -->
                                </div>
                                <!-- /.tab-content -->
                            </div>
                            <!-- /.nav-tabs-custom -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->

                </section>
                <!-- /.content -->
            </div>
            <%@include file="footer.jsp" %>
            <%@include file="leftbar.jsp" %>
        </div>
        <script src="resources/css-dash/jquery.min.js"></script>
        <script src="resources/css-dash/bootstrap.min.js"></script>
        <script src="resources/css-dash/fastclick.js"></script>
        <script src="resources/css-dash/adminlte.min.js"></script>
        <script src="resources/css-dash/demo.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
    </body>
</html>

