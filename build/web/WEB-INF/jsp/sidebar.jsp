<%-- 
    Document   : sidebar
    Created on : Nov 4, 2017, 1:09:31 PM
    Author     : Sanu
--%>
<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image"> 
                <img src="resources/images/${cuAdmin.ppic}${cuUser.ppic}" class="img-circle img-responsive" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>${cuAdmin.firstName} ${cuAdmin.lastName} ${cuUser.firstName} ${cuUser.lastName}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Dinmark Holdings</li>
            <li class="active treeview menu-open">
                <a  href="" id="home">
                    <i class="fa fa-dashboard"></i> <span>Home</span>                              
                </a>                           
            </li>
            <li class="treeview">
                <a  href="" id="orderm">
                    <i class="fa fa-cart-plus"></i>
                    <span>Order Manage</span>   
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>   
                <ul class="treeview-menu">
                    <li><a href="addorder"><i class="fa fa-circle-o"></i> Place Order</a></li>
                    <li><a href="pendingorder"><i class="fa fa-circle-o"></i> Pending Orders</a></li>
                    <li><a href="ongoing"><i class="fa fa-circle-o"></i> Processing Orders</a></li>
                    <li><a href="submitorders"><i class="fa fa-circle-o"></i> Delivered Orders</a></li>
                    <li><a href="canorder"><i class="fa fa-circle-o"></i> Cancelled Orders</a></li>
                    <li><a href="returnorder"><i class="fa fa-circle-o"></i> Returned Orders</a></li>
                    <li><a href="cmporders"><i class="fa fa-circle-o"></i> Completed Orders</a></li>
                    <li><a href="searchorder"><i class="fa fa-circle-o"></i> Search Orders</a></li>
                    <li><a href="allorders"><i class="fa fa-circle-o"></i> All In One</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a  href="#" id="productm">
                    <i class="fa fa-th"></i>
                    <span>Product Manage</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>   
                <ul class="treeview-menu">
                    <li><a href="addpro"><i class="fa fa-circle-o"></i> Register Product</a></li>
                    <li><a href="updatepro"><i class="fa fa-circle-o"></i> Renew Product</a></li>
                    <li><a href="viewpro"><i class="fa fa-circle-o"></i> View Product</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a  href="" id="reportsm">
                    <i class="fa fa-laptop"></i>
                    <span>Reports Manage</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>   
                <ul class="treeview-menu">
                    <li><a href="repocust"><i class="fa fa-circle-o"></i> Customers</a></li>
                    <li><a href="repousr"><i class="fa fa-circle-o"></i> Users</a></li>               
                    <li><a href="repopro"><i class="fa fa-circle-o"></i> Products</a></li>
                    <li class="treeview">
                        <a  href="" id="r">
                            <i class="fa fa-circle-o"></i>
                            <span>Order Reports</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>   
                        <ul class="treeview-menu">
                            <li><a href="repoorder"><i class="fa fa-circle-o"></i> All Reports</a></li>
                            <li><a href="trep"><i class="fa fa-circle-o"></i> Today</a></li>
                            <li><a href="mrep"><i class="fa fa-circle-o"></i> Month</a></li>                
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="treeview">
                <a  href="" id="backupm">
                    <i class="fa fa-edit"></i> <span>Backup</span>                               
                </a>                         
            </li>
            <li class="treeview">
                <a href="" id="settingsm">
                    <i class="fa fa-table"></i> <span>Settings</span>                              
                </a>                          
            </li>
        </ul>
    </section>

    <!-- /.sidebar -->
</aside>
<div id="lloggd2"></div>