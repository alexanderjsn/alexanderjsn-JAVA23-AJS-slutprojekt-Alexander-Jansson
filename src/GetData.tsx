import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';


const GetData = () => {
    const[projects, setProjects] = useState<{ id: string; }[]>([]);

    useEffect(() => {
        const fetchProjects = async() => {
            const projectCollection = collection(db, 'tasks');
            const projectSnapshot = await getDocs(query(projectCollection))
            const projectList = projectSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setProjects(projectList);
            console.log(projectList);
        };
        fetchProjects()
    },[]); 
    return <div>
        {projects.map((project, index)=> 
        <div key={index}>
            <p>{project.id}</p>
            </div>
        
        )}

    </div>
};

export default GetData;