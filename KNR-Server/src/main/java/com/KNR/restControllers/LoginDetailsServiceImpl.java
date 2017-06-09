package com.KNR.restControllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.KNR.repository.LoginDetailsRepository;

@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {
	
	@Autowired 
	public LoginDetailsRepository loginDetailsRepository;
	
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, String> fetchLoginDetails() {
		
	
	return (Map<String, String>) loginDetailsRepository.findAll();
		
	}
	
	
}
