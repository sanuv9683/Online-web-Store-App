/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ijse.dinmarkholdings.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Sanu
 */
@Entity
public class Country extends SuperCore {

    private int id;
    private String countryname;
    private int countryCode;

    /**
     * @return the id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the countryname
     */
    public String getCountryname() {
        return countryname;
    }

    /**
     * @param countryname the countryname to set
     */
    public void setCountryname(String countryname) {
        this.countryname = countryname;
    }

    /**
     * @return the countryCode
     */
    public int getCountryCode() {
        return countryCode;
    }

    /**
     * @param countryCode the countryCode to set
     */
    public void setCountryCode(int countryCode) {
        this.countryCode = countryCode;
    }

}
