package com.KNR.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class RiceMill {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int riceMillId;
	public String riceMillRegNum;
	public String name;
	public String address;
    public String city;
    public String state;
    public String zipCode;
    public String ownerName;
    
    @ManyToOne(cascade= CascadeType.ALL)
	@JoinColumn(name="PRIMARY_CONTACT")
    public Contact primaryContact;
    
    @ManyToOne(cascade= CascadeType.ALL)
	@JoinColumn(name="SECONDARY_CONTACT")
    public Contact secondaryContact;
    
    public String activeFl;
    
	public int getRiceMillId() {
		return riceMillId;
	}
	public void setRiceMillId(int riceMillId) {
		this.riceMillId = riceMillId;
	}
	public String getRiceMillRegNum() {
		return riceMillRegNum;
	}
	public void setRiceMillRegNum(String riceMillRegNum) {
		this.riceMillRegNum = riceMillRegNum;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	
	public Contact getPrimaryContact() {
		return primaryContact;
	}
	public void setPrimaryContact(Contact primaryContact) {
		this.primaryContact = primaryContact;
	}
	
	public Contact getSecondaryContact() {
		return secondaryContact;
	}
	public void setSecondaryContact(Contact secondaryContact) {
		this.secondaryContact = secondaryContact;
	}
	public String getActiveFl() {
		return activeFl;
	}
	public void setActiveFl(String activeFl) {
		this.activeFl = activeFl;
	}
    
    

}