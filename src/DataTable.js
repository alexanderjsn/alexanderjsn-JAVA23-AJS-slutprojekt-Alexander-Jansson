import { useEffect, useState } from 'react';
import './DataManager';
import { getAllProjects } from './DataManager.js';

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
    <table>
        <thead>
            <tr>
                <th>COL 1</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((project, index) => (
                  <tr key = {index}>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.dept[2]}</td>
                  <td>{project.assigned}</td>
                  <td>{project.completed}</td>
                </tr>
            ))}
            </tbody>
    </table>
); 
};export default DataTable;