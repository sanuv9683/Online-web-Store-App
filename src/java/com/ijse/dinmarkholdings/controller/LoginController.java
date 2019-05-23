/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.core.Admin;
import com.ijse.dinmarkholdings.core.Client;
import com.ijse.dinmarkholdings.core.Orders;
import com.ijse.dinmarkholdings.core.Product;
import com.ijse.dinmarkholdings.core.User;
import com.ijse.dinmarkholdings.dto.Notification;
import com.ijse.dinmarkholdings.other.PassManager;
import com.ijse.dinmarkholdings.other.SanuailSender;
import com.ijse.dinmarkholdings.service.AdminService;
import com.ijse.dinmarkholdings.service.ClientService;
import com.ijse.dinmarkholdings.service.OrderService;
import com.ijse.dinmarkholdings.service.ProductService;
import com.ijse.dinmarkholdings.service.UserService;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Sanu
 */
@Controller
public class LoginController {

    @Autowired
    private ProductService proServe;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserService userServe;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ClientService cliServe;

    @Autowired
    private AdminService adminServe;

    @RequestMapping(value = "/loginn", method = RequestMethod.POST)
    public void clientLoginn(HttpServletRequest req, HttpServletResponse resp) {
        try {
            req.getSession().invalidate();
            PrintWriter writer = resp.getWriter();
            resp.setContentType("text/html; charset=utf-8");
            String email = req.getParameter("email");
            String pass = req.getParameter("pass");
            String decriptMyPass = PassManager.encriptMyPass(pass.trim());
            Admin adminA = adminServe.searchAdminForLogin(email, decriptMyPass);
            Date d = new Date();
            SimpleDateFormat fm = new SimpleDateFormat("EEE, d MMM yyyy 'at' HH:mm:ss");
            String dformat = fm.format(d);
            String ale = "<div style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif;'>"
                    + "<table style='width: 100%;'>"
                    + "<tr>"
                    + "<td></td>"
                    + "<td bgcolor='#FFFFFF '>"
                    + "<div style='padding: 15px; max-width: 600px;margin: 0 auto;display: block; border-radius: 0px;padding: 0px; border: 1px solid lightseagreen;'>"
                    + "<table style='width: 100%;background: red ;'>"
                    + "<tr>"
                    + "<td></td>"
                    + "<td>"
                    + "<div>"
                    + "<table width='100%'>"
                    + "<tr>"
                    + "<td rowspan='2' style='text-align:center;padding:10px;'>"
                    + "<h3 style='float:left;color:white;'>Dinmarkholdings</h3>"
                    + "<span style='color:white;float:right;font-size: 15px;margin-top: 20px; padding:10px; font-weight:bold;'>"
                    + "Login Alert..!.<span></span></span></td>"
                    + "</tr>"
                    + "</table>"
                    + "</div>"
                    + "</td>"
                    + " <td></td>"
                    + "</tr>"
                    + "</table>"
                    + "<table style='padding: 10px;font-size:14px; width:100%;'>"
                    + "<tr>"
                    + "<td style='padding:10px;font-size:14px; width:100%;'>"
                    + "<p>Hi " + email + ",</p>"
                    + "<p><br /> You Just Singed in to Your Account...!</p>"
                    + "<p>Details <br /> </p>"
                    + "<p>" + dformat + "</p>"
                    + "<p>Thanks for choosing Dinmarkholdings,</p>"
                    + "<p>Dinmarkholdings Team.</p>"
                    + "<!-- /Callout Panel -->"
                    + "<!-- FOOTER -->"
                    + "</td>"
                    + "</tr>"
                    + "<tr>"
                    + "<td>"
                    + "<div align='center' style='font-size:12px; margin-top:20px; padding:5px; width:100%; background:#eee;'>"
                    + "© 2017-2018 <a href='' target='_blank' style='color:#333; text-decoration: none;'>dinmarkholdings.com</a>"
                    + "</div>"
                    + "</td>"
                    + "</tr>"
                    + "</table>"
                    + "</div>";
            User serUser = userServe.searchUserForLogin(email, decriptMyPass);
            if (adminA != null) {
                writer.print("admin");
                req.getSession().setAttribute("cuAdmin", adminA);

                MimeMessagePreparator preparator = SanuailSender.getMessagePreparator(email, "Dinmarkholdings-Loging Alert..!", ale);
                mailSender.send(preparator);
            } else if (serUser != null) {
                if (serUser.getState().equals("Enable")) {
                    writer.print("user");
                    req.getSession().setAttribute("cuUser", serUser);
                    serUser.setOnl("on");
                    userServe.updateUser(serUser);
                    MimeMessagePreparator preparator = SanuailSender.getMessagePreparator(email, "Dinmarkholdings-Loging Alert..!", ale);
                    mailSender.send(preparator);
                } else {
                    writer.print("Banned");
                }

            } else {
                writer.print("no");
            }
            writer.close();
        } catch (Exception ex) {
            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/logOut")
    public String loginOut(HttpServletRequest req, HttpServletResponse resp) {
        User user = (User) req.getSession().getAttribute("cuUser");
        if (user != null) {
            try {
                int id = user.getId();
                User searchUser = userServe.searchUser(id);
                searchUser.setOnl("off");
                userServe.updateUser(searchUser);
            } catch (Exception ex) {
                Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        req.getSession().invalidate();
        return "index";
    }

    @RequestMapping(value = "/sendm", method = RequestMethod.POST)
    public void adminLogin(HttpServletRequest req, HttpServletResponse resp) {
        String emailmes = req.getParameter("emailmessage");
        String emailad = req.getParameter("emailad");
        String subb = req.getParameter("emsub");
        MimeMessagePreparator preparator = SanuailSender.getMessagePreparator(emailad, subb, emailmes);
        mailSender.send(preparator);
    }

    @RequestMapping(value = "/updateUA", method = RequestMethod.POST)
    public void updateUserAd(HttpServletRequest req, HttpServletResponse resp) {
        Admin admin = (Admin) req.getSession().getAttribute("cuAdmin");
        User user = (User) req.getSession().getAttribute("cuUser");
        String fname = req.getParameter("ufname");
        String lname = req.getParameter("ulname");
        String email = req.getParameter("uuemail");
        String addres = req.getParameter("uuaddress");
        String number = req.getParameter("unumber");
        String nic = req.getParameter("unic");
        if (admin != null) {
            try {
                admin.setAddress(addres);
                admin.setConumber(number);
                admin.setEmail(email);
                admin.setFirstName(fname);
                admin.setLastName(lname);
                admin.setNic(nic);
                boolean updateAdmin = adminServe.updateAdmin(admin);
                if (updateAdmin) {
                    resp.getWriter().print("ok");
                } else {
                    resp.getWriter().print("no");
                }
            } catch (Exception ex) {
                Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else if (user != null) {
            try {
                user.setAddress(addres);
                user.setConumber(number);
                user.setEmail(email);
                user.setFirstName(fname);
                user.setLastName(lname);
                user.setNic(nic);
                boolean updateUser = userServe.updateUser(user);
                if (updateUser) {
                    resp.getWriter().print("ok");
                } else {
                    resp.getWriter().print("no");
                }
            } catch (Exception ex) {
                Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
            }

        }

    }

    @RequestMapping(value = "/changePass", method = RequestMethod.POST)
    public void upPass(HttpServletRequest req, HttpServletResponse resp) {
        String current = req.getParameter("cuurentP");
        String newPass = req.getParameter("newPass");

        String cc = PassManager.encriptMyPass(current);
        String nn = PassManager.encriptMyPass(newPass);

        Admin admin = (Admin) req.getSession().getAttribute("cuAdmin");
        User user = (User) req.getSession().getAttribute("cuUser");

        if (admin != null) {
            String currentAddminPass = admin.getPass();
            try {
                if (currentAddminPass.equals(cc)) {
                    admin.setPass(nn);
                    boolean updateAdmin = adminServe.updateAdmin(admin);
                    if (updateAdmin) {
                        resp.getWriter().print("ok");
                    } else {
                        resp.getWriter().print("no");
                    }
                } else {
                    resp.getWriter().print("wrong");
                }

            } catch (Exception ex) {
                Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else if (user != null) {
            String currentUserPass = user.getPass();
            try {
                if (currentUserPass.equals(cc)) {
                    user.setPass(nn);
                    boolean updateUser = userServe.updateUser(user);
                    if (updateUser) {
                        resp.getWriter().print("ok");
                    } else {
                        resp.getWriter().print("no");
                    }
                } else {
                    resp.getWriter().print("wrong");
                }

            } catch (Exception ex) {
                Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
            }

        }

    }

    @RequestMapping(value = "/dashup")
    public void dashB(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            List<User> userList = userServe.getUserList();
            List<Client> clientList = cliServe.getClientList();
            List<Product> productList = proServe.getProductList();
            List<Orders> orderList = orderService.getOrderList();
            ArrayList<Orders> pend = new ArrayList<Orders>();
            ArrayList<Orders> sub = new ArrayList<Orders>();
            ArrayList<Orders> can = new ArrayList<Orders>();
            ArrayList<Orders> comm = new ArrayList<Orders>();
            ArrayList<Orders> retu = new ArrayList<Orders>();
            ArrayList<Orders> prooo = new ArrayList<Orders>();
            for (Orders orders : orderList) {
                String state = orders.getState();
                if (state.equals("Pending")) {
                    pend.add(orders);
                } else if (state.equals("Processing")) {
                    prooo.add(orders);
                } else if (state.equals("Delivered")) {
                    sub.add(orders);
                } else if (state.equals("Cancelled")) {
                    can.add(orders);
                } else if (state.equals("Completed")) {
                    comm.add(orders);
                } else if (state.equals("Returned")) {
                    retu.add(orders);
                }
            }
            Notification temp = new Notification(orderList.size(), productList.size(), clientList.size(), userList.size(), prooo.size(), pend.size(), sub.size(), can.size(), comm.size(), retu.size());
            String toJson = new Gson().toJson(temp);
            resp.getWriter().write(toJson);
        } catch (Exception ex) {
            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/whois", method = RequestMethod.POST)
    public void dashBs(HttpServletRequest req, HttpServletResponse resp) {
//        resp.setContentType("application/json");
        Admin admin = (Admin) req.getSession().getAttribute("cuAdmin");
        User user = (User) req.getSession().getAttribute("cuUser");
        try {
            if (admin != null) {
                resp.getWriter().write("adm");
            } else if (user != null) {
                resp.getWriter().write("use");
            }
        } catch (IOException ex) {
            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
