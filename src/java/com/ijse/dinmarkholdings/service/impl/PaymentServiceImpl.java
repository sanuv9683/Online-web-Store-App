/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.Payment;
import com.ijse.dinmarkholdings.repo.PaymentRepo;
import com.ijse.dinmarkholdings.service.PaymentService;
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
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepo repo;

    @Override
    public boolean addPayment(Payment dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergePayment(Payment dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdatePayment(Payment dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deletePayment(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updatePayment(Payment dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public Payment searchPayment(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<Payment> getPaymentList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<Payment> advancedPaymentSearch(String name) throws Exception {
        return repo.advancedSearch(name);
    }

    @Override
    public List<Payment> getPaymentListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushPayment() throws Exception {
        repo.flush();
    }

}
