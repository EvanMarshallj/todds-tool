import RoleButton from './RoleButton.tsx';

export default function RolePicker(props) {
    return(
        <div className='role-picker'>
            <h1>Todd's Tool</h1>
            <h3>Choose your role.</h3>
            <div className='role-button-container'>
                <RoleButton {...props} role='Host'/>
                <RoleButton {...props} role='Player'/>
            </div>
        </div>
    );
}