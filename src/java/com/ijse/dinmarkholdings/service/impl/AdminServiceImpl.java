/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.Admin;
import com.ijse.dinmarkholdings.repo.AdminRepo;
import com.ijse.dinmarkholdings.service.AdminService;
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
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo repo;

    @Override
    public boolean addAdmin(Admin dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergeAdmin(Admin dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdateAdmin(Admin dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deleteAdmin(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updateAdmin(Admin dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public Admin searchAdmin(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<Admin> getAdminList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<Admin> advancedAdminSearch(String name) throws Exception {
        return repo.advancedSearch(name);
    }

    @Override
    public Admin searchAdminForLogin(String email, String pass) throws Exception {
        return repo.searchForLogin(email, pass);
    }

    @Override
    public List<Admin> getAdminListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushAdmin() throws Exception {
        repo.flush();
    }

}
