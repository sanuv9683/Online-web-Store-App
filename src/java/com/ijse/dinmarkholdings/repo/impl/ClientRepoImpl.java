/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo.impl;

import com.ijse.dinmarkholdings.core.Client;
import com.ijse.dinmarkholdings.repo.ClientRepo;
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
public class ClientRepoImpl implements ClientRepo {

    @Autowired
    private SessionFactory sessionFac;

    private Session getFactory() {
        return sessionFac.getCurrentSession();
    }

    @Override
    public boolean add(Client dto) throws Exception {
        Serializable save = getFactory().save(dto);
        if (save != null) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean merge(Client dto) throws Exception {
        getFactory().merge(dto);
        return true;
    }

    @Override
    public boolean saveUpdate(Client dto) throws Exception {
        getFactory().saveOrUpdate(dto);
        return true;
    }

    @Override
    public boolean delete(int id) throws Exception {
        getFactory().delete(id);
        return true;
    }

    @Override
    public boolean update(Client dto) throws Exception {
        getFactory().update(dto);
        return true;
    }

    @Override
    public Client search(int id) throws Exception {
        Client client = (Client) getFactory().get(Client.class, id);
        return client;
    }

    @Override
    public List<Client> getList() throws Exception {
        List<Client> list = getFactory().createQuery("From Client a").list();
        return list;
    }

    @Override
    public List<Client> advancedSearch(String name) throws Exception {
        List<Client> list = getFactory().createQuery("From Client u where u.nic like '" + name + "%' or u.email like '" + name + "%' or u.id like '" + name + "%'").list();
        return list;
    }

    @Override
    public Client searchForLogin(String email, String pass) throws Exception {
        List<Client> list = getFactory().createQuery("From Client a where a.email='" + email + "' and a.pass='" + pass + "'").list();
        Client temp = null;
        for (Client cli : list) {
            temp = cli;
        }
        return temp;
    }

    @Override
    public List<Client> getListA(String query) throws Exception {
        List<Client> list = getFactory().createQuery(query).list();
        return list;
    }

    @Override
    public void flush() throws Exception {
        getFactory().flush();
    }

}
