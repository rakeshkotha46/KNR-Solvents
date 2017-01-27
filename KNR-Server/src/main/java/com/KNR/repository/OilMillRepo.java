package com.KNR.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.KNR.domain.OilMill;

@Repository
public interface OilMillRepo extends JpaRepository<OilMill, Integer> {
	
}
