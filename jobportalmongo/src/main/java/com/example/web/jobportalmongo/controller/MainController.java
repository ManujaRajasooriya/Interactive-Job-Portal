package com.example.web.jobportalmongo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.jobportalmongo.jobrepository.JobRepository;
import com.example.web.jobportalmongo.models.Job;
import com.example.web.jobportalmongo.services.SearchServices;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    @Autowired
    JobRepository repo;

    @Autowired
    SearchServices serviceRepo;

    @GetMapping("/jobs")
    @CrossOrigin
    public List<Job> getAllJobs() {
        return repo.findAll();
    }

    @GetMapping("/search/{text}")
    @CrossOrigin
    public List<Job> searchByText(@PathVariable String text) {

        return serviceRepo.searchByText(text);
    } 
    
    @PostMapping("/addjob")
    @CrossOrigin
    public Job addJob(@RequestBody Job job) {
        repo.save(job);
        return job;
    }


    
    
}
