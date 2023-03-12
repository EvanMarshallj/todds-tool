import * as React from 'react';
import Button from '@mui/material/Button';

export default function RoleButton(props) {
    return(
        <Button className='role-button' variant={'contained'} onClick={() => props.setRole(props.role)}>{props.role}</Button>
    );
}