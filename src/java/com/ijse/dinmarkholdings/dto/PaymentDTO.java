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

public class PaymentDTO extends SuperCore {

    private int id;
    private String date;
    private double amount;
    private String status;
    private double penndingAmount;
    private String comment;
    private OrdersDTO order;

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
     * @return the amount
     */
    public double getAmount() {
        return amount;
    }

    /**
     * @param amount the amount to set
     */
    public void setAmount(double amount) {
        this.amount = amount;
    }

    /**
     * @return the order
     */
    public OrdersDTO getOrder() {
        return order;
    }

    /**
     * @param order the order to set
     */
    public void setOrder(OrdersDTO order) {
        this.order = order;
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
     * @return the penndingAmount
     */
    public double getPenndingAmount() {
        return penndingAmount;
    }

    /**
     * @param penndingAmount the penndingAmount to set
     */
    public void setPenndingAmount(double penndingAmount) {
        this.penndingAmount = penndingAmount;
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

}
