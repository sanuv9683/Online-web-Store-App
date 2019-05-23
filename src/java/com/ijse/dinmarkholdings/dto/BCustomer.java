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
public class BCustomer {

    private String cname;
    private int pro;
    private double tottax;
    private double income;

    public BCustomer() {
    }

    public BCustomer(String cname, int pro, double tottax, double income) {
        this.cname = cname;
        this.pro = pro;
        this.tottax = tottax;
        this.income = income;
    }

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
     * @return the pro
     */
    public int getPro() {
        return pro;
    }

    /**
     * @param pro the pro to set
     */
    public void setPro(int pro) {
        this.pro = pro;
    }

    /**
     * @return the tottax
     */
    public double getTottax() {
        return tottax;
    }

    /**
     * @param tottax the tottax to set
     */
    public void setTottax(double tottax) {
        this.tottax = tottax;
    }

    /**
     * @return the income
     */
    public double getIncome() {
        return income;
    }

    /**
     * @param income the income to set
     */
    public void setIncome(double income) {
        this.income = income;
    }

    
    
}
