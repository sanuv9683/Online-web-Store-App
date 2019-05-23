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
        <title>Dinmarkholdings | ProductManager</title>
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
        if (!session.isNew() && (session.getAttribute("cuAdmin") != null || session.getAttribute("cuUser") != null)) {
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
                        Product Managing Services
                        <small>Dinmarkholdings</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Product Manager</a></li>
                        <li class="active">Product Service</li>
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                    <div class="row">
                        <!-- left column -->
                        <div class="col-md-12">
                            <!-- general form elements -->
                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Manage Existing</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <form role="form" id="propUp" >
                                    <div class="box-body">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label>Select Product</label>
                                            <select id="pspele" name="psse" class="form-control">

                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Product Name</label>
                                            <input type="text" id="bpn" name="bpn" class="form-control" placeholder="Enter ...">
                                        </div>
                                        <div class="form-group">
                                            <label>Product State</label>
                                            <select id="sdtate" name="sdtate" class="form-control">
                                                <option>hide</option>
                                                <option>available</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Product Tax</label>
                                            <input id="ptax" name="ptax" class="form-control">                                              
                                        </div>

                                        <div class="form-group">
                                            <label>Product Price</label>
                                            <input id="proce" name="proce" class="form-control">                                              
                                        </div>

                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Product Description 1</label>
                                            <textarea class="form-control" id="prd1" name="prd1" rows="3" placeholder="Enter ..."></textarea>
                                        </div>   

                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label>Product Description 2</label>
                                            <textarea class="form-control"id="prd2" name="prd2"  rows="3" placeholder="Enter ..."></textarea>
                                        </div>   


                                        <div class="form-group">
                                            <label for="exampleInputFile">Product Banner</label>
                                            <input type="file" id="dfp" name="pbaner" >
                                        </div>
                                    </div>
                                    <!-- /.box-body -->

                                    <div class="box-footer">
                                        <button type="button" id="pupbtn" class="btn btn-success pull-right" style="margin-left: 5px">Serach</button>
                                        <button type="button" id="pupbtn2" class="btn btn-primary  pull-right" >Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
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
        <script src="resources/css-dash/demo.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
        <script src="resources/ajax/sanu-ajax-admin-ctrl.js"></script>

    </body>
</html>

