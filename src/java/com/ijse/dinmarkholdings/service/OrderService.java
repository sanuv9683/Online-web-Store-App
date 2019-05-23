/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service;

import com.ijse.dinmarkholdings.core.Orders;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface OrderService {
    public boolean addOrder(Orders dto) throws Exception;
    public boolean mergeOrder(Orders dto) throws Exception;
    public boolean saveUpdateOrder(Orders dto)throws Exception;
    public boolean deleteOrder(int id) throws Exception;
    public boolean updateOrder(Orders dto) throws Exception;
    public Orders searchOrder(int id) throws Exception;
    public List<Orders> getOrderList() throws Exception; 
    public List<Orders> advancedOrderSearch(String name) throws Exception; 
    public List<Orders> getOrderListA(String query) throws Exception; 
    public void flushOrder()throws Exception;
}
