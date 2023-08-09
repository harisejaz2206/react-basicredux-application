import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName, resetProfile } from '../actions/userAction';
import { MdSave, MdCancel, MdModeEdit, MdDeleteForever } from 'react-icons/md';

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
        <div className="bg-gray-100 p-8 rounded-xl max-w-xl mx-auto mt-10 shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
            <p className="text-lg mb-4">Name: {userName}</p>
            {editing ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                        className="p-2 border rounded-md"
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
                        >
                            <MdSave /> Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditing(false)}
                            className="bg-gray-300 py-1 px-2 rounded-md hover:bg-gray-400 flex items-center gap-2"
                        >
                            <MdCancel /> Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="flex gap-2">
                    <button
                        onClick={() => setEditing(true)}
                        className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 flex items-center gap-2"
                    >
                        <MdModeEdit /> Change Name
                    </button>
                    <button
                        onClick={handleResetProfile}
                        className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 flex items-center gap-2"
                    >
                        <MdDeleteForever /> Reset Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
