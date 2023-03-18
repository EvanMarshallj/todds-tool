import { useState } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import Grid from '../Grid/Grid.tsx';
import PlayerSetup from './PlayerSetup.tsx';
import { Player } from '../../types.js';

export interface PlayerHomepageProps {
    socket: Socket,
}

export default function PlayerHomepage(props: PlayerHomepageProps) {
    const [playerInfo, setPlayerInfo] = useState<Player>();
    const setupComplete = playerInfo !== undefined;

    const submitPlayer = (player: Player) => {
        setPlayerInfo(player);
        props.socket.emit('player_joined', player.name);
    }

    useEffect(() => {
        
    }, [])

    return(
        <div className='player-homepage'>
            {!setupComplete && <PlayerSetup submit={submitPlayer} />}
            {setupComplete && 
                <div>
                    Your name: {playerInfo.name}
                    Your token: {playerInfo.token}
                    <Grid className='player-grid' height={401} width={841}/>
                </div>
            }
        </div>
    );
}