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
        <title>Dinmarkholdings | ReportManager</title>
        <link rel="icon" type="image/png" href="resources/icon/fav.png">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" href="resources/css-dash/bootstrap.min.css">
        <link rel="stylesheet" href="resources/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="resources/Ionicons/css/ionicons.min.css">
        <link rel="stylesheet" href="resources/css-dash/AdminLTE.min.css">
        <link rel="stylesheet" href="resources/css-dash/_all-skins.min.css">
        <link rel="stylesheet" href="resources/css-dash/dataTables.bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    </head>
    <%
        if (!session.isNew() && session.getAttribute("cuAdmin") != null) {
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
                        Report Genarate Services
                        <small>Dinmarkholdings</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Report Manage</a></li>
                        <li class="active">Reports Service</li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                    <div class="row">
                        <!-- left column -->
                        <div class="col-md-12">

                        </div>
                        <!--/.col (left) -->
                        <!-- right column -->
                        <div class="col-md-12">

                            <div class="box box-warning">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Current Month Orders</h3>
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table id="repo6" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Order Id</th>
                                                    <th>User Email</th>
                                                    <th>Product</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody id="rep6">

                                            </tbody>
                                            <tfoot></tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div class="box-footer">
                                    <a  id="" target="_blanck" href="getMOrdersRe" class="btn btn-primary pull-right">Genarate Report</a>
                                </div>
                                <!-- /.box-body -->
                            </div>


<!--                            <div class="box box-danger">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Annual Orders</h3>
                                </div>
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table id="repo3" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Order Id</th>
                                                    <th>User Email</th>
                                                    <th>Product</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody id="rep3">

                                            </tbody>
                                            <tfoot></tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div class="box-footer">
                                    <button type="button" id="re3" class="btn btn-primary pull-right">Genarate Report</button>
                                </div>
                                 /.box-body 
                            </div>-->
                            <!-- /.box -->  
                            <!-- /.box -->
                        </div>
                        <!--/.col (right) -->
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
        <script src="resources/css-dash/jquery.dataTables.min.js"></script>
        <script src="resources/css-dash/dataTables.bootstrap.min.js"></script>
        <script src="resources/css-dash/jquery.slimscroll.min.js"></script>
        <script src="resources/css-dash/demo.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
        <script src="resources/ajax/sanu-ajax-report.js"></script>
    </body>
</html>

