import updateData from '../hooks/updateData';
import './css/List.css';
import React, { useState } from 'react';

const Assign = ({ projectId }) => {
    
    const [assigned, setAssigned] = useState( '' );
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateData(projectId, assigned);
        setAssigned( '' );
        setShowForm(false);
    }


return (
    <form onSubmit={handleSubmit}>
    <label>
     Assign:
     <input 
     type="text" 
     value={assigned}
     onChange={(e) => setAssigned(e.target.value)}></input>
    </label>
    <input type="submit" value="Submit"/>
    </form>
)
};
export default Assign;




/*


    const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData(projectId, formData, 'projects');
    setFormData({ assigned: '' });
    setShowForm(false);
    }

    const handleChange = (event) => {
    setFormData({
    ...formData, 
    [event.target.name]: event.target.value });
    };


*/ 