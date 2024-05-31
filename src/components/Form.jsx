import addData from '../hooks/addData';
import './css/List.css';
import React, { useState } from 'react';
const Form = () => {
    
    const [formData, setFormData] = useState({ name: '', assigned: '', dept: '' });
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
     Department:
     <select type="dept" name="dept" value={formData.dept} onChange={handleChange}>
     <option value="UX">UX</option>
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    </select>
    </label>

    <input type="submit" value="Submit"/>
    </form>
)
};
export default Form;
