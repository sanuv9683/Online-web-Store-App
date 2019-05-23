/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.core.User;
import com.ijse.dinmarkholdings.other.PassManager;
import com.ijse.dinmarkholdings.service.UserService;
import com.google.gson.Gson;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Sanu
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/regnewUser", method = RequestMethod.POST)
    public void registerUser(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String fname = req.getParameter("fname");
            String lastName = req.getParameter("lname");
            String email = req.getParameter("uemail");
            String userPass = req.getParameter("upass");
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFirstName(fname);
            newUser.setLastName(lastName);
            newUser.setState("Enable");
            String encripted = PassManager.encriptMyPass(userPass);
            newUser.setPass(encripted);
            newUser.setGender("Male");
            newUser.setPpic("admin.jpg");
            newUser.setOnl("off");
            List<User> serchRes = userService.advancedUserSearch(email);
            if (serchRes.isEmpty()) {
                boolean addCli = userService.addUser(newUser);
                if (addCli) {
                    resp.getWriter().print("ok");
                }
            } else {
                resp.getWriter().print("You cant use same email twise..Sorry..!");
            }

        } catch (Exception ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/getAllUsers")
    public void updateUser(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            List<User> userList = userService.getUserList();
            ArrayList<User> user = new ArrayList<User>();
            for (User user1 : userList) {
                User temp = new User();
                temp.setAddress(user1.getAddress());
                temp.setConumber(user1.getConumber());
                temp.setEmail(user1.getEmail());
                temp.setFirstName(user1.getFirstName());
                temp.setGender(user1.getGender());
                temp.setId(user1.getId());
                temp.setLastName(user1.getLastName());
                temp.setNic(user1.getNic());
                temp.setPass(user1.getPass());
                temp.setState(user1.getState());
                temp.setPpic(user1.getPpic());
                user.add(temp);
            }
            String toJson = new Gson().toJson(user);
            resp.getWriter().write(toJson);
        } catch (Exception ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/seoUser", method = RequestMethod.POST)
    public void deleteUser(HttpServletRequest req, HttpServletResponse resp) {
        try {

            String name = req.getParameter("str");
            List<User> seoResalt = userService.advancedUserSearch(name.trim());
            User user = null;
            if (!seoResalt.isEmpty()) {
                resp.setContentType("application/json");
                for (User user1 : seoResalt) {
                    user = user1;
                }
                User temp = new User();
                temp.setAddress(user.getAddress());
                temp.setConumber(user.getConumber());
                temp.setEmail(user.getEmail());
                temp.setFirstName(user.getFirstName());
                temp.setGender(user.getGender());
                temp.setId(user.getId());
                temp.setLastName(user.getLastName());
                temp.setNic(user.getNic());
                temp.setPass(user.getPass());
                temp.setState(user.getState());
                temp.setPpic(user.getPpic());
                temp.setOnl(user.getOnl());
                String toJson = new Gson().toJson(temp);
                resp.getWriter().write(toJson);
            } else {
                resp.setContentType("text/html");
                resp.getWriter().write("No User");
            }

        } catch (Exception ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/updatePic", method = RequestMethod.POST)
    public void searchUserFromID(@RequestParam(value = "cvupload") MultipartFile cvupload, HttpServletRequest req, HttpServletResponse resp) {
        User user = (User) req.getSession().getAttribute("cuUser");
        if (user != null) {
            try {
                String realPath = req.getServletContext().getRealPath("/resources/images");
                String originalFilename = cvupload.getOriginalFilename();
                String rrPath = realPath + File.separator + originalFilename;
                File out = new File(rrPath);
                out.createNewFile();
                FileOutputStream outS = new FileOutputStream(out);
                InputStream inputStream = cvupload.getInputStream();
                int read = 0;
                byte[] buffer = new byte[1024];
                while ((read = inputStream.read(buffer, 0, buffer.length)) != -1) {
                    outS.write(buffer, 0, buffer.length);
                }
                user.setPpic(originalFilename);

                File inputFile = new File(rrPath);
                BufferedImage inputImage = ImageIO.read(inputFile);

                // creates output image
                BufferedImage outputImage = new BufferedImage(200,
                        200, inputImage.getType());

                // scales the input image to the output image
                Graphics2D g2d = outputImage.createGraphics();
                g2d.drawImage(inputImage, 0, 0, 200, 200, null);
                g2d.dispose();

                // extracts extension of output file
                String formatName = rrPath.substring(rrPath
                        .lastIndexOf(".") + 1);

                // writes to output file
                ImageIO.write(outputImage, formatName, new File(rrPath));
                userService.updateUser(user);
            } catch (IOException ex) {
                Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
            } catch (Exception ex) {
                Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    @RequestMapping(value = "/userRepo")
    public void searchUserFromQuery(HttpServletRequest req, HttpServletResponse resp) {
        try {
            List<User> clientList = userService.getUserList();
            File reportFile = new File(req.getServletContext().getRealPath("/resources/reports/budgetlanka-user.jasper"));
            Map parameters = new HashMap();
            parameters.put("total", clientList.size());
            JRBeanCollectionDataSource itemsJRBean = new JRBeanCollectionDataSource(clientList);
            parameters.put("ItemDataSource", itemsJRBean);
            byte[] bytes = JasperRunManager.runReportToPdf(reportFile.getPath(), parameters, itemsJRBean);
            resp.setContentType("application/pdf");
            resp.setContentLength(bytes.length);
            ServletOutputStream ouputStream = resp.getOutputStream();
            ouputStream.write(bytes, 0, bytes.length);
            ouputStream.flush();
            ouputStream.close();
        } catch (JRException ex) {
            Logger.getLogger(PaymentController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(PaymentController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/getOnlineUsers")
    public void viewAllUsers(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            List<User> userList = userService.getUserList();
            ArrayList<User> user = new ArrayList<User>();
            for (User user1 : userList) {
                if (user1.getOnl().equals("on")) {
                    User temp = new User();
                    temp.setAddress(user1.getAddress());
                    temp.setConumber(user1.getConumber());
                    temp.setEmail(user1.getEmail());
                    temp.setFirstName(user1.getFirstName());
                    temp.setGender(user1.getGender());
                    temp.setId(user1.getId());
                    temp.setLastName(user1.getLastName());
                    temp.setNic(user1.getNic());
                    temp.setPass(user1.getPass());
                    temp.setState(user1.getState());
                    temp.setPpic(user1.getPpic());
                    user.add(temp);
                }
            }
            String toJson = new Gson().toJson(user);
            resp.getWriter().write(toJson);
        } catch (Exception ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    @RequestMapping(value = "/tbuthuest")
    public void viewAdminsLike(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/upstateu", method = RequestMethod.POST)
    public void registerUser2(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String name = req.getParameter("str");
            String state = req.getParameter("state");

            List<User> seoResalt = userService.advancedUserSearch(name);
            if (!seoResalt.isEmpty()) {
                User user = null;
                for (User user1 : seoResalt) {
                    user = user1;
                }
                user.setState(state);
                boolean addCli = userService.updateUser(user);
                if (addCli) {
                    resp.getWriter().print("ok");
                }
            } else {
                resp.getWriter().print("no");
            }

        } catch (Exception ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
