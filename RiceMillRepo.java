package com.KNR.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.KNR.domain.RiceMill;

@Repository
public interface RiceMillRepo extends JpaRepository<RiceMill, Integer> {
	
	@Query("select r from RiceMill r where r.name like %:searchString%")
	public  List<RiceMill> search(@Param("searchString") String searchString);
	
	@Query("select r  from RiceMill r where r.riceMillId=:riceMillId")
	public RiceMill getRiceMill(@Param("riceMillId")int riceMillId);
	
	@Query("delete from RiceMill r where r.riceMillId=:riceMillId")
	@Transactional
	@Modifying
	public void deleteRiceMill(@Param("riceMillId")int riceMillId);
	
	
}
