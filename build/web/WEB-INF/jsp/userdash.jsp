<%-- 
    Document   : adminDash
    Created on : Nov 3, 2017, 8:59:22 AM
    Author     : Sanu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dinmarkholdings | Dashboard</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" href="resources/css-dash/bootstrap.min.css">
        <link rel="stylesheet" href="resources/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="resources/Ionicons/css/ionicons.min.css">
        <link rel="stylesheet" href="resources/css-dash/jquery-jvectormap.css">
        <link rel="stylesheet" href="resources/css-dash/AdminLTE.min.css">
        <link rel="stylesheet" href="resources/css-dash/_all-skins.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
        <link rel="stylesheet" type="text/css" href="resources/css-dash/newcss-sanu.css">
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
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
                        Dashboard
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Dashboard</li>
                    </ol>
                </section>
                <!-- Main content -->
                <section class="content">
                    <!-- Info boxes -->
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="info-box">
                                <span class="info-box-icon bg-aqua"><i class="ion ion-android-cart"></i></span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Orders</span>
                                    <span class="info-box-number" id="for"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                            <!-- /.info-box -->
                        </div>
                        <!-- /.col -->
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="info-box">
                                <span class="info-box-icon bg-red"><i class="ion ion-android-playstore"></i></span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Products</span>
                                    <span class="info-box-number"  id="pprr"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                            <!-- /.info-box -->
                        </div>
                        <!-- /.col -->

                        <!-- fix for small devices only -->
                        <div class="clearfix visible-sm-block"></div>

                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="info-box">
                                <span class="info-box-icon bg-green"><i class="ion ion-ios-personadd-outline"></i></span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Clients</span>
                                    <span class="info-box-number"  id="clee"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                            <!-- /.info-box -->
                        </div>
                        <!-- /.col -->
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="info-box">
                                <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Staff</span>
                                    <span class="info-box-number" id="sta"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                            <!-- /.info-box -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-md-12">
                            <div class="box">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Summery Report</h3>

                                    <div class="box-tools pull-right">
                                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                        </button>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                                                <i class="fa fa-wrench"></i></button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#">Futher Develop</a></li>
                                                <li><a href="#">Futher Develop</a></li>
                                                <li><a href="#">Futher Develop</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Futher Develop</a></li>
                                            </ul>
                                        </div>
                                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <p class="text-center">
                                                <strong>Main Options</strong>
                                            </p>

                                            <%@include file="buttons.jsp" %>
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-md-4">
                                            <p class="text-center">
                                                <strong>Orders Summery</strong>
                                            </p>

                                            <div class="progress-group">
                                                <span class="progress-text">Pending Orders</span>
                                                <span class="progress-number"><b><span id="peno"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-aqua" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                            <div class="progress-group">
                                                <span class="progress-text">Processing Orders</span>
                                                <span class="progress-number"><b><span id="ppo"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-primary" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                            <div class="progress-group">
                                                <span class="progress-text">Delivered Orders</span>
                                                <span class="progress-number"><b><span id="ddo"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-striped" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                            <div class="progress-group">
                                                <span class="progress-text">Completed Orders</span>
                                                <span class="progress-number"><b><span id="cco"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-success" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                            <!-- /.progress-group -->
                                            <div class="progress-group">
                                                <span class="progress-text">Cancelled Orders</span>
                                                <span class="progress-number"><b><span id="cao"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-danger" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                            <!-- /.progress-group -->
                                            <div class="progress-group">
                                                <span class="progress-text">Returned Orders</span>
                                                <span class="progress-number"><b><span id="reo"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span></b></span>

                                                <div class="progress sm">
                                                    <div class="progress-bar progress-bar-warning" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- /.progress-group -->
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- /.row -->
                                </div>
                                <!-- ./box-body -->
                                <div class="box-footer">
                                    <div class="row">
                                        <!--                                        <div class="col-sm-3 col-xs-6">
                                                                                    <div class="description-block border-right">
                                                                                        <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 0%</span>
                                                                                        <h5 class="description-header">0</h5>
                                                                                        <span class="description-text">TOTAL REVENUE</span>
                                                                                    </div>
                                                                                     /.description-block 
                                                                                </div>-->
                                        <!-- /.col -->
                                        <!--                                        <div class="col-sm-3 col-xs-6">
                                                                                    <div class="description-block border-right">
                                                                                        <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>
                                                                                        <h5 class="description-header">0</h5>
                                                                                        <span class="description-text">TOTAL COST</span>
                                                                                    </div>
                                                                                     /.description-block 
                                                                                </div>-->
                                        <!-- /.col -->
                                        <!--                                        <div class="col-sm-3 col-xs-6">
                                                                                    <div class="description-block border-right">
                                                                                        <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 0%</span>
                                                                                        <h5 class="description-header">0</h5>
                                                                                        <span class="description-text">TOTAL PROFIT</span>
                                                                                    </div>
                                                                                     /.description-block 
                                                                                </div>-->
                                        <!-- /.col -->
                                        <!--                                        <div class="col-sm-3 col-xs-6">
                                                                                    <div class="description-block">
                                                                                        <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 0%</span>
                                                                                        <h5 class="description-header">0</h5>
                                                                                        <span class="description-text">GOAL COMPLETIONS</span>
                                                                                    </div>
                                                                                     /.description-block 
                                                                                </div>-->
                                    </div>
                                    <!-- /.row -->
                                </div>
                                <!-- /.box-footer -->
                            </div>
                            <!-- /.box -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->

                    <!-- Main row -->
                    <div class="row">
                        <!-- Left col -->
                        <div class="col-md-8">
                            <!-- MAP & BOX PANE -->

                            <!-- /.box -->
                            <div class="row">
                                <div class="col-md-6">

                                </div>
                                <!-- /.col -->

                                <div class="col-md-6">

                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->

                        </div>
                        <!-- /.col -->

                        <div class="col-md-4">

                            <!-- /.box -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <%@include file="footer.jsp" %>
            <%@include file="leftbar.jsp" %>
        </div>
        <!-- ./wrapper -->

        <!-- jQuery 3 -->
        <script src="resources/css-dash/jquery.min.js"></script>
        <!-- Bootstrap 3.3.7 -->
        <script src="resources/css-dash/bootstrap.min.js"></script>
        <!-- FastClick -->
        <script src="resources/css-dash/fastclick.js"></script>
        <!-- AdminLTE App -->
        <script src="resources/css-dash/adminlte.min.js"></script>
        <!-- Sparkline -->
        <script src="resources/css-dash/jquery.sparkline.min.js"></script>
        <!-- jvectormap  -->
        <script src="resources/css-dash/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="resources/css-dash/jquery-jvectormap-world-mill-en.js"></script>
        <!-- SlimScroll -->
        <script src="resources/css-dash/jquery.slimscroll.min.js"></script>
        <!-- ChartJS -->
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script src="resources/css/Chart.js"></script>
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="resources/css-dash/dashboard2.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="resources/css-dash/demo.js"></script>
        <script src="resources/ajax/sanu-ajax-admin-ctrl.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
    </body>
</html>
