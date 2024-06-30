package com.example.web.jobportalmongo.jobrepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.web.jobportalmongo.models.Job;

@Repository
public interface JobRepository extends MongoRepository<Job, String>{

    
}
