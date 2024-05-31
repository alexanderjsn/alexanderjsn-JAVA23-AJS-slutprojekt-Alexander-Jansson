import './css/List.css';
import useData from '../hooks/useData';
import React, { useState } from 'react';
import Assign  from './Assign';

import Modal from 'react-modal';

const List = () => {
    const projects = useData('projects');
    const [showForm, setShowForm] = useState(false);

    
    const [projectId, setProjectId] = useState(null);

    const AssignClickBtn = (projectId, event) => {
        setProjectId(projects.id);
        setProjectId (event.target.value);
        setShowForm(true);
    }

return (
    <div className ="DataTableDiv">
        <Modal
        isOpen={showForm}
        onRequestClose={()=> setShowForm(false)}
        contentLabel="Assign Task">
        {/*Skickar vidare projektId med värde av knappen(aka projekt id)*/}
        <Assign projectId={projectId} />
        <button className="AddBtn" onClick={()=> AssignClickBtn}>X</button>
        </Modal>

        <div className="DataDiv">
        <div className="DataHeader"><h1>To Do</h1></div>
        {projects.filter(projects => projects.status === undefined).map((projects, index) => (
        <div key={index} className="Task">
        <li>{projects.name}</li>
        <li>{projects.assigned}</li>
        <button className="AddBtn">{projects.dept}</button>
        <button className="AddBtn" value={projects.id} onClick ={( event )=> AssignClickBtn(projects.id, event)}>Assign</button>  
        </div>
        ))};
        </div>
        </div>
)};
export default List;


    /*
    
        {projects.filter(projects => projects.status === undefined).map((projects, index) => (
            <div className="DataDiv">
            <div key={index} className="Task">
            <li>{projects.name}</li>
            <li>{projects.assigned}</li>
            <button className="AddBtn">{projects.dept}</button>
            <button className="AddBtn" value={projects.id} onClick ={( )=> setShowForm(true)}>Assign</button>
            </div>
            </div>
            ))}


    {projects.filter(projects => projects.status === "In Progress").map((projects, index) => (
            <div className="DataDiv">
            <div>
            <div className="DataHeader"><h1>{projects.status}</h1></div>
            <div key={index} className="Task">
            <li>{projects.name}</li>
            <li>{projects.assigned}</li>
            <button className="AddBtn">{projects.dept}</button>
            </div>
            </div>
            </div>
            ))}

     {projects.filter(projects => projects.status === "Finished").map((projects, index) => (
            <div className="DataDiv">
            <div>
            <div className="DataHeader"><h1>{projects.status}</h1></div>
            <div key={index} className="Task">
            <li>{projects.name}</li>
            <li>{projects.assigned}</li>
            <button className="AddBtn">{projects.dept}</button>
            </div>
            </div>
            </div>
            ))}*/