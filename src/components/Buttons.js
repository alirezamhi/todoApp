import React from 'react';

const Buttons = ({style,text,buttonHnandler}) => {
    return (
        <div>
            <button className={style} onClick={buttonHnandler}>{text}</button>
        </div>
    );
};

export default Buttons;