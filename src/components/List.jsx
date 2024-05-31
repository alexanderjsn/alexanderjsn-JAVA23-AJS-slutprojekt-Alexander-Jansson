import './css/List.css';
import useData from '../hooks/useData';
import React, { useState } from 'react';
import Assign  from './Assign';
import Modal from 'react-modal';
import removeData from '../hooks/removeData';
import completeTask from '../hooks/completeTask';

const List = () => {
    const projects = useData('projects');


    const [showForm, setShowForm] = useState(false);
    
    const [projectId, setProjectId] = useState(null);

    const doneBtn = async   (event) => {
        const done = 'Done';
        await completeTask(event.target.value, done);
    } 
    const deleteBtn = async   (projectId) => {
        await removeData('projects', projectId);
    } 

    const AssignClickBtn = (projectId, event) => {
        setProjectId (event.target.value);
        setShowForm(true);
    }

return (


        <div className ="DataTableDiv">
        <Modal
        isOpen={showForm}
        onRequestClose={()=> setShowForm(false)}
        contentLabel="Assign Task">
        {/*Skickar vidare projektId med värde av knappen(aka projekt id*/}
        <Assign projectId={projectId} />
        <button className="AddBtn" onClick={()=> AssignClickBtn}>X</button>
        </Modal>

    
        
            

        <div>
        <div className="DataDiv">
        <div className="DataHeader"><h1>To Do</h1></div>
        {projects.filter(project => !project.status).map((project, index) => (
        <div key={index} className="Task">
        <h3>{project.dept}</h3>
        <li>{project.name}</li>
        <li>{project.assigned}</li>
        <button className="AddBtn" value={project.id} onClick =
        {( event )=> AssignClickBtn(project.id, event)}>Assign</button>
        </div>
        ))}
        </div>
        </div>

        <div>
        
        <div className="DataHeader"><h1>In Progress</h1></div>
        <div  className="DataDiv">
        {projects.filter(project => project.status === 'In Progress').map((project, index) => (
        <div key={index} className="Task">
        <h3>{project.dept}</h3>
        <li>{project.name}</li>
        <li>{project.assigned}</li>
        <button className="AddBtn" value={project.id} onClick 
        ={doneBtn}>Mark as done</button> 
        </div>
       
        ))}
        </div>
         </div>


        <div>
        
        <div className="DataHeader"><h1>Done</h1></div>
        <div  className="DataDiv">
        {projects.filter(project => project.status === 'Done').map((project, index) => (
        <div key={index} className="Task">
        <h3>{project.dept}</h3>
        <li>{project.name}</li>
        <li>{project.assigned}</li>
        <button className="AddBtn" value={project.id} onClick={() => deleteBtn(project.id)} >Remove</button> 
        </div>
        ))}
        </div>
         </div>


       
        </div>
    );
};
export default List;


/*<button className="AddBtkn">{dept}</button>
                <button className="AddBtn" value={projects.id} onClick ={( event )=> AssignClickBtn(projects.id, event)}>Assign</button> * */


/*       <div className="DataHeader"><h1>{projects.dept}</h1></div>
        {projects.dept.map((dept, index) => {
        <div key={index} className="Task">
        <li>{projects.name}</li>
        <li>{projects.assigned}</li>
        </div>
        })}
 */


/*

{projects.filter(projects => projects.status === undefined).map((projects, index) => (
        <div key={index} className="Task">
        <li>{projects.name}</li>
        <li>{projects.assigned}</li>
        <button className="AddBtn">{projects.dept}</button>
        <button className="AddBtn" value={projects.id} onClick ={( event )=> AssignClickBtn(projects.id, event)}>Assign</button>  
        </div>
        ))};


*/ 


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