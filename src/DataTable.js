import { useEffect, useState } from 'react';
import './DataManager';
import { getAllProjects } from './DataManager.js';
import './DataTable.css';
const DataTable = () => {
        //hämta data
        const [projects, setProjects] = useState([]);


        useEffect(() => {
            const getData = async () => {
                const fromDB = await getAllProjects();
                setProjects(fromDB.slice(0,5)); //inc metod?kolla batching
            };
            getData();
        }, []);
            
return (
    <div class="DataDiv">
    <div class="DataHeader">
        <h1>TO DO</h1></div>
        <div>
        {projects.map((project, index) => (
            <div key={index} class="Task">
            <li key={index}>{project.id}</li>
            <li key={index}>{project.assigned}</li>
            <li key={index}>{project.field}</li>
            <button class="AddBtn">Assign</button>
            </div>
        ))}
        </div>
        <div>
        {projects.map((project, index) => (
            <div key={index} class="Task">
            <li key={index}>{project.id}</li>
            <li key={index}>{project.assigned}</li>
            <li key={index}>{project.field}</li>
            <button class="AddBtn">Mark as Completed</button>
            <button key={index} class="AddBtn">{project.assign}</button>
            </div>
        ))}
        </div>
        <div>
        {projects.map((project, index) => (
            <div key={index} class="Task">
            <li key={index}>{project.id}</li>
            <li key={index}>{project.assigned}</li>
            <li key={index}>{project.field}</li>
            <li key={index}>{project.assign}</li>
            <li key={index}>{project.finished}</li>
            </div>
        ))}
        </div>
    </div>
)};export default DataTable;





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