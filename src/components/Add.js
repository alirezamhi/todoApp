import React, { useState } from 'react';
import Buttons from './Buttons';

const Add = () => {
    const [value,setValue] = useState("")
    return (
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <Buttons style="btn btn-primary" text="Add"></Buttons>
        </div>
    );
};

export default Add;