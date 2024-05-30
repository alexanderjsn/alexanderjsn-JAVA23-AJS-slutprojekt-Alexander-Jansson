import { useEffect, useState } from 'react';
import './DataManager';
import { getAllProjects, getAllTasks } from './DataManager.js';

import './DataTable.css';
const DataTable = () => {
        //hämta data
        const [projects, setProjects] = useState([]);
        const [tasks, setTasks] = useState([]);

        
        useEffect(() => {
            const getData = async () => {
                const projectsFromDB = await getAllProjects();
                const tasksFromDB = await getAllTasks();
                console.log(tasksFromDB)
                console.log(projectsFromDB)
                setTasks(tasksFromDB.slice(0,10));
                setProjects(projectsFromDB.slice(0,10)); //inc metod?kolla batching
            };
            getData();
        }, []);

return (
    <div className ="DataTableDiv">
    {tasks.filter(tasks => tasks.status === "To Do").map((tasks, index) => (
            <div className="DataDiv">
            <div>
            <div className="DataHeader"><h1>{tasks.status}</h1></div>
            <div key={index} className="Task">
            <li>{tasks.description}</li>
            <li>{tasks.assigned}</li>
            <button className="AddBtn">{tasks.dept}</button>
            <button className="AddBtn">Assign</button>
            </div>
            </div>
            <button className="AddBtn"> Add</button>
            </div>
        ))}

    

            {tasks.filter(tasks => tasks.status === "In Progress").map((tasks, index) => (
            <div className="DataDiv">
            <div>
            <div className="DataHeader"><h1>{tasks.status}</h1></div>
            <div key={index} className="Task">
            <li>{tasks.description}</li>
            <li>{tasks.assigned}</li>
            <button className="AddBtn">{tasks.dept}</button>
            </div>
            </div>
            </div>
            ))}

            {tasks.filter(tasks => tasks.status === "Completed").map((tasks, index) => (
                        <div className="DataDiv">

            <div>
            <div className="DataHeader"><h1>{tasks.status}</h1></div>
            <div key={index} className="Task">
            <li>{tasks.description}</li>
            <li>{tasks.assigned}</li>
            <li>{new Date(tasks.finished.seconds * 1000).toLocaleString()}</li>
            <button className="AddBtn">{tasks.dept}</button>
            </div>
            </div>
            </div>
            ))} 


        </div>
        
    )};
    export default DataTable;

///projects/Weather App/tasks


/*(
    <div class ="DataTableDiv">
    <div class="DataDiv">
    <div class="DataHeader"><h1>TO DO</h1></div>
    {projects.filter(projects => projects.assigned === "").map((projects, index) => (
            <div key={index} class="Task">
            <li>{projects.id}</li>
            <li>{projects.description}</li>
            <li>{projects.assigned}</li>
            <button class="AddBtn">{projects.dept}</button>
            <button class="AddBtn">Assign</button>
            </div>
    ))}
    <button class="AddBtn"> Add</button>
    </div>



    <div class="DataDiv">
    <div class="DataHeader"><h1>TO DO</h1></div>
    {projects.filter(projects => projects.assigned === "").map((projects, index) => (
            <div key={index} class="Task">
            <li>{projects.id}</li>
            <li>{projects.description}</li>
            <li>{projects.assigned}</li>
            <button class="AddBtn">{projects.dept}</button>
            <button class="AddBtn">Assign</button>
            </div>
    ))}
    <button class="AddBtn"> Add</button>
    </div>


    
    <div class="DataDiv">
    <div class="DataHeader"><h1>TO DO</h1></div>
    {projects.filter(projects => projects.assigned === "").map((projects, index) => (
            <div key={index} class="Task">
            <li>{projects.id}</li>
            <li>{projects.description}</li>
            <li>{projects.assigned}</li>
            <button class="AddBtn">{projects.dept}</button>
            <button class="AddBtn">Assign</button>
            </div>
    ))}
    <button class="AddBtn"> Add</button>
    </div>
    </div>
)}; */
/////////////////////////////////////////777

/*
<table>
<thead>
<tr>
    <th>Task</th>
    <th>Assigned to</th>
    <th>Info</th>
</tr>
</thead>
<tbody>
{projects.map((project, index) => (
    <tr key={index}>
    <td>{project.id}</td>
    <td>{project.assigned}</td>
    <td>{project.description}</td>
    </tr>))}
</tbody>
</table>
*/

/*

  {projects.map((project, index) => (
            <div key={index} class="Task">
            <li key={index}>{project.id}</li>
            <li key={index}>{project.assigned}</li>
            <li key={index}>{project.field}</li>
            <button class="AddBtn">Assign</button>
            </div>
        ))}
    */



/////////////////////////////////////////////////////////////////////7

        /*
        projects!

            {projects.map((projects, index) => (
            <div key={index} className="Task">
            <li>{projects.id}</li>
            <li>{projects.description}</li>
            <button className="AddBtn">Assign</button>
            </div>
    ))}
        
        */ 