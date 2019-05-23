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
        <title>Dinmarkholdings | OrderManager</title>
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
                        Order Managing Services
                        <small>Dinmarkholdings</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Order Manage</a></li>
                        <li class="active">Order Service</li>
                    </ol>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="mymo2"></div>
                            <!-- Form Element sizes -->
                            <div class="box box-success">
                                <div class="box-header with-border">
                                    <h3 class="box-title">Add Order For Customer</h3>
                                </div>
                                <div class="box-body">
                                    <form id="aduserorder2" method="post" enctype="multipart/form-data">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-user"></i>Select Product</label>
                                            <select class="form-control" id="prselec" name="product">
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-user"></i> First Name</label>
                                            <input type="text" id="ofname" name="ofname" class="form-control" placeholder="Enter...">                                           
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-user"></i> Last Name</label>
                                            <input type="text" id="olname" name="olname" class="form-control" placeholder="Enter ...">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-wordpress"></i> Your Country</label>
                                            <select type="text" id="octry" name="octry" class="form-control"></select>
                                        </div>
                                        <div class="form-group has-success">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-circle"></i> Your City</label>
                                            <input type="text" id="olctye" name="olctye" class="form-control" placeholder="Enter ...">
                                        </div>
                                        <!-- input states -->
                                        <div class="form-group has-error">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-check"></i> Your Email</label>
                                            <input type="text" class="form-control"  id="oemail" name="oemail" placeholder="Enter ...">
                                            <span class="help-block">This will be your order confirm email</span>
                                        </div>
                                        <div class="form-group has-error">
                                            <label class="control-label" for="inputWarning"><i class="fa fa-bell-o"></i> You NIC Or Passport ID</label>
                                            <input type="text" class="form-control"  id="onic" name="onic" placeholder="Enter ...">
                                            <span class="help-block">Please Enter your Nic or Passport ID Carefully..</span>
                                        </div>
                                        <div class="form-group has-error">
                                            <label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Your Contack Number</label>
                                            <input type="text" class="form-control"  id="oppo" name="oppo" placeholder="Enter ...">
                                            <span class="help-block">This will be used to contac you</span>
                                        </div>
                                        <!-- textarea -->
                                        <div class="form-group ">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-address-card"></i> Your Address</label>
                                            <textarea class="form-control" id="ooadde" name="ooadde" rows="3" placeholder="Enter ..."></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="inputSuccess"><i class="fa fa-mail-reply"></i> Comment</label>
                                            <textarea class="form-control" rows="3" id="oocomme" name="oocomme" placeholder="Enter ..."></textarea>
                                        </div>

                                    </form>
                                </div>

                                <div class="box-footer">
                                    <button type="button" class="btn btn-primary pull-right" id="adcuor" style="margin-left: 5px">Proceed</button>
                                    <button type="buttom" id="canc" class="btn btn-danger pull-right">Cancel</button>

                                </div>   
                                <!-- /.box-body -->
                            </div>
                             <div id="mymo2"></div>
                        </div>
                        <div class="col-md-12">                          
                        </div>
                    </div>
                </section>
            </div>
            <%@include file="footer.jsp" %>
            <%@include file="leftbar.jsp" %>
        </div>
        <script src="resources/css-dash/jquery.min.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script src="resources/ajax/sanu-ajax-common.js"></script>
        <script src="resources/css-dash/bootstrap.min.js"></script>       
        <script src="resources/css-dash/jquery.dataTables.min.js"></script>
        <script src="resources/css-dash/dataTables.bootstrap.min.js"></script>
        <script src="resources/css-dash/jquery.slimscroll.min.js"></script>
        <script src="resources/css-dash/fastclick.js"></script>
        <script src="resources/css-dash/adminlte.min.js"></script>
        <script type="text/javascript" src="resources/js/alertify.js"></script>
        <script type="text/javascript" src="resources/js/websocket.js"></script>
        <script src="resources/css-dash/demo.js"></script>       
        <script src="resources/ajax/sanu-ordermanage.js"></script>

    </body>
</html>

