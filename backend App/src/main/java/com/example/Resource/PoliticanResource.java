package com.example.Resource;

import com.example.mapper.PolicyMapper;
import com.example.mapper.PoliticianMapper;
import com.example.mapper.ProfileMapper;
import com.example.model.Policy;
import com.example.model.Politician;

import com.example.model.Profile;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000/")
@AllArgsConstructor
@RestController
@RequestMapping(value = "/politics")
public class PoliticanResource {
	PoliticianMapper politicianMapper;
    ProfileMapper profileMapper;
    PolicyMapper policyMapper;
	@GetMapping("/all")
	public List<Profile> getAll() {
		return profileMapper.findAll();
	}
	@GetMapping("/{id}")
	public Politician getById(@PathVariable int id){
		return politicianMapper.getById(id);
	}
	@GetMapping("/{id}/policy")
	public List<Policy> getPolicy(@PathVariable int id){
		return policyMapper.selectPolicyById(id);
	}

}
