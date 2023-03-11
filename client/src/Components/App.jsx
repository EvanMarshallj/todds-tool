import "../Styles/App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import RolePicker from "./RolePicker";
import HostHomepage from './Host/HostHomepage';
import PlayerHomepage from './Player/PlayerHomepage';

const socket = io.connect("http://localhost:3001");

export default function App() {
    const [role, setRole] = useState(null);
    const roleSelected = role !== null;

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // setMessageReceived(data.message);
        });
    }, []);

    return (
        <div className="App">
            {!roleSelected && <RolePicker role={role} setRole={setRole} />}
            {roleSelected && role === 'Host' && <HostHomepage />}
            {roleSelected && role === 'Player' && <PlayerHomepage />}
        </div>
    );
}


  // //Room State
  // const [room, setRoom] = useState("");

  // // Messages States
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };

