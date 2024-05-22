import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
    const makeBtn = () => {
        for(let i = 0; i < 3; i++){}
    };
    

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
        </div>
    );
}

export default Home;