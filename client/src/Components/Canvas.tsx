import { useEffect, useRef } from 'react'
// @ts-ignore
import { drawGrid } from '../Utilities/canvasUtilities.ts';

export default function Canvas(props) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!;
        const context = canvas.getContext('2d');
        if(context !== null) {
            drawGrid(context, props.width, props.height, 0);
        }
    }, [props.width, ]);
    
    return (<canvas ref={canvasRef} {...props}/>);
}