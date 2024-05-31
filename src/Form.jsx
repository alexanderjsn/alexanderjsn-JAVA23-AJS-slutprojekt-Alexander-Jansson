import useData from './hooks/useData';
import addData from './hooks/addData';

import './DataTable.css';
import React, { useState } from 'react';
const Form = () => {
    const [formData, setFormData] = useState({ name: '' 
        , assigned: '', dept: ''});

    const handleSubmit = async (event) => {
    event.preventDefault();
    await addData(formData, 'projects');
    setFormData({ name: '', assigned: '', dept: '' });
    }

    const handleChange = (event) => {
    setFormData({
    ...formData, 
    [event.target.name]: event.target.value 
    });
    };


return (
    <form onSubmit={handleSubmit}>
    <label>
     Task Name:
     <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
    </label>

    <label>
     Assign:
     <input type="text" name="assigned" value={formData.assigned} onChange={handleChange}></input>
    </label>

    <label>
     Department:
     <input type="text" name="dept" value={formData.dept} onChange={handleChange}></input>
    </label>
    <input type="submit" value="Submit"/>
    </form>
)
};
export default Form;
