package com.KNR.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.KNR.domain.Registration;
@Repository
public interface LoginDetailsRepository extends JpaRepository<Registration, Integer> {

}
