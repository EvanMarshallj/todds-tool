import "../Styles/App.scss";
import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import RolePicker from "./RolePicker";
// @ts-ignore
import HostHomepage from './Host/HostHomepage.tsx';
// @ts-ignore
import PlayerHomepage from './Player/PlayerHomepage.tsx';

export default function App() {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [role, setRole] = useState(null);
    const roleSelected = role !== null;

    const [playerList, setPlayerList] = useState<string[]>([]);

    useEffect(() => {
        const newSocket = io("http://localhost:3001");
        setSocket(newSocket);
    
        // return () => newSocket.close();
    }, []);

    useEffect(() => {
        if(socket){
            socket.on('player_joined', (name: string) => {
                console.log(`Player has joined: ${name}`);
                setPlayerList([...playerList, name]);
            });
    
            socket.on('host_joined', (host: {name: string, id: number}) => { 
                console.log(`Host joined: ${host.name} (id: ${host.id})`);
            });
    
            socket.on('token_moved', (row: number, col: number, tokenId: number) => {
               console.log('token moved!'); 
            });
        }
    }, [playerList, socket]);

    return (
        <div className="App">
            {!roleSelected && <RolePicker role={role} setRole={setRole} />}
            {socket && roleSelected && role === 'Host' && <HostHomepage socket={socket}  playerList={playerList} />}
            {socket && roleSelected && role === 'Player' && <PlayerHomepage socket={socket} />}
        </div>
    );
}

