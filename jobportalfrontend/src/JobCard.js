import './JobCard.css'
import { Link } from 'react-router-dom';
import JobDetails from './JobDetails';

function JobCard(props){
    const data = props.data;
    console.log(data)
    return (
        <Link to={`/jobdetails/${data.title}`} state={{job:data}}>
        <div className='container'>
            <div className='title'>{props.data.title}</div>
            <div className='location'>{props.data.location}</div>
            <div className='skills-container'>
            {props.data.skills.map((skill, index)=>(
                    <div className="skills">{skill}</div>
            ))}
            </div>
        </div>
        </Link>
    );

}

export default JobCard;