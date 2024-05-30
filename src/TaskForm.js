import { useEffect, useState } from 'react';
import './DataManager';
import { getAllProjects, getAllTasks } from './DataManager.js';

const TaskForm = () => {
    const [opt, setOpt] = useState("");
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

const optTest = (event) => {
    setOpt(event.target.value);
}

return (



//dropdwon
<select value = {opt} onChange={optTest}>
{projects.map((projects, index) => (
        <option value={index}>{projects.id}</option>
))}
</select>
)};export default TaskForm;