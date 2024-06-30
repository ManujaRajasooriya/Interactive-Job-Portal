import { useState, useEffect } from 'react';
import './App.css';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  const [data, setData] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

const getjobs = async() => {

  try {
    const response = await fetch('http://localhost:8080/jobs');
    const json = await response.json();
    setData(json);
    setShowSearch(true);
    console.log(json);
  } catch (error) {
    alert ("Error: "+error);
  }
    
}

useEffect(() => {
  console.log(searchTerm);
  fetchSearch();
}, [searchTerm]);


const fetchSearch = async() =>{

  if(showSearch){
  try {
    const response = await fetch(`http://localhost:8080/search/${searchTerm}`);
    const responseJson = await response.json();
    setData(responseJson);
    console.log(data)

  } catch (error) {
    if(searchTerm==""){
      getjobs();
    }
  }
}
}

  return (
    <div className='body'>
    <div className='header'>
        Portal 
    </div>

    <div className='btnContainer'>
      <div>
        <Link to='./createjob'><button className="portalbtn">Create Jobs</button></Link>
      </div>
      <div>
        <button className="portalbtn" onClick={getjobs}>Get Jobs</button>
      </div>
      </div>

      {showSearch &&
        <input className='searchbar' type='text' placeholder='search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input> 
      }

      {searchTerm=="" ?
        data.length > 0 ? (
          data.map((job, index) => (
            <JobCard data={job} />
          ))
      ) : (
        <p>No jobs available.</p>
      )
      :
      (
        data.length > 0 ? (
          data.map((job, index) => (
            <JobCard data={job} />
          ))
      ) :(
        <p>No results</p>
      )
      )
      }
      

    </div>
  );
}

export default App;
