import express, { Express } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app: Express = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket: Socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on('player_joined', (data) => {
        socket.join('2');
        socket.to('2').emit('player_joined', data);
    });

    socket.on('host_joined', (name: string, id: number) => {
        socket.join('2');
        socket.to('2').emit('host_joined', name, id);
    });

    socket.on('token_moved', (row: number, col: number, tokenId: number) => {
        socket.to('2').emit('token_moved', row, col, tokenId);
    });

});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
