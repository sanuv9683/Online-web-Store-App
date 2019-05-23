/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo;

import com.ijse.dinmarkholdings.core.Product;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface ProductRepo {
    public boolean add(Product dto) throws Exception;
    public boolean merge(Product dto) throws Exception;
    public boolean saveUpdate(Product dto)throws Exception;
    public boolean delete(int id) throws Exception;
    public boolean update(Product dto) throws Exception;
    public Product search(int id) throws Exception;
    public List<Product> getList() throws Exception; 
    public List<Product> advancedSearch(String name) throws Exception; 
    public List<Product> getListA(String query) throws Exception; 
    public void flush()throws Exception;
}
