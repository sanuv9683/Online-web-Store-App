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
        <link rel="stylesheet" href="resources/css-dash/newcss-sanu.css">
        <link rel="stylesheet" href="resources/css-dash/dataTables.bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.core.css" >
        <link rel="stylesheet" type="text/css" href="resources/css/alertify.default.css">
        <script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
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
                            <!--///-->

                            <div class="chart">
                                <div class="">
                                    <div class="row">
                                        <div class="btn-group btn-group-justified">
                                            <div class="btn-group">
                                                <button id="toda" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Today Orders</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="month" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Monthly Order</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="anual" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Annual Orders</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="bestS" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Income Received</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="totsa" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Due payments</p>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="btn-group btn-group-justified">
                                            <div class="btn-group">
                                                <button id="reon2" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Income from customer</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="cchd" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Total Sales</p>
                                                </button>
                                            </div>
                                            <div class="btn-group">
                                                <button id="mkoi" type="button" class="btn btn-nav">
                                                    <span class="glyphicon glyphicon-print"></span>
                                                    <p>Total Sales</p>
                                                </button>
                                            </div>
                                            <!--                                            <div class="btn-group">
                                                                                            <button id="upi" type="button" class="btn btn-nav">
                                                                                                <span class="glyphicon glyphicon-print"></span>
                                                                                                <p>Update Products</p>
                                                                                            </button>
                                                                                        </div>-->
                                            <!--                                            <div class="btn-group">
                                                                                            <button id="vpro" type="button" class="btn btn-nav">
                                                                                                <span class="glyphicon glyphicon-print"></span>
                                                                                                <p>View Products</p>
                                                                                            </button>
                                                                                        </div>-->

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!--///-->
                        </div>
                        <!--/.col (left) -->
                        <!-- right column -->
                        <div class="col-md-12" style="margin-top: 10px">
                            <!-- Horizontal Form -->
                            <div class="box box-info">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Income received by each product</h3>    
                                    <div id="reportrange1" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 30%">
                                        <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                                        <span></span> <b class="caret"></b>
                                    </div>                             
                                </div>
                                <div class="box-body">
                                    <!--                                    <div class="table-responsive">
                                                                            <table id="rem1" class="table table-bordered table-striped">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Product Description</th>
                                                                                        <th>Cost</th>
                                                                                        <th>Qty</th>
                                                                                        <th>Tax (%)</th>
                                                                                        <th>TTD</th>
                                                                                        <th>IR</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody id="rem11">
                                    
                                                                                </tbody>
                                                                                <tfoot></tfoot>
                                                                            </table>
                                                                        </div>-->
                                </div>
                                <div class="box-footer">
                                    <button type="button" id="bt1"  class="btn btn-primary pull-right">Genarate Report</button>
                                </div>
                            </div>
                            <!-- /.box -->
                            <!-- general form elements disabled -->
                            <div class="box box-warning">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Due payments</h3>
                                    <div id="reportrange2" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 30%">
                                        <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                                        <span></span> <b class="caret"></b>
                                    </div>
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <!--                                    <div class="table-responsive">
                                                                            <table id="rem2" class="table table-bordered table-striped">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Customer Name</th>
                                                                                        <th>Product(s)</th>
                                                                                        <th>OD</th>
                                                                                        <th>Qty</th>
                                                                                        <th>AP</th>
                                                                                        <th>DP</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody id="rem22">
                                    
                                                                                </tbody>
                                                                                <tfoot></tfoot>
                                                                            </table>
                                                                        </div>-->
                                </div>
                                <div class="box-footer">
                                    <button type="button" id="bt2"  class="btn btn-primary pull-right">Genarate Report</button>
                                </div>
                                <!-- /.box-body -->
                            </div>


                            <div class="box box-danger">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Income received by each customer</h3>
                                    <div id="reportrange3" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 30%">
                                        <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                                        <span id="q1"></span> <b class="caret"></b>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <!--                                    <div class="table-responsive">
                                                                            <table id="rem3" class="table table-bordered table-striped">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Customer</th>
                                                                                        <th>No of Products</th>
                                                                                        <th>Total Tax</th>
                                                                                        <th>Income Received</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody id="rem33">
                                    
                                                                                </tbody>
                                                                                <tfoot></tfoot>
                                                                            </table>
                                                                        </div>-->
                                </div>
                                <div class="box-footer">
                                    <button type="button" id="bt3"  class="btn btn-primary pull-right">Genarate Report</button>
                                </div>
                                <!--/.box-body--> 
                            </div>
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
        <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
        <script src="resources/ajax/sanu-ajax-report.js"></script>
    </body>
</html>

