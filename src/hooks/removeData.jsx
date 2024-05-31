import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

// allt vi vill göra med document
const removeData = async ( collectionName, projectId) => {
    const docRef = doc(db, collectionName, projectId);
    try {
        await deleteDoc(docRef);
        alert('Document with ID: ', docRef.id, ' deleted');
    } catch (error) {
        console.log('Error deleting document: ', error);
    }
};

export default removeData;