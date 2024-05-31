import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import List from '../components/List';
import Form from '../components/Form';
import Headers from '../components/Header';
import useData from '../hooks/useData';


const Home = () => {
        const projects = useData('projects');

    return (
     
            <div className="taskDiv">TASKS HERE
            <Headers />
            <List projects={projects}/>
            <Form />
            </div>
        
    );
};

export default Home;