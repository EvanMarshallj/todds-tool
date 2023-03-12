import { ReactElement } from "react";
import { Avatar } from "@mui/material";

export interface PlayerTokenProps {
    tokenId: number,
    icon: ReactElement,
    selectToken?: (id: number) => void
}

export default function PlayerToken(props: PlayerTokenProps) {
    return(
        <Avatar className='player-token'>
            {props.icon}
        </Avatar>
    );
}

// const tokens = {
//     1: <ShieldMoonIcon />,
//     2: <AcUnitIcon />,
//     3: <AutoFixHighIcon />
// };