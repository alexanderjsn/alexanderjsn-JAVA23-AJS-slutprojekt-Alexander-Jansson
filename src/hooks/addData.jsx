// hämtar databasen enligt config settings
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js';
// allt vi vill göra med document
import { collection,  addDoc } from 'firebase/firestore';



const addData = async (data, collectionName) => {
    try{
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
    } catch (error){
        console.log('Error adding document: ', error);
    }; 
}; export default addData;
