import { useState } from 'react';
import RoleButton from './RoleButton.js';

export default function RolePicker(props) {
    return(
        <div className='role-picker'>
            <h1>Choose your role.</h1>
            <div className='role-button-container'>
                <RoleButton {...props} role='Host'/>
                <RoleButton {...props} role='Player'/>
            </div>
        </div>
    );
}