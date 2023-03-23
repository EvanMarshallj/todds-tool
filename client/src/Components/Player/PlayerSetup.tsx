import { useState } from 'react';
import { Button, ButtonGroup, TextField } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import PlayerToken from "./PlayerToken.tsx";
import { Tokens } from '../../constants.tsx';
import { Player } from '../../types.js';

export interface PlayerSetupProps {
    submit: (player: Player) => void
}

export default function PlayerSetup(props: PlayerSetupProps) {
    const [tokenId, setTokenId] = useState(-1);
    const [name, setName] = useState('');
    const valid = (name !== '') && (tokenId >= 0);

    return(
        <div className='player-setup'>
            <h1>Player Setup</h1>
            <TextField autoComplete='off' label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
            <ButtonGroup className='player-icon-selection' variant='outlined'>
                {Tokens.map((token, key) => {
                    return(
                        <Button className={`icon-button ${tokenId === key ? 'selected' : ''}`} onClick={() => setTokenId(key)} key={key}>
                            <PlayerToken tokenId={key} icon={token} />
                        </Button>
                    );
                })}
            </ButtonGroup>
            {valid && 
                <Button className='player-setup-submit' variant="contained" endIcon={<CallMadeIcon />} onClick={() => props.submit({id: 1234, name: name, tokenId: tokenId })}>
                    To Battle!
                </Button>
            }
        </div>
    );
}