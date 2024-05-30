// hämtar databasen enligt config settings
import { db } from './firebaseConfig';
// allt vi vill göra med document
import { collection, getDocs, addDoc } from 'firebase/firestore';


    export async function getAllProjects(){
        // hämtar collection (query för flera docs)
        const querySnapshot = await getDocs(collection(db, 'projects'));
        // skapar en array med alla. Hämtar doc.id , ... = spread som hämtar alla andra values
        const projects = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));        
        return projects;
    }

    export async function getAllTasks(){
        const projects = await getAllProjects();
        const taskArray = [];
        for (const project of  projects ) {
            const taskQuerySnapshot = await getDocs(collection(db, `projects/${project.id}/tasks`));
            const tasks = taskQuerySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            taskArray.push(...tasks);
        }
        return taskArray;
    }

    export async function addTask(projectId, taskData){
        const addTask = await addDoc(collection(db, `projects/${projectId}/tasks`), taskData);
        return addTask;
    }

    
   // /projects/Weather App/tasks/OlmC3196Amjd6vVPtx2Q
