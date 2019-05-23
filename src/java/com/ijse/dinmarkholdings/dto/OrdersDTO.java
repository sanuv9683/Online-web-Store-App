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

public class OrdersDTO extends SuperCore {

    private int id;
    private String comment;
    private String pdf;
    private String date;
    private String state;
    private double tax;
    private String from;
    private PaymentDTO payment;
    private ClientDTO client;
    private ProductDTO products;

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
     * @return the payment
     */
    public PaymentDTO getPayment() {
        return payment;
    }

    /**
     * @param payment the payment to set
     */
    public void setPayment(PaymentDTO payment) {
        this.payment = payment;
    }

    /**
     * @return the client
     */
    public ClientDTO getClient() {
        return client;
    }

    /**
     * @param client the client to set
     */
    public void setClient(ClientDTO client) {
        this.client = client;
    }

    /**
     * @return the comment
     */
    public String getComment() {
        return comment;
    }

    /**
     * @param comment the comment to set
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

    /**
     * @return the pdf
     */
    public String getPdf() {
        return pdf;
    }

    /**
     * @param pdf the pdf to set
     */
    public void setPdf(String pdf) {
        this.pdf = pdf;
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
     * @return the state
     */
    public String getState() {
        return state;
    }

    /**
     * @param state the state to set
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * @return the products
     */
    public ProductDTO getProducts() {
        return products;
    }

    /**
     * @param products the products to set
     */
    public void setProducts(ProductDTO products) {
        this.products = products;
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
