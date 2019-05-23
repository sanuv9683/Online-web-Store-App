/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service.impl;

import com.ijse.dinmarkholdings.core.Client;
import com.ijse.dinmarkholdings.repo.ClientRepo;
import com.ijse.dinmarkholdings.service.ClientService;
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
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepo repo;

    @Override
    public boolean addClient(Client dto) throws Exception {
        return repo.add(dto);
    }

    @Override
    public boolean mergeClient(Client dto) throws Exception {
        return repo.merge(dto);
    }

    @Override
    public boolean saveUpdateClient(Client dto) throws Exception {
        return repo.saveUpdate(dto);
    }

    @Override
    public boolean deleteClient(int id) throws Exception {
        return repo.delete(id);
    }

    @Override
    public boolean updateClient(Client dto) throws Exception {
        return repo.update(dto);
    }

    @Override
    public Client searchClient(int id) throws Exception {
        return repo.search(id);
    }

    @Override
    public List<Client> getClientList() throws Exception {
        return repo.getList();
    }

    @Override
    public List<Client> advancedClientSearch(String name) throws Exception {
        return repo.advancedSearch(name);
    }

    @Override
    public Client searchClientForLogin(String email, String pass) throws Exception {
        return repo.searchForLogin(email, pass);
    }

    @Override
    public List<Client> getClientListA(String query) throws Exception {
        return repo.getListA(query);
    }

    @Override
    public void flushClient() throws Exception {
        repo.flush();
    }

}
