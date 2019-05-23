/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.Product;
import com.ijse.dinmarkholdings.repo.ProductRepo;
import com.ijse.dinmarkholdings.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Sanu
 */
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepo repo;

    @Override
    public boolean addProduct(Product dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergeProduct(Product dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdateProduct(Product dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deleteProduct(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updateProduct(Product dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public Product searchProduct(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<Product> getProductList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<Product> advancedProductSearch(String name) throws Exception {
        return repo.advancedSearch(name);
    }

    @Override
    public List<Product> getProductListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushProduct() throws Exception {
        repo.flush();
    }

}
