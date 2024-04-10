import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Profile.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import Navbar from "../../header/Navbar";

import arrow from "../../assets/side-arrow.png";
import { constants } from "constants-browserify";

const Profile = () => {
  

  const [active, setActive] = React.useState("ongoing");

  const [divCount, setDivCount] = useState(0);

  const handleAddProject = () => {
    setDivCount((prevCount) => prevCount + 1);
  };

  // function ToggleStatus() {
  const [selectedStatus, setSelectedStatus] = useState("button1");
  
  const handleStatusClick = (button) => {
    setSelectedStatus(button);
  };


  const [projects, setProjects] = useState([]);

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/fetchProject');
      if (response.ok) {
        const data = await response.json();
        setProjects(data.data);
      } else {
        throw new Error('Failed to fetch project details');
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  useEffect(() => {
    // Fetch project details when the component mounts
    fetchProjectDetails();
  }, []);

  const fetchproject = (e) => {
    console.log("ye trigger hua",e)
    const pid = e.target.id;
    console.log("pid",pid);
    const url =` /fullproject?id=${pid}`;
    // Navigate to the constructed URL
    window.location.href=url;
}


  return (
    <div>
      <Navbar />
      <div className="Profile">
        <Sidebar />
        <div className="prof-homer">
          <div className="profile_nav">
          
            <div className="profile_pjt_view">Project Overview</div>
            <div className="profile_btn">
              <div className={selectedStatus === 'button1' ? 'activeStatus profile_ongoing_btn' : ' profile_ongoing_btn'}
                    onClick={() => handleStatusClick('button1')}
              >Ongoing</div>
              <div className={selectedStatus === 'button2' ? 'activeStatus profile_complete_btn' : ' profile_complete_btn'}
                    onClick={() => handleStatusClick('button2')}
              >Complete</div>
            </div>
          </div>
          
          <div className="show-project">
          <div className="projects">
        {projects.project && projects.map((project) => (
            <div key={project.projectId} className="project-box">
            <img
              src={project.image[0]}
              // src="http://localhost:8080/uploads\\23d2d58b7cbfd54b635c526d4b199a39"
              alt="Project"
               className="project-image"
               style={{ width: '28vw' }}
              />

              <div className="project-details" onClick={fetchproject} id={`${project.projectId}`}>
                <h3 id={`${project.projectId}`}>{project.projectId}</h3>
                
                {project.inputFields && project.inputFields.map((field, index) => (
            // Display only heading
            field.type === 'heading' && <p key={index}>{field.value}</p>
        ))}   
              </div>
            </div>
          ))}


          {[...Array(divCount)].map((_, index) => (
              <Link key={index} className="show-divs" to="/PostedProject">This is div {index + 1}</Link>
            ))}
            <div className="show-button">
              <p>Add your latest ongoing or completed projects</p>
              <div onClick={handleAddProject}>
                
                <Link className="link" onClick={handleAddProject} to="/Project">Create a Project</Link>
              </div>

            </div>
        </div>


           
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Profile;