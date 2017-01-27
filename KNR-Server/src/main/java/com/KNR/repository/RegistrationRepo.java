package com.KNR.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.KNR.domain.OilMill;
import com.KNR.domain.Registration;
import com.KNR.domain.RiceMill;

public interface RegistrationRepo extends JpaRepository<Registration, Integer>{

@Query("select r  from Registration r where r.userName=:username")
public Registration getRegistartion(@Param("username")String username);

	
}
