package com.example.web.jobportalmongo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.web.jobportalmongo.jobrepository.ServiceRepository;
import com.example.web.jobportalmongo.models.Job;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import org.bson.Document;

@Component
@CrossOrigin(origins = "http://localhost:3000")
public class SearchServices implements ServiceRepository{

    @Autowired
    MongoClient mongoClient;

    @Autowired
    MongoConverter converter;

    @Override
    @CrossOrigin
    public List<Job> searchByText(String text) {
        List<Job> jobs = new ArrayList<>();

 
        MongoDatabase database = mongoClient.getDatabase("jobportal");
        MongoCollection<Document> collection = database.getCollection("jobs");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
            new Document("index", "default")
                    .append("text", 
            new Document("query", text)
                        .append("path", Arrays.asList("title", "description", "experience", "skills", "location")))), 
            new Document("$sort", 
            new Document("experience", 1L))));


        result.forEach(doc->jobs.add(converter.read(Job.class, doc)));

        return jobs;
    }
    
    
}
