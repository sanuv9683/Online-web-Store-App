/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.Orders;
import com.ijse.dinmarkholdings.repo.OrderRepo;
import com.ijse.dinmarkholdings.service.OrderService;
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
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepo repo;

    @Override
    public boolean addOrder(Orders dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergeOrder(Orders dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdateOrder(Orders dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deleteOrder(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updateOrder(Orders dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public Orders searchOrder(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<Orders> getOrderList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<Orders> advancedOrderSearch(String name) throws Exception {
        return repo.getListA(name);
    }

    @Override
    public List<Orders> getOrderListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushOrder() throws Exception {
        repo.flush();
    }
}
