/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.User;
import com.ijse.dinmarkholdings.repo.UserRepo;
import com.ijse.dinmarkholdings.service.UserService;
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
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo repo;

    @Override
    public boolean addUser(User dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergeUser(User dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdateUser(User dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deleteUser(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updateUser(User dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public User searchUser(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<User> getUserList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<User> advancedUserSearch(String name) throws Exception {
        return repo.advancedSearch(name);
    }

    @Override
    public User searchUserForLogin(String email, String pass) throws Exception {
        return repo.searchForLogin(email, pass);
    }

    @Override
    public List<User> getUserListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushUser() throws Exception {
        repo.flush();
    }

}
