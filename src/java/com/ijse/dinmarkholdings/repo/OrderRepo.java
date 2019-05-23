/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo;

import com.ijse.dinmarkholdings.core.Orders;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface OrderRepo {
    public boolean add(Orders dto) throws Exception;
    public boolean merge(Orders dto) throws Exception;
    public boolean saveUpdate(Orders dto)throws Exception;
    public boolean delete(int id) throws Exception;
    public boolean update(Orders dto) throws Exception;
    public Orders search(int id) throws Exception;
    public List<Orders> getList() throws Exception; 
    public List<Orders> advancedSearch(String name) throws Exception; 
    public List<Orders> getListA(String query) throws Exception; 
    public void flush()throws Exception;
}
