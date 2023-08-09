import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName, resetProfile } from '../actions/userAction';

const UserProfile: React.FC = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.user.name);
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(userName);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(changeUserName(newName));
        setEditing(false);
    };

    const handleResetProfile = () => {
        dispatch(resetProfile());
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {userName}</p>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newName} onChange={handleNameChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditing(false)}>Cancel</button>
                </form>
            ) : (
                <button onClick={() => setEditing(true)}>Change Name</button>
            )}
            <button onClick={handleResetProfile}>Reset Profile</button>
        </div>
    );
};

export default UserProfile;
