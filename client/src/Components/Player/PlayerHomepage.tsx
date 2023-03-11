import React from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

export interface PlayerHomepageProps {
    socket: Socket,
}

export default function PlayerHomepage(props: PlayerHomepageProps) {
    useEffect(() => {
        props.socket.emit('player_joined', 'Evan');
    }, [])

    return(
        <h1>You are a player.</h1>
    );
}