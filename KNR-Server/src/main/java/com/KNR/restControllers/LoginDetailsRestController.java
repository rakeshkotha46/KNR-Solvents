package com.KNR.restControllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginDetailsRestController {
	
	@Autowired 
	public LoginDetailsService loginDetailsService;
	
	@RequestMapping("/loginDetails")
	public Map<String, String> fetchLoginRecords() {
		
		Map<String, String> result = loginDetailsService.fetchLoginDetails();
		return result;
	}
}
