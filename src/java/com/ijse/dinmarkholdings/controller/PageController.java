/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.controller;

import com.ijse.dinmarkholdings.other.XmlUrl;
import com.ijse.dinmarkholdings.other.XmlUrlSet;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 *
 * @author Sanu
 */
@Controller
public class PageController {

    @RequestMapping("*")
    public String hello() {
        return "web";
    }

    @RequestMapping(value = "/about")
    public String about() {
        return "about";
    }

    @RequestMapping(value = "/addpro")
    public String addPRO() {
        return "addprod";
    }

    @RequestMapping(value = "/adm")
    public String viewAdminndex() {
        return "admindash";
    }

    @RequestMapping(value = "/admset")
    public String viewAdminndexs() {
        return "admsettings";
    }

    @RequestMapping(value = "/canorder")
    public String viewOrderForm() {
        return "canceledorders";
    }

    @RequestMapping(value = "/cmporders")
    public String viewOrderForm5() {
        return "completedorders";
    }

    @RequestMapping(value = "/contaa")
    public String complete() {
        return "contact";
    }

    @RequestMapping(value = "/index")
    public String viewIndex() {
        return "index";
    }

    @RequestMapping(value = "/ongoing")
    public String viewOrder1() {
        return "ongoingorder";
    }

    @RequestMapping(value = "/addorder")
    public String viewOrder2() {
        return "orderadd";
    }

    @RequestMapping(value = "/allorders")
    public String viewOrder7() {
        return "ordermanageall";
    }

    @RequestMapping(value = "/pendingorder")
    public String viewOrder4() {
        return "pendingorder";
    }

    @RequestMapping(value = "/profit")
    public String profi() {
        return "portfolio";
    }

    @RequestMapping(value = "/pricing")
    public String profid() {
        return "pricing";
    }

    @RequestMapping(value = "/repocust")
    public String viewremportForm() {
        return "repocust";
    }

    @RequestMapping(value = "/repoorder")
    public String viewremportForm2() {
        return "repoorder";
    }

    @RequestMapping(value = "/repopro")
    public String viewremportForm3() {
        return "repoprod";
    }

    @RequestMapping(value = "/repousr")
    public String viewremportForm4() {
        return "repouser";
    }

    @RequestMapping(value = "/returnorder")
    public String viewOrder5() {
        return "returnedorder";
    }

    @RequestMapping(value = "/searchorder")
    public String viewOrder6() {
        return "searchorder";
    }

    @RequestMapping(value = "/service")
    public String service() {
        return "services";
    }

    @RequestMapping(value = "/setting")
    public String viewSettings() {
        return "settings";
    }

    @RequestMapping(value = "/submitorders")
    public String viewOrder8() {
        return "submitedorders";
    }

    @RequestMapping(value = "/updatepro")
    public String updatepro() {
        return "updateprod";
    }

    @RequestMapping(value = "/user")
    public String viewUserIndex() {
        return "userdash";
    }

    @RequestMapping(value = "/viewpro")
    public String viewUserIsndex() {
        return "viewprod";
    }

    @RequestMapping(value = "/web")
    public String viewSetdtings() {
        return "web";
    }

    @RequestMapping(value = "/trep")
    public String treo() {
        return "repotoday";
    }

    @RequestMapping(value = "/mrep")
    public String mrep() {
        return "repomon";
    }

    @RequestMapping(value = "/sitemap.xml", method = RequestMethod.GET)
    @ResponseBody
    public XmlUrlSet main() {
        XmlUrlSet xmlUrlSet = new XmlUrlSet();
        create(xmlUrlSet, "", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/web", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/about", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/service", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/pricing", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/profit", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/contaa", XmlUrl.Priority.HIGH);
        create(xmlUrlSet, "/index", XmlUrl.Priority.HIGH);
        return xmlUrlSet;
    }

    private void create(XmlUrlSet xmlUrlSet, String link, XmlUrl.Priority priority) {
        xmlUrlSet.addUrl(new XmlUrl("http://www.dinmarkholdings.com" + link, priority));
    }

}
