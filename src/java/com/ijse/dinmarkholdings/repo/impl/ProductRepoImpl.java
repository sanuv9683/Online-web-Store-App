/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo.impl;

import com.ijse.dinmarkholdings.core.Product;
import com.ijse.dinmarkholdings.repo.ProductRepo;
import java.io.Serializable;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Sanu
 */
@Repository
public class ProductRepoImpl implements ProductRepo {

    @Autowired
    private SessionFactory sessionFac;

    private Session getFactory() {
        return sessionFac.getCurrentSession();
    }

    @Override
    public boolean add(Product dto) throws Exception {
        Serializable save = getFactory().save(dto);
        if (save != null) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean merge(Product dto) throws Exception {
        getFactory().merge(dto);
        return true;
    }

    @Override
    public boolean saveUpdate(Product dto) throws Exception {
        getFactory().saveOrUpdate(dto);
        return true;
    }

    @Override
    public boolean delete(int id) throws Exception {
        getFactory().delete(id);
        return true;
    }

    @Override
    public boolean update(Product dto) throws Exception {
        getFactory().update(dto);
        return true;
    }

    @Override
    public Product search(int id) throws Exception {
        Product product = (Product) getFactory().get(Product.class, id);
        return product;
    }

    @Override
    public List<Product> getList() throws Exception {
        List<Product> list = getFactory().createQuery("From Product a").list();
        return list;
    }

    @Override
    public List<Product> advancedSearch(String name) throws Exception {
        List<Product> list = getFactory().createQuery("From Product u where u.productName like '" + name + "%' or u.price like '" + name + "%'").list();
        return list;
    }

    @Override
    public List<Product> getListA(String query) throws Exception {
        List<Product> list = getFactory().createQuery(query).list();
        return list;
    }

    @Override
    public void flush() throws Exception {
        getFactory().flush();
    }

}
