/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.dto;

import java.util.HashSet;
import java.util.Set;

/**
 *
 * @author Sanu
 */
public class ProductDTO extends SuperCore {

    private int id;
    private String productName;
    private String description1;
    private String description2;
    private String pbanner;
    private String status;
    private double price;
    private double tax;
    private String from;
    private Set<OrdersDTO> orders = new HashSet<OrdersDTO>();

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
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
     * @return the price
     */
    public double getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(double price) {
        this.price = price;
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
     * @return the orders
     */
    public Set<OrdersDTO> getOrders() {
        return orders;
    }

    /**
     * @param orders the orders to set
     */
    public void setOrders(Set<OrdersDTO> orders) {
        this.orders = orders;
    }

    /**
     * @return the description1
     */
    public String getDescription1() {
        return description1;
    }

    /**
     * @param description1 the description1 to set
     */
    public void setDescription1(String description1) {
        this.description1 = description1;
    }

    /**
     * @return the description2
     */
    public String getDescription2() {
        return description2;
    }

    /**
     * @param description2 the description2 to set
     */
    public void setDescription2(String description2) {
        this.description2 = description2;
    }

    /**
     * @return the pbanner
     */
    public String getPbanner() {
        return pbanner;
    }

    /**
     * @param pbanner the pbanner to set
     */
    public void setPbanner(String pbanner) {
        this.pbanner = pbanner;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return the from
     */
    public String getFrom() {
        return from;
    }

    /**
     * @param from the from to set
     */
    public void setFrom(String from) {
        this.from = from;
    }

}
