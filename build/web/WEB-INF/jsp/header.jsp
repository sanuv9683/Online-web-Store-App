<%-- 
    Document   : header
    Created on : Nov 4, 2017, 1:11:11 PM
    Author     : Sanu
--%>

<header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>B</b>Lk</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Dinmark</b>Holdings</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only"></span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <!-- Messages: style can be found in dropdown.less-->
                <li class="dropdown messages-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-envelope-o"></i>
                        <span class="label label-success">0</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="header">Your Messages</li>
                        <!--              <li>
                                         inner menu: contains the actual data 
                                        <ul class="menu">
                                          <li> start message 
                                            <a href="#">
                                              <div class="pull-left">
                                                <img src="resources/images/admin.jpg" class="img-circle" alt="User Image">
                                              </div>
                                              <h4>
                                                Support Team
                                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                              </h4>
                                              <p>Why not buy a new awesome theme?</p>
                                            </a>
                                          </li>
                                           end message 
                                          <li>
                                            <a href="#">
                                              <div class="pull-left">
                                                <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                                              </div>
                                              <h4>
                                                AdminLTE Design Team
                                                <small><i class="fa fa-clock-o"></i> 2 hours</small>
                                              </h4>
                                              <p>Why not buy a new awesome theme?</p>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <div class="pull-left">
                                                <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                                              </div>
                                              <h4>
                                                Developers
                                                <small><i class="fa fa-clock-o"></i> Today</small>
                                              </h4>
                                              <p>Why not buy a new awesome theme?</p>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <div class="pull-left">
                                                <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                                              </div>
                                              <h4>
                                                Sales Department
                                                <small><i class="fa fa-clock-o"></i> Yesterday</small>
                                              </h4>
                                              <p>Why not buy a new awesome theme?</p>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <div class="pull-left">
                                                <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                                              </div>
                                              <h4>
                                                Reviewers
                                                <small><i class="fa fa-clock-o"></i> 2 days</small>
                                              </h4>
                                              <p>Why not buy a new awesome theme?</p>
                                            </a>
                                          </li>
                                        </ul>
                                      </li>-->
                        <li class="footer"><a href="#">See All Messages</a></li>
                    </ul>
                </li>
                <!-- Notifications: style can be found in dropdown.less -->
                <li class="dropdown notifications-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-bell-o"></i>
                        <span class="label label-warning">0</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="header">Your Notifications</li>
                        <li>
                            <!-- inner menu: contains the actual data -->
                            <ul class="menu">
                                <!--                  <li>
                                                    <a href="#">
                                                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                                    </a>
                                                  </li>-->                               
                            </ul>
                        </li>
                        <li class="footer"><a href="#">View all</a></li>
                    </ul>
                </li>
                <!-- Tasks: style can be found in dropdown.less -->
                <li class="dropdown tasks-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-flag-o"></i>
                        <span class="label label-danger">0</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="header">Your Orders</li>
                        <li>
                            <!-- inner menu: contains the actual data -->
                            <ul class="menu">
                                <!--                                            <li> Task item 
                                                                                <a href="#">
                                                                                    <h3>
                                                                                        Design some buttons
                                                                                        <small class="pull-right">20%</small>
                                                                                    </h3>
                                                                                    <div class="progress xs">
                                                                                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"
                                                                                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                                            <span class="sr-only">20% Complete</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </li>-->

                                <!-- end task item -->
                            </ul>
                        </li>
                        <li class="footer">
                            <a href="#">View all tasks</a>
                        </li>
                    </ul>
                </li>
                <!-- User Account: style can be found in dropdown.less -->
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="resources/images/${cuAdmin.ppic}${cuUser.ppic}" class="user-image" alt="img">
                        <span class="hidden-xs">${cuAdmin.firstName} ${cuAdmin.lastName} ${cuUser.firstName} ${cuUser.lastName}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="resources/images/${cuAdmin.ppic}${cuUser.ppic}" class="img-circle" alt="User Image">

                            <p>
                                ${cuAdmin.firstName} ${cuAdmin.lastName} ${cuUser.firstName} ${cuUser.lastName}
                                <small>${cuAdmin.email} ${cuUser.email}</small>
                            </p>
                        </li>
                        <!-- Menu Body -->
                        <li class="user-body">

                            <!-- /.row -->
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                                <a href="#" class="btn btn-default btn-flat">Home</a>
                            </div>
                            <div class="pull-right">
                                <a href="logOut" id="sinout" class="btn btn-default btn-flat">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </li>
                <!-- Control Sidebar Toggle Button -->
                <li>
                    <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                </li>
            </ul>
        </div>

    </nav>
</header>
