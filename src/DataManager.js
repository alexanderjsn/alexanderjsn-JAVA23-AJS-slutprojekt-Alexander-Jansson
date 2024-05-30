// hämtar databasen enligt config settings
import { db } from './firebaseConfig';
// allt vi vill göra med document
import { collection, getDocs } from 'firebase/firestore';


    export async function getAllProjects(){
        // hämtar collection
        const querySnapshot = await getDocs(collection(db, 'projects'));
        // skapar en array med alla projekt
        const projects = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        
        return projects;
    }
