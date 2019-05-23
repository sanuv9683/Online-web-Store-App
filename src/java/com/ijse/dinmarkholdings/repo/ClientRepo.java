/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.repo;

import com.ijse.dinmarkholdings.core.Client;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface ClientRepo {
    public boolean add(Client dto) throws Exception;
    public boolean merge(Client dto) throws Exception;
    public boolean saveUpdate(Client dto)throws Exception;
    public boolean delete(int id) throws Exception;
    public boolean update(Client dto) throws Exception;
    public Client search(int id) throws Exception;
    public List<Client> getList() throws Exception; 
    public List<Client> advancedSearch(String name) throws Exception; 
    public Client searchForLogin(String email, String pass)throws Exception;
    public List<Client> getListA(String query) throws Exception; 
    public void flush()throws Exception;
}
