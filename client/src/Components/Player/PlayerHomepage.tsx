import { useState } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import Grid from '../Grid/Grid.tsx';
import PlayerSetup from './PlayerSetup.tsx';
import { GridCoord, Player } from '../../types.js';
import { Tokens } from '../../constants.tsx';

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

    const moveToken = (coord: GridCoord) => {
        props.socket.emit('token_moved', {row: 0, col: 0, tokenId: 0});
    }


    return(
        <div className='player-homepage'>
            {!setupComplete && <PlayerSetup submit={submitPlayer} />}
            {setupComplete && 
                <div onClick={() => moveToken({row: 0, col: 0})}>
                    Your name: {playerInfo.name}
                    Your token: {Tokens[playerInfo.tokenId!]}
                    <Grid height={2} width={2}/>
                </div>
            }
        </div>
    );
}