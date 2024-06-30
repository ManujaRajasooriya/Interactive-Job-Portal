package com.example.web.jobportalmongo.jobrepository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.web.jobportalmongo.models.Job;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
public interface ServiceRepository {

    public List<Job> searchByText(String text);
    
}
