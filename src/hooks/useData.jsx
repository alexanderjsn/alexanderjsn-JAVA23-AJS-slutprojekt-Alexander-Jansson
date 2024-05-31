// hämtar databasen enligt config settings
import { useState, useEffect, useContext } from 'react';
import { firebase,db } from '../firebaseConfig.js';
// allt vi vill göra med document
import { collection, onSnapshot , } from 'firebase/firestore';

const useData = (collectionName) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
            const projectArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setProjects(projectArray);
        });
        return () => unsubscribe();
    }, [collectionName]);
    return projects;
};
  
export default useData;

/*const snapshot = (collection(db, 'projects','tasks'));
const projectArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
setProjects(projectArray);*/