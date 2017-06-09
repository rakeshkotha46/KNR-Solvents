package com.KNR.restControllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.KNR.domain.Contact;
import com.KNR.domain.OilMill;
import com.KNR.domain.Registration;
import com.KNR.domain.RiceMill;
import com.KNR.repository.OilMillRepo;
import com.KNR.repository.RegistrationRepo;
import com.KNR.repository.RiceMillRepo;
import com.KNR.repository.contactRepo;

@RestController
public class TestRestController {
	
	@Autowired
	private RiceMillRepo riceMillRepo;
	@Autowired
    private OilMillRepo oilMillRepo;
	@Autowired
	private contactRepo ContactRepo;
	@Autowired
	private RegistrationRepo registrationRepo;
	
	@RequestMapping(method = RequestMethod.GET, value = "/getAllRiceMills/{registrationId}", produces= "application/json")
	public List<RiceMill> getAllRiceMills(@PathVariable int registrationId) {
		List<RiceMill> data = riceMillRepo.findRiceMillsByRegId(registrationRepo.findOne(registrationId));
		/*System.out.println(data.get(1).getAddress());*/
		return data;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/searchRiceMill/{searchString}", produces= "application/json")
	public List<RiceMill> searchRiceMill(@PathVariable String searchString) {
		List<RiceMill> data = riceMillRepo.search(searchString);
		//System.out.println(data.get(1).getAddress());
		return data;
	}
	
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
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
		//riceMill.setPrimaryContact(data.get("primaryContact"));
		riceMill.setRiceMillRegNum(data.get("riceMillRegNum"));
		//riceMill.setSecondaryContact(data.get("secondaryContact"));
		riceMill.setState(data.get("state"));
		riceMill.setZipCode(data.get("zipCode"));
		riceMillRepo.save(riceMill);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/deleteRiceMillDetails/{riceMillId}", produces= "application/json")
	public void deleteRiceMillDetails(@PathVariable int riceMillId) {
		riceMillRepo.deleteRiceMill(riceMillId);
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/addCompany/{registrationId}", produces= "application/json")
	public void addCompany(@RequestBody Map<String,String> data, @PathVariable int registrationId) {
		
		Contact contact1 = new Contact();
		contact1.setContact(data.get("primaryContact"));
		
		Contact contact2 = new Contact();
		contact2.setContact(data.get("secondaryContact"));
				
		RiceMill riceMill = new RiceMill();
		riceMill.setActiveFl(data.get("activeFl"));
		riceMill.setAddress(data.get("address"));
		riceMill.setCity(data.get("city"));
		riceMill.setName(data.get("name"));
		riceMill.setOwnerName(data.get("ownerName"));
		riceMill.setPrimaryContact(contact1);
		riceMill.setRiceMillRegNum(data.get("riceMillRegNum"));
		riceMill.setSecondaryContact(contact2);
		riceMill.setState(data.get("state"));
		riceMill.setZipCode(data.get("zipCode"));
		riceMill.setCustomerId(registrationRepo.findOne(registrationId));
		riceMillRepo.save(riceMill);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/addOilMill", produces= "application/json")
	public void addOilMill(@RequestBody Map<String,String> data) {
		Contact contact1 = new Contact();
		contact1.setContact(data.get("primaryContact"));
		
		Contact contact2 = new Contact();
		contact2.setContact(data.get("secondaryContact"));
		
		OilMill oilMill = new OilMill();
		oilMill.setActiveFl(data.get("activeFl"));
		oilMill.setAddress(data.get("address"));
		oilMill.setCity(data.get("city"));
		oilMill.setOilMillName(data.get("name"));     
		oilMill.setOwnerName(data.get("ownerName"));
		oilMill.setOilMillRegNum(data.get("OilMillRegNum"));
		oilMill.setState(data.get("state"));
		oilMill.setZipCode(data.get("zipCode"));
		oilMill.setPrimaryContact(contact1);
		oilMill.setSecondaryContact(contact2);
		oilMillRepo.save(oilMill);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/addRegistration", produces= "application/json")
	public void Registration(@RequestBody Map<String,String> data){
		Registration registration=new Registration();
		registration.setFirstName(data.get("firstName"));
		registration.setLastName(data.get("lastName"));
		registration.setUserName(data.get("userName"));
		registration.setPassword(data.get("password"));
		registrationRepo.save(registration);
		
		
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getRegistrationDetails/{username}", produces= "application/json")
	public Registration getRegistrationDetails(@PathVariable String username) {
		Registration data = registrationRepo.getRegistartion(username);
		return data;
	}
	
}
