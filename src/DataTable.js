import useData from './hooks/useData';
import './DataTable.css';

const DataTable = () => {
    const projects = useData('projects');
return (
    <div className ="DataTableDiv">
    <div className="DataDiv">
    <div className="DataHeader"><h1>TO DO</h1></div>
    {projects.map(projects => (
    <div key={projects.id} class="Task">
    <li>{projects.name}</li>
    <li>{projects.assigned}</li>
    <li>{projects.dept}</li>
    <button className="AddBtn">Edit</button>
    </div>))}
    <button className="AddBtn"> Add</button>
        </div>
        </div>
    )};
    export default DataTable;
