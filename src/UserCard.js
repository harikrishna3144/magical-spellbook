import React, {useState, useEffect} from 'react';
import './App.css'

function UserCard({ user }){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [showMagic, setShowMagic] = useState(false);


    useEffect(() => {
        applyMagic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyMagic = () => {
        const nameParts = user.first_name.split('');
        const reversedName = nameParts.reverse().join('');
        const reversedEmail = user.email.split('').reverse().join('');
        setFullName(`${reversedName} ${user.last_name}`);
        setEmail(reversedEmail);
        setShowMagic(true);
    };

    const toggleMagic = () => {
        setShowMagic(!showMagic);
    }

    return(
        <div className={`user-card ${showMagic ? 'magical' : ''}`}>
            <h3>{fullName}</h3>
            <p>{email}</p>
            {showMagic && <p className='magic-text'>🪄  Magic Applied!</p>}
            <button className='magic-button' onClick={toggleMagic}> {showMagic ? 'Remove Magic' : 'Apply Magic'} </button>
        </div>
    );
}

export default UserCard;









