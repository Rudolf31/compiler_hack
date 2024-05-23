// AnonymityButton.js
import React from 'react';
import user from '../img/user-svgrepo-com(1).svg';
import userAnon from '../img/spy-svgrepo-com.svg';

const AnonymityButton = ({ isAnonymous, setIsAnonymous }) => {
    const toggleAnonymity = () => {
        setIsAnonymous(!isAnonymous);
    };

    const darkStyle = 'bg-slate-700 text-white rounded p-2';
    const lightStyle = 'bg-slate-300 rounded p-2';

    return (
        <button onClick={toggleAnonymity} className={isAnonymous ? darkStyle : lightStyle}>
            {isAnonymous ? <img src={userAnon} width={22} /> : <img src={user} width={22} />}
        </button>
    );
};

export default AnonymityButton;