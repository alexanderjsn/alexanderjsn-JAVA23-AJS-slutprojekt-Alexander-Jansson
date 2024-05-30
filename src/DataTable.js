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
                setProjects(fromDB);
            };
            getData();
        }, []);
            
return (
    <div class="DataDiv">
    <div class="DataHeader"><h1>TO DO</h1></div>

        <div class="Task">
        <li>project description</li>
        <li>assigned to: </li>
        <li>field: </li>
        <button class="AddBtn">Assign</button>
        </div>
        <div class="Task">
        <button class="AddBtn">Assign</button>
        </div>
        <div class="Task">
        <button class="AddBtn">Assign</button>
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