/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.core.Product;
import com.ijse.dinmarkholdings.service.ProductService;
import com.google.gson.Gson;
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
public class ProductController {

    @Autowired
    private ProductService proService;

    @RequestMapping(value = "/addProduct", method = RequestMethod.POST)
    public void registerProduct(@RequestParam(value = "pbaner") MultipartFile banner, HttpServletRequest req, HttpServletResponse resp) {
        try {
            String realPath = req.getServletContext().getRealPath("/resources/images");
            String originalFilename = banner.getOriginalFilename();
            String rrPath = realPath + File.separator + originalFilename;
            File out = new File(rrPath);
            out.createNewFile();
            FileOutputStream outS = new FileOutputStream(out);
            InputStream inputStream = banner.getInputStream();
            int read = 0;
            byte[] buffer = new byte[1024];
            while ((read = inputStream.read(buffer, 0, buffer.length)) != -1) {
                outS.write(buffer, 0, buffer.length);
            }

            String pname = req.getParameter("pname");
            String des1 = req.getParameter("pdes");
            String des2 = req.getParameter("pdes1");
            String option = req.getParameter("seleopt");

            double price = Double.parseDouble(req.getParameter("pprice"));
            double tax = Double.parseDouble(req.getParameter("ptax"));

            Product p = new Product();
            p.setDescription1(des1);
            p.setDescription2(des2);
            p.setPbanner(banner.getOriginalFilename());
            p.setPrice(price);
            p.setProductName(pname);
            p.setTax(tax);
            p.setWebsite(option);
            p.setStatus("available");

            List<Product> resa = proService.advancedProductSearch(pname);
            if (resa.isEmpty()) {
                boolean addProduct = proService.addProduct(p);
                if (addProduct) {
                    resp.getWriter().print("ok");
                } else {
                    resp.getWriter().print("no");
                }
            } else {
                resp.getWriter().print("no");
            }

        } catch (IOException ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    @RequestMapping(value = "/getAllProducts")
    public void updateProduct(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            List<Product> productList = proService.getProductList();
            ArrayList<Product> allP = new ArrayList<Product>();
            if (!productList.isEmpty()) {
                for (Product product : productList) {
                    Product temp = new Product();
                    temp.setDescription1(product.getDescription1());
                    temp.setDescription2(product.getDescription2());
                    temp.setPbanner(product.getPbanner());
                    temp.setPrice(product.getPrice());
                    temp.setProductName(product.getProductName());
                    temp.setTax(product.getTax());
                    temp.setId(product.getId());
                    temp.setStatus(product.getStatus());
                    temp.setWebsite(product.getWebsite());
                    allP.add(temp);
                }
                String toJson = new Gson().toJson(allP);
                resp.getWriter().write(toJson);
            }

        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/seoProd")
    public void deleteProduct(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.setContentType("application/json");
            int id = Integer.parseInt(req.getParameter("id"));
            Product searchProduct = proService.searchProduct(id);
            Product temp = new Product();
            temp.setDescription1(searchProduct.getDescription1());
            temp.setDescription2(searchProduct.getDescription2());
            temp.setPbanner(searchProduct.getPbanner());
            temp.setPrice(searchProduct.getPrice());
            temp.setProductName(searchProduct.getProductName());
            temp.setTax(searchProduct.getTax());
            temp.setId(searchProduct.getId());
            temp.setWebsite(searchProduct.getWebsite());

            String toJson = new Gson().toJson(temp);
            resp.getWriter().write(toJson);
        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/updateProduct")
    public void updateProductd(@RequestParam(value = "pbaner") MultipartFile banner, HttpServletRequest req, HttpServletResponse resp) {
        try {
            String pname = req.getParameter("bpn");
            String pstate = req.getParameter("sdtate");
            String des1 = req.getParameter("prd1");
            String des2 = req.getParameter("prd2");
            String pr = req.getParameter("psse");
            double price = Double.parseDouble(req.getParameter("proce"));
            double tax = Double.parseDouble(req.getParameter("ptax"));
            String option = req.getParameter("option");
            Product p=null;
            List<Product> advancedProductSearch = proService.advancedProductSearch(pr);
            if (!advancedProductSearch.isEmpty()) {
                for (Product product : advancedProductSearch) {
                    p=product;
                }
                
                String realPath = req.getServletContext().getRealPath("/resources/images");
                String originalFilename = banner.getOriginalFilename();
                String rrPath = realPath + File.separator + originalFilename;
                File out = new File(rrPath);
                out.createNewFile();
                FileOutputStream outS = new FileOutputStream(out);
                InputStream inputStream = banner.getInputStream();
                int read = 0;
                byte[] buffer = new byte[1024];
                while ((read = inputStream.read(buffer, 0, buffer.length)) != -1) {
                    outS.write(buffer, 0, buffer.length);
                }

                p.setDescription1(des1);
                p.setDescription2(des2);
                p.setPbanner(banner.getOriginalFilename());
                p.setPrice(price);
                p.setProductName(pname);
                p.setTax(tax);
                p.setStatus(pstate);
                boolean addProduct = proService.updateProduct(p);
                if (addProduct) {
                    resp.getWriter().print("ok");
                } else {
                    resp.getWriter().print("no");
                }

            } else {
                resp.getWriter().print("no");
            }

        } catch (IOException ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/serByNname")
    public void searchByName(HttpServletRequest req, HttpServletResponse resp) {
        try {
            String parameter = req.getParameter("name");
            List<Product> advancedProductSearch = proService.advancedProductSearch(parameter);
            if (!advancedProductSearch.isEmpty()) {
                Product te = null;
                for (Product product : advancedProductSearch) {
                    te = product;
                }
                Product temp = new Product();
                temp.setDescription1(te.getDescription1());
                temp.setDescription2(te.getDescription2());
                temp.setPbanner(te.getPbanner());
                temp.setPrice(te.getPrice());
                temp.setProductName(te.getProductName());
                temp.setTax(te.getTax());
                temp.setId(te.getId());
                temp.setStatus(te.getStatus());
                temp.setWebsite(te.getWebsite());

                String toJson = new Gson().toJson(temp);
                resp.getWriter().write(toJson);
            }

        } catch (Exception ex) {
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/repoProd")
    public void viewAllProducts(HttpServletRequest req, HttpServletResponse resp) {
         try {
            List<Product> clientList = proService.getProductList();
            File reportFile = new File(req.getServletContext().getRealPath("/resources/reports/budgetlanka-prod.jasper"));
            Map parameters = new HashMap();
            parameters.put("total",clientList.size() );
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

    @RequestMapping(value = "/prosum")
    public void viewProductsLike(HttpServletRequest req, HttpServletResponse resp) {
        
    }
}
