package com.KNR.restControllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.KNR.domain.RiceMill;
import com.KNR.repository.RiceMillRepo;

@RestController
public class TestRestController {
	@Autowired
	private RiceMillRepo riceMillRepo;

	@RequestMapping(method = RequestMethod.GET, value = "/getAllRiceMills", produces= "application/json")
	public List<RiceMill> getAllRiceMills() {
		List<RiceMill> data = riceMillRepo.findAll();
		/*System.out.println(data.get(1).getAddress());*/
		return data;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/searchRiceMill/{searchString}", produces= "application/json")
	public List<RiceMill> searchRiceMill(@PathVariable String searchString) {
		List<RiceMill> data = riceMillRepo.search(searchString);
		//System.out.println(data.get(1).getAddress());
		return data;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getRiceMillDetails/{riceMillId}", produces= "application/json")
	public RiceMill getRiceMillDetails(@PathVariable int riceMillId) {
		RiceMill data = riceMillRepo.getRiceMill(riceMillId);
		//System.out.println(data.get(1).getAddress());
		return data;
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/updateRiceMillDetails", produces= "application/json")
	public void updateRiceMillDetails(@RequestBody Map<String,String> data) {
		RiceMill riceMill = new RiceMill();
		riceMill.setRiceMillId(Integer.parseInt(data.get("riceMillId")));
		riceMill.setActiveFl(data.get("activeFl"));
		riceMill.setAddress(data.get("address"));
		riceMill.setCity(data.get("city"));
		riceMill.setName(data.get("name"));
		riceMill.setOwnerName(data.get("ownerName"));
		riceMill.setPrimaryContact(data.get("primaryContact"));
		riceMill.setRiceMillRegNum(data.get("riceMillRegNum"));
		riceMill.setSecondaryContact(data.get("secondaryContact"));
		riceMill.setState(data.get("state"));
		riceMill.setZipCode(data.get("zipCode"));
		riceMillRepo.save(riceMill);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/deleteRiceMillDetails/{riceMillId}", produces= "application/json")
	public void deleteRiceMillDetails(@PathVariable int riceMillId) {
		riceMillRepo.deleteRiceMill(riceMillId);
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/addCompany", produces= "application/json")
	public void addCompany(@RequestBody Map<String,String> data) {
		RiceMill riceMill = new RiceMill();
		riceMill.setActiveFl(data.get("activeFl"));
		riceMill.setAddress(data.get("address"));
		riceMill.setCity(data.get("city"));
		riceMill.setName(data.get("name"));
		riceMill.setOwnerName(data.get("ownerName"));
		riceMill.setPrimaryContact(data.get("primaryContact"));
		riceMill.setRiceMillRegNum(data.get("riceMillRegNum"));
		riceMill.setSecondaryContact(data.get("secondaryContact"));
		riceMill.setState(data.get("state"));
		riceMill.setZipCode(data.get("zipCode"));
		riceMillRepo.save(riceMill);
	}
	
}
