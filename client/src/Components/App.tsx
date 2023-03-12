import "../Styles/App.scss";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import RolePicker from "./RolePicker";
// @ts-ignore
import HostHomepage from './Host/HostHomepage.tsx';
// @ts-ignore
import PlayerHomepage from './Player/PlayerHomepage.tsx';

export default function App() {
    const [socket] = useState(io("http://localhost:3001"));
    const [role, setRole] = useState(null);
    const roleSelected = role !== null;

    const [playerList, setPlayerList] = useState<string[]>([]);

    useEffect(() => {
        socket.on('player_joined', (name: string) => {
            console.log(`Player has joined: ${name}`);
            setPlayerList([...playerList, name]);
        });

        socket.on('host_joined', (host: {name: string, id: number}) => { 
            console.log(`Host joined: ${host.name} (id: ${host.id})`);
        });
    }, [playerList, socket]);

    return (
        <div className="App">
            {!roleSelected && <RolePicker role={role} setRole={setRole} />}
            {roleSelected && role === 'Host' && <HostHomepage socket={socket}  playerList={playerList} />}
            {roleSelected && role === 'Player' && <PlayerHomepage socket={socket} />}
        </div>
    );
}

