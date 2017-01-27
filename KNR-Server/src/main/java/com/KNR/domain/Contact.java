package com.KNR.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int ContactId;
	public String Contact;
	
	public int getContactId() {
		return ContactId;
	}
	public void setContactId(int contactId) {
		ContactId = contactId;
	}
	public String getContact() {
		return Contact;
	}
	public void setContact(String Contact) {
		this.Contact = Contact;
	}
}
