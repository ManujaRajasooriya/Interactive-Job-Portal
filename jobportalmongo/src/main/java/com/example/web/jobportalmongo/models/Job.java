package com.example.web.jobportalmongo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobs")
public class Job {

    private String title;
    private String description;
    private String experience;
    private String skills[];
    private String location;

    public String getLocation() {
        return location;
    }



    public void setLocation(String location) {
        this.location = location;
    }



    public Job() {
    }

    
    
    public Job(String title, String description, String experience, String[] skills) {
        this.title = title;
        this.description = description;
        this.experience = experience;
        this.skills = skills;
    }


    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public String[] getSkills() {
        return skills;
    }

    public void setSkills(String[] skills) {
        this.skills = skills;
    }
   
    

    
    
}

