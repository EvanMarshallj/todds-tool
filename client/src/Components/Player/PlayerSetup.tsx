import { ReactElement, useState } from 'react';
import { Button, ButtonGroup, TextField } from "@mui/material";
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh.js';
import CallMadeIcon from '@mui/icons-material/CallMade';
//@ts-ignore
import PlayerToken from "./PlayerToken.tsx";
import { Player } from '../../types.js';

export interface PlayerSetupProps {
    submit: (player: Player) => void
}

export default function PlayerSetup(props: PlayerSetupProps) {
    const [tokenId, setTokenId] = useState(0);
    const [name, setName] = useState('');
    const valid = (name !== '') && (tokenId !== 0);

    return(
        <div className='player-setup'>
            <h1>Player Setup</h1>
            <TextField label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
            <ButtonGroup className='player-icon-selection' variant='outlined'>
                {tokens.map((token, key) => {
                    return(
                        <Button className={`icon-button ${tokenId === token.id ? 'selected' : ''}`} onClick={() => setTokenId(token.id)} key={key}>
                            <PlayerToken tokenId={token.id} icon={token.icon} />
                        </Button>
                    );
                })}
            </ButtonGroup>
            {valid && 
                <Button className='player-setup-submit' variant="contained" endIcon={<CallMadeIcon />} onClick={() => props.submit({id: 1234, name:name, token: tokens.find(t => t.id === tokenId)!.icon })}>
                    To Battle!
                </Button>
            }

        </div>
    );
}

type TokenMapping = {
    id: number,
    icon: ReactElement
}

const tokens: TokenMapping[] = [
    {id: 1, icon: <ShieldMoonIcon/>},
    {id: 2, icon: <AcUnitIcon/>},
    {id: 3, icon: <AutoFixHighIcon/>}
];



