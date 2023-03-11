export default function RoleButton(props) {
    return(
        <div className='role-button' onClick={() => props.setRole(props.role)}>{props.role}</div>
    );
}