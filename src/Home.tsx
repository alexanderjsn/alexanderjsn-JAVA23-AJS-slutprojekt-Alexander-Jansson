import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';
import React, { useState } from 'react';

function Home() {

    const makeBtn = () => {
        let buttons = [];
        const labelBtn = ['UX', 'Front-End', 'Back-End'];

        for(let i = 0; i < labelBtn.length; i++){
            buttons.push(<button key={i}
                className={`btnClass ${labelBtn[i]}`} 
                //onClick={""}
                >{labelBtn[i]}
                </button>);
        }return buttons;
    };

    

    return (
        <div>
            <div className="btnDiv">{makeBtn()}</div>
            <div className="taskDiv">TASKS HERE</div>
        </div>
    );
}

export default Home;