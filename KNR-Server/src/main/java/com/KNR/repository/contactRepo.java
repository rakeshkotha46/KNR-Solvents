package com.KNR.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.KNR.domain.Contact;

public interface contactRepo extends JpaRepository<Contact, String>  {

}
