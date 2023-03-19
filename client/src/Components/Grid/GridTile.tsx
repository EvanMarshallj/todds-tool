import { GridCoord, Player } from "../../types";

export interface GridTileProps {
    coord?: GridCoord,
    player?: Player,
}

export default function GridTile(props: GridTileProps) {
    return(
        <>
            {props.player && props.player.token}
        </>
    );
}