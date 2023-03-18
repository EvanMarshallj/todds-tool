import React from 'react';
import { useEffect, useState } from 'react'
import GridTile from './GridTile.tsx';

export interface GridProps {
    height: number,
    width: number
}

export default function Grid(props: GridProps) {
    const [tiles, setTiles] = useState<JSX.Element[][]>();

    useEffect(() => {
        let initialColumn: JSX.Element[] = Array(props.width).fill(<GridTile/>);
        let initialTiles: JSX.Element[][] = Array(props.height).fill(initialColumn);
        setTiles(initialTiles);
    }, []);


    return (
        <div className='grid'>
            {tiles?.map((row, index) => {
              return(
                    <div className='grid-row'>
                        {row.map((tile, index) => {
                            return(tile);
                        })}
                    </div>
                );
            })}
        </div>
    );
}