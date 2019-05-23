/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.service;

import com.ijse.dinmarkholdings.core.Client;
import java.util.List;

/**
 *
 * @author Sanu
 */
public interface ClientService {
    public boolean addClient(Client dto) throws Exception;
    public boolean mergeClient(Client dto) throws Exception;
    public boolean saveUpdateClient(Client dto)throws Exception;
    public boolean deleteClient(int id) throws Exception;
    public boolean updateClient(Client dto) throws Exception;
    public Client searchClient(int id) throws Exception;
    public List<Client> getClientList() throws Exception; 
    public List<Client> advancedClientSearch(String name) throws Exception; 
    public Client searchClientForLogin(String email, String pass)throws Exception;
    public List<Client> getClientListA(String query) throws Exception; 
    public void flushClient()throws Exception;
}
