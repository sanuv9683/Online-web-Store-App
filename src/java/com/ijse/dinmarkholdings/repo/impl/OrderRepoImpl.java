/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo.impl;

import com.ijse.dinmarkholdings.core.Orders;
import com.ijse.dinmarkholdings.repo.OrderRepo;
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
public class OrderRepoImpl implements OrderRepo {

    @Autowired
    private SessionFactory sessionFac;

    private Session getFactory() {
        return sessionFac.getCurrentSession();
    }

    @Override
    public boolean add(Orders dto) throws Exception {
        Serializable save = getFactory().save(dto);
        if (save != null) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean merge(Orders dto) throws Exception {
        getFactory().merge(dto);
        return true;
    }

    @Override
    public boolean saveUpdate(Orders dto) throws Exception {
        getFactory().saveOrUpdate(dto);
        return true;
    }

    @Override
    public boolean delete(int id) throws Exception {
        getFactory().delete(id);
        return true;
    }

    @Override
    public boolean update(Orders dto) throws Exception {
        getFactory().update(dto);
        return true;
    }

    @Override
    public Orders search(int id) throws Exception {
        Orders order = (Orders) getFactory().get(Orders.class, id);
        return order;
    }

    @Override
    public List<Orders> getList() throws Exception {
        List<Orders> list = getFactory().createQuery("From Orders a").list();
        return list;
    }

    @Override
    public List<Orders> advancedSearch(String name) throws Exception {
        List<Orders> list = getFactory().createQuery("From Orders u where u.firstName like '" + name + "%' or u.email like '" + name + "%' or u.lastName like '" + name + "%'").list();
        return list;
    }

    @Override
    public List<Orders> getListA(String query) throws Exception {
        List<Orders> list = getFactory().createQuery(query).list();
        return list;
    }

    @Override
    public void flush() throws Exception {
        getFactory().flush();
    }

}
