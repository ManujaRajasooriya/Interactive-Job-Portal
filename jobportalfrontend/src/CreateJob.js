import { Link } from "react-router-dom";
import { useState } from "react";
function CreateJob(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState("");
    const [experience, setExperience] = useState("");
    
    const handleSubmit = async() =>{

        const bodyData = {
            "title": title,
            "description": description,
            "experience": experience,
            "location": location,
            "skills": skills.split(' ')
        }
        
        console.log(bodyData);

        try {
            const response = await fetch("http://localhost:8080/addjob",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(bodyData)
            })
    
            const responseJson = await response.json();

            if(!response.ok){
                alert("Error");
            }else{
                alert("Success!");
                window.location.href='/';
            }
            
        } catch (error) {
            alert("Error: "+error);  
        }

    }

    return(
        <div className="createContainer">
            <div className="titleDet">Create New Job</div>
            <div className="form">
                <div className="field">
                    <div className="label title">Job Role</div>
                    <input className="inputstyles" type="text" onChange={e => setTitle(e.target.value)} placeholder="Job Role"></input>
                </div>
                <div className="field">
                    <div className="label title">Location</div>
                    <input className="inputstyles" type="text" onChange={e => setLocation(e.target.value)} placeholder="Location"></input>
                </div>
                <div className="field">
                    <div className="label title">Experience</div>
                    <input className="inputstyles" type="text" onChange={e => setExperience(e.target.value)} placeholder="Experience"></input>
                </div>
                <div className="field">
                    <div className="label title">Description</div>
                    <textarea type="text" className="textdesc" onChange={e => setDescription(e.target.value)} placeholder="Description"></textarea>
                </div>
                <div className="field">
                    <div className="label title">Skills</div>
                    <input className="inputstyles" type="text" onChange={e => setSkills(e.target.value)} placeholder="Skills"></input>
                </div>
            </div>
           
            
            {/* <Link to='/'> */}
            <button type='submit' className="applybtn" onClick={handleSubmit}>Create</button>
            {/* </Link> */}
        </div>
    )
}

export default CreateJob;