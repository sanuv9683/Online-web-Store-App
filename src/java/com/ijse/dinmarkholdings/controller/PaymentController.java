/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.core.Payment;
import com.ijse.dinmarkholdings.service.PaymentService;
import com.google.gson.Gson;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.data.JRTableModelDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Sanu
 */
@Controller
public class PaymentController {

    @Autowired
    private PaymentService payService;

    @RequestMapping(value = "/backup")
    public void addPayment(HttpServletRequest req, HttpServletResponse resp) {
        Process p = null;
        try {
            Runtime runtime = Runtime.getRuntime();
            p = runtime.exec("mysqldump -u dinmarkh_root -pushanlac dinmarkh_bldb > /home/budgetla/budgetlanka.com/back.sql");
            InputStream inputStream = p.getInputStream();
            ServletOutputStream strm = resp.getOutputStream();
            byte[] buffer = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                strm.write(buffer, 0, bytesRead);
            }
            inputStream.close();
            strm.close();
            int processComplete = p.waitFor();
            if (processComplete == 0) {
                System.out.println("Backup created successfully!");
            } else {
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/tecfsgst")
    public void updatePayment(HttpServletRequest req, HttpServletResponse resp) {
        try {
            File reportFile = new File(req.getServletContext().getRealPath("/resources/reports/budgetlanka-cus.jasper"));
            Map parameters = new HashMap();
            parameters.put("total", 20);

            byte[] bytes = JasperRunManager.runReportToPdf(reportFile.getPath(), parameters);
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
        }
    }

    @RequestMapping(value = "/gtevsfvfst")
    public void deletePayment(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/tessfvttt")
    public void searchPaymentFromID(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/ggtvfest")
    public void searchPaymentFromQuery(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/getAllPayment")
    public void viewAllPayments(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            List<Payment> paymentList = payService.getPaymentList();
            ArrayList<Payment> pay = new ArrayList<Payment>();
            for (Payment payment : paymentList) {
                Payment p = new Payment();
                p.setAmount(payment.getAmount());
                p.setComment(payment.getComment());
                p.setDate(payment.getDate());
                p.setId(payment.getId());
                p.setPenndingAmount(payment.getPenndingAmount());
                p.setStatus(payment.getStatus());
                pay.add(p);
            }
            String toJson = new Gson().toJson(pay);
            resp.getWriter().write(toJson);
        } catch (Exception ex) {
            Logger.getLogger(PaymentController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/tefvvgdst")
    public void viewPaymentsLike(HttpServletRequest req, HttpServletResponse resp) {

    }
}
