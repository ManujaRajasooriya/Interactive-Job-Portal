import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
function JobDetails(){
    const data = useLocation().state?.job;
    
    const handleSubmit = () =>{
        console.log('applied');
        alert('Applied');
    }
    return(
        <div className="detContainer">
            <div className="titleDet">{data.title}</div>
            <div className="locationDet">{data.location}</div>
            <div className="descriptionDet">{data.description}</div>
            <div className="skillscontainerDet">
                {data.skills.map((skill, index)=>(
                    <div className="skillsDet">{skill}</div>
                ))
             }
            </div>
            <Link to='/'>
            <button type='submit' className="applybtn" onClick={handleSubmit}>Apply</button>
            </Link>
        </div>
    )
}

export default JobDetails;