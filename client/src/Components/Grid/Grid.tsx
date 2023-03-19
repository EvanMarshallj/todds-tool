import React from 'react';
import { useEffect, useState } from 'react'
import GridTile from './GridTile.tsx';
import { GridCoord, Player } from '../../types.js';

export interface GridProps {
    height: number,
    width: number
}

export default function Grid(props: GridProps) {
    const [tiles, setTiles] = useState<JSX.Element[][]>(
        Array.from({length: props.height},(_value, row) => 
            Array.from({length: props.width}, (_value, col) =>
                <GridTile coord={{row: row, col: col}}/>
            )
        )
    );

    const updateTile = (tileCoord: GridCoord, player?: Player) => {
        let newTiles = [...tiles];
        newTiles[tileCoord.row][tileCoord.col] = <GridTile coord={tileCoord} player={player}/>;
        setTiles(newTiles);
    }

    const moveToken = (initial: GridCoord, destination: GridCoord, player: Player) => {
        updateTile(initial, undefined);
        updateTile(destination, player);
    }

    return (
        <div className='grid'>
            {tiles?.map((row, index) => {
              return(
                    <div className={`grid-row ${index}`} key={index}>
                        {row.map((tile, index) => {
                            return(<div className={`grid-tile ${index}`} key={index}>{tile}</div>);
                        })}
                    </div>
                );
            })}
        </div>
    );
}