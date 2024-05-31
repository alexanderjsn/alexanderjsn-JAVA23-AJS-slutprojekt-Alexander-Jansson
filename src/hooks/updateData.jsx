import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

// allt vi vill göra med document
const updateData = async ( projectID, assigned ) => {
    try {
        const docRef = doc(db, 'projects', projectID);
        await updateDoc(docRef, {
            assigned: assigned,
        });
        alert('Document updated with ID: ', docRef.id)
    } catch (error) {
        console.log('Error updating document: ', error);
    }
};

export default updateData;