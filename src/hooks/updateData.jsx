import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

const updateData = async ( projectID, assigned, status) => {
    try {
        const docRef = doc(db, 'projects', projectID);
        await updateDoc(docRef, {
            assigned: assigned,
            status: status
        });
        alert('Document updated with ID: ', docRef.id)
    } catch (error) {
        console.log('Error updating document: ', error);
    }
};

export default updateData;