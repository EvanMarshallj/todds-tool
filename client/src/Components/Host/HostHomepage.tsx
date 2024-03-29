import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

export interface HostHomepageProps {
    socket: Socket,
    playerList: string[]
}

export default function HostHomepage(props: HostHomepageProps){

    useEffect(() => {
        props.socket.emit('host_joined', {name: 'Evan-Host', id: 2});
    }, [props.socket]);

    return(
        <div className='host-homepage'>
            <h1>You are the host.</h1>
            <h3>Player list:</h3>
            <div>{props.playerList}</div>
        </div>
    );
}