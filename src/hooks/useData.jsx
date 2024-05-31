// hämtar databasen enligt config settings
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js';
// allt vi vill göra med document
import { collection, getDocs, addDoc } from 'firebase/firestore';

const useData = (collectionName) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
    const fetchData = async () => { 
    try{

    const snapshot = await getDocs(collection(db, collectionName));
    const projectArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setProjects(projectArray);
    }
    catch (error){
        console.log('Error getting documents: ', error);
    };
};
    fetchData();
}, [collectionName]);
return projects;
};


const addData = async (data, collectionName) => {
    try{
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
    } catch (error){
        console.log('Error adding document: ', error);
    }; 
};


export default useData;

/*const snapshot = (collection(db, 'projects','tasks'));
const projectArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
setProjects(projectArray);*/