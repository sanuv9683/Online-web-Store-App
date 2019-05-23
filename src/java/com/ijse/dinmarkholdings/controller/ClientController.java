/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.core.Client;
import com.ijse.dinmarkholdings.core.Orders;
import com.ijse.dinmarkholdings.service.ClientService;
import com.ijse.dinmarkholdings.service.OrderService;
import com.google.gson.Gson;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Sanu
 */
@Controller
public class ClientController {

    @Autowired
    private ClientService clinetServei;

    @Autowired
    private OrderService orderServe;

    @RequestMapping(value = "/regClient")
    public String registerClient(HttpServletRequest req, HttpServletResponse resp) {
        try {
            Client newCli = new Client();
            newCli.setAddress("Galle");
            newCli.setConumber("0770516653");
            newCli.setEmail("sanu@gmail.com");
            newCli.setFirstName("Sanu");
            newCli.setLastName("Vithanage");
            newCli.setNic("962160077v");
            newCli.setCity("");
            boolean addCli = clinetServei.addClient(newCli);
            if (addCli) {
                return "adminDash";
            }

        } catch (Exception ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "index";
    }

    @RequestMapping(value = "/bestCus")
    public void updateClient(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            ArrayList<Client> sortArray = new ArrayList<>();
            List<Client> arrayList = new ArrayList<Client>();
            Map<Integer, Client> mm = new TreeMap<Integer, Client>();
            List<Client> clientList = clinetServei.getClientList();
            if (!clientList.isEmpty()) {
                for (Client client : clientList) {
                    Set<Orders> orders = client.getOrders();
                    int size = orders.size();
                    mm.put(size, client);
                }
                for (Map.Entry<Integer, Client> entry : mm.entrySet()) {
                    int key = entry.getKey();
                    Client cli = entry.getValue();
//                resp.getWriter().print(key + " => " + cli.getFirstName());
                    Client tem = new Client();
                    tem.setAddress(cli.getAddress());
                    tem.setCity(cli.getCity());
                    tem.setComment(cli.getComment());
                    tem.setConumber(cli.getConumber());
                    tem.setCountry(cli.getCountry());
                    tem.setEmail(cli.getEmail());
                    tem.setFirstName(cli.getFirstName());
                    tem.setId(cli.getId());
                    tem.setLastName(cli.getLastName());
                    tem.setNic(cli.getNic());
                    tem.setPdf(cli.getPdf());
                    arrayList.add(tem);
                }
                for (int i = arrayList.size() - 1; i >= 0; i--) {
                    Client get = arrayList.get(i);
                    sortArray.add(get);
                }
                String toJson = new Gson().toJson(sortArray);
                resp.getWriter().write(toJson);
            }

        } catch (Exception ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/custReport")
    public void deleteClient(HttpServletRequest req, HttpServletResponse resp) {
        try {
            List<Client> clientList = clinetServei.getClientList();
            File reportFile = new File(req.getServletContext().getRealPath("/resources/reports/budgetlanka-cus.jasper"));
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

    @RequestMapping(value = "/tdesgdrt")
    public void searchClientFromID(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/tevdvrst")
    public void searchClientFromQuery(HttpServletRequest req, HttpServletResponse resp) {

    }

    @RequestMapping(value = "/getAllClients")
    public void viewAllClients(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            ArrayList<Client> lista = new ArrayList<Client>();
            List<Client> clientList = clinetServei.getClientList();
            if (!clientList.isEmpty()) {
                for (Client client : clientList) {
                    Client temp = new Client();
                    temp.setAddress(client.getAddress());
                    temp.setCity(client.getCity());
                    temp.setComment(client.getComment());
                    temp.setConumber(client.getConumber());
                    temp.setCountry(client.getCountry());
                    temp.setEmail(client.getEmail());
                    temp.setFirstName(client.getFirstName());
                    temp.setId(client.getId());
                    temp.setLastName(client.getLastName());
                    temp.setNic(client.getNic());
                    temp.setPdf(client.getPdf());
                    lista.add(temp);
                }
                String toJson = new Gson().toJson(lista);
                resp.getWriter().write(toJson);
            }

        } catch (Exception ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/searchClient")
    public void searchClient(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String email = req.getParameter("email");
            resp.setContentType("application/json");
            Client cc = null;
            List<Client> clientList = clinetServei.advancedClientSearch(email);
            if (!clientList.isEmpty()) {
                for (Client client : clientList) {
                    cc = client;

                }
                Client temp = new Client();
                temp.setAddress(cc.getAddress());
                temp.setCity(cc.getCity());
                temp.setComment(cc.getComment());
                temp.setConumber(cc.getConumber());
                temp.setCountry(cc.getCountry());
                temp.setEmail(cc.getEmail());
                temp.setFirstName(cc.getFirstName());
                temp.setId(cc.getId());
                temp.setLastName(cc.getLastName());
                temp.setNic(cc.getNic());
                temp.setPdf(cc.getPdf());
                String toJson = new Gson().toJson(temp);
                resp.getWriter().write(toJson);
            }

        } catch (Exception ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/sendmmmm")
    public void viewClientsLike(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String recipient = "+441234567890";
            String message = " Greetings from Mr. Gupta! Have a nice day!";
            String username = "admin";
            String password = "abc123";
            String originator = "+440987654321";

            String requestUrl = "http://127.0.0.1:9501/api?action=sendmessage&"
                    + "username=" + URLEncoder.encode(username, "UTF-8")
                    + "&password=" + URLEncoder.encode(password, "UTF-8")
                    + "&recipient=" + URLEncoder.encode(recipient, "UTF-8")
                    + "&messagetype=SMS:TEXT"
                    + "&messagedata=" + URLEncoder.encode(message, "UTF-8")
                    + "&originator=" + URLEncoder.encode(originator, "UTF-8")
                    + "&serviceprovider=GSMModem1"
                    + "&responseformat=html";

            URL url = new URL(requestUrl);
            HttpURLConnection uc = (HttpURLConnection) url.openConnection();

            System.out.println(uc.getResponseMessage());

            uc.disconnect();
        } catch (MalformedURLException ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(ClientController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
