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
public class Dupayment {
    private String cname;
    private String product;
    private String date;
    private int qty;
    private double ap;
    private double dp;

    /**
     * @return the cname
     */
    public String getCname() {
        return cname;
    }

    /**
     * @param cname the cname to set
     */
    public void setCname(String cname) {
        this.cname = cname;
    }

    /**
     * @return the product
     */
    public String getProduct() {
        return product;
    }

    /**
     * @param product the product to set
     */
    public void setProduct(String product) {
        this.product = product;
    }

    /**
     * @return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * @return the qty
     */
    public int getQty() {
        return qty;
    }

    /**
     * @param qty the qty to set
     */
    public void setQty(int qty) {
        this.qty = qty;
    }

    /**
     * @return the ap
     */
    public double getAp() {
        return ap;
    }

    /**
     * @param ap the ap to set
     */
    public void setAp(double ap) {
        this.ap = ap;
    }

    /**
     * @return the dp
     */
    public double getDp() {
        return dp;
    }

    /**
     * @param dp the dp to set
     */
    public void setDp(double dp) {
        this.dp = dp;
    }
    
     
   
}
