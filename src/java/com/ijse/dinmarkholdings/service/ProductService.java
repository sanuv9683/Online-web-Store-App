/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service;

import com.ijse.dinmarkholdings.core.Product;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface ProductService {
    public boolean addProduct(Product dto) throws Exception;
    public boolean mergeProduct(Product dto) throws Exception;
    public boolean saveUpdateProduct(Product dto)throws Exception;
    public boolean deleteProduct(int id) throws Exception;
    public boolean updateProduct(Product dto) throws Exception;
    public Product searchProduct(int id) throws Exception;
    public List<Product> getProductList() throws Exception; 
    public List<Product> advancedProductSearch(String name) throws Exception; 
    public List<Product> getProductListA(String query) throws Exception; 
    public void flushProduct()throws Exception;
}
