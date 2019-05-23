/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.dto;

/**
 *
 * @author Sanu
 */
public class Notification {

    private int orders;
    private int product;
    private int clients;
    private int staff;
    private int procceing;
    private int pendingorders;
    private int submitO;
    private int canceldO;
    private int completd;
    private int retured;

    public Notification() {
    }


    public Notification(int orders, int product, int clients, int staff, int procceing, int pendingorders, int submitO, int canceldO, int completd, int retured) {
        this.orders = orders;
        this.product = product;
        this.clients = clients;
        this.staff = staff;
        this.procceing = procceing;
        this.pendingorders = pendingorders;
        this.submitO = submitO;
        this.canceldO = canceldO;
        this.completd = completd;
        this.retured = retured;
    }

    
    /**
     * @return the orders
     */
    public int getOrders() {
        return orders;
    }

    /**
     * @param orders the orders to set
     */
    public void setOrders(int orders) {
        this.orders = orders;
    }

    /**
     * @return the product
     */
    public int getProduct() {
        return product;
    }

    /**
     * @param product the product to set
     */
    public void setProduct(int product) {
        this.product = product;
    }

    /**
     * @return the clients
     */
    public int getClients() {
        return clients;
    }

    /**
     * @param clients the clients to set
     */
    public void setClients(int clients) {
        this.clients = clients;
    }

    /**
     * @return the staff
     */
    public int getStaff() {
        return staff;
    }

    /**
     * @param staff the staff to set
     */
    public void setStaff(int staff) {
        this.staff = staff;
    }

    /**
     * @return the pendingorders
     */
    public int getPendingorders() {
        return pendingorders;
    }

    /**
     * @param pendingorders the pendingorders to set
     */
    public void setPendingorders(int pendingorders) {
        this.pendingorders = pendingorders;
    }

    /**
     * @return the submitO
     */
    public int getSubmitO() {
        return submitO;
    }

    /**
     * @param submitO the submitO to set
     */
    public void setSubmitO(int submitO) {
        this.submitO = submitO;
    }

    /**
     * @return the canceldO
     */
    public int getCanceldO() {
        return canceldO;
    }

    /**
     * @param canceldO the canceldO to set
     */
    public void setCanceldO(int canceldO) {
        this.canceldO = canceldO;
    }

    /**
     * @return the procceing
     */
    public int getProcceing() {
        return procceing;
    }

    /**
     * @param procceing the procceing to set
     */
    public void setProcceing(int procceing) {
        this.procceing = procceing;
    }

    /**
     * @return the completd
     */
    public int getCompletd() {
        return completd;
    }

    /**
     * @param completd the completd to set
     */
    public void setCompletd(int completd) {
        this.completd = completd;
    }

    /**
     * @return the retured
     */
    public int getRetured() {
        return retured;
    }

    /**
     * @param retured the retured to set
     */
    public void setRetured(int retured) {
        this.retured = retured;
    }

}
