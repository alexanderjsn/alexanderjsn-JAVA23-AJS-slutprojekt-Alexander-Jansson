import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

const completeTask = async ( projectID,  status) => {
    try {
        const docRef = doc(db, 'projects', projectID);
        await updateDoc(docRef, {status: status});
    } catch (error) {
        console.log('Error updating document: ', error);
    }
};

export default completeTask;