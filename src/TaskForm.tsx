import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from './firebaseConfig';

//sprint_id assigned_to, title, description, status, start_date, end_date, created_at, updated_at,
//division, 

function TaskForm(){
    const [sprint_id, setSpring_id] = useState("");
    const [assigned_to, setAssignedTo] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [created_at, setCreatedAt] = useState("");
    const [updated_at, setUpdatedAt] = useState("");
    const [division, setDivision] = useState("");


const handleSubmit = async (event: { preventDefault: () => void; }) => {
    try {
        await addDoc(collection(db, 'tasks'),{
            sprint_id: sprint_id,
            assigned_to: assigned_to,
            title: title,
            description: description,
            status: status,
            start_date: start_date,
            end_date: end_date,
            created_at: created_at,
            updated_at: updated_at,
            division: division,
        });
        //fixa bättre UI
        console.log('Added to doc successfully');
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};
return (
    <form onSubmit={handleSubmit}>
    <label>
     Sprint_id:
     <input type="text" value={sprint_id} onChange={e => setSpring_id(e.target.value)} />
    </label>
    <label>
     assigned_to:
     <input type="text" value={assigned_to} onChange={e => setAssignedTo(e.target.value)} />
    </label>
    <label>
     title:
     <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    </label>
    <label>
     description:
     <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
    </label>
    <label>
     status:
     <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
    </label>
    <label>
     start_date:
     <input type="text" value={start_date} onChange={e => setStartDate(e.target.value)} />
    </label>
    <label>
     end_date:
     <input type="text" value={end_date} onChange={e => setEndDate(e.target.value)} />
    </label>
    <label>
     created_at:
     <input type="text" value={created_at} onChange={e => setCreatedAt(e.target.value)} />
    </label>
    <label>
     updated_at:
     <input type="text" value={updated_at} onChange={e => setUpdatedAt(e.target.value)} />
    </label>
    <label>
     division:
     <input type="text" value={division} onChange={e => setDivision(e.target.value)} />
    </label>
    <input type="submit" value="Submit" />
    </form>
);
};

export default TaskForm;
