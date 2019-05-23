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
public class Preport {
    private String productName;
    private double cost;
    private int qty;
    private double tax;
    private double ttd;
    private double ir;


    public Preport() {
    }



    /**
     * @return the productName
     */
    public String getProductName() {
        return productName;
    }

    /**
     * @param productName the productName to set
     */
    public void setProductName(String productName) {
        this.productName = productName;
    }

    /**
     * @return the cost
     */
    public double getCost() {
        return cost;
    }

    /**
     * @param cost the cost to set
     */
    public void setCost(double cost) {
        this.cost = cost;
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
     * @return the tax
     */
    public double getTax() {
        return tax;
    }

    /**
     * @param tax the tax to set
     */
    public void setTax(double tax) {
        this.tax = tax;
    }

    /**
     * @return the ttd
     */
    public double getTtd() {
        return ttd;
    }

    /**
     * @param ttd the ttd to set
     */
    public void setTtd(double ttd) {
        this.ttd = ttd;
    }

    /**
     * @return the ir
     */
    public double getIr() {
        return ir;
    }

    /**
     * @param ir the ir to set
     */
    public void setIr(double ir) {
        this.ir = ir;
    }
    
    
}
