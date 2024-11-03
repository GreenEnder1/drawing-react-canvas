import React from "react"
import { useCanvas } from './CanvasContext';
import { ClearCanvasButton } from './ClearCanvasButton';

export function Footer()
{
    return(
        <>
        <div className="footer-elements">
        <ClearCanvasButton/>
        <BrushSizes/>
        <ColorOptions/>
        </div>
        </>
    )
}

function BrushSizes()
{
    return (
        <>
        <div className="circle-options">
            <CircleButton size={5} color={""}/>
            <CircleButton size={10} color={""}/>
            <CircleButton size={15} color={""}/>
            <CircleButton size={20} color={""}/>
        </div>
        </>
    )
}

function ColorOptions()
{
    return (
        <>
        <div className="circle-options">
            <CircleButton size={-1} color={"black"}/>
            <CircleButton size={-1} color={"red"}/>
            <CircleButton size={-1} color={"green"}/>
            <CircleButton size={-1} color={"blue"}/>
        </div>
        </>
    )
}

function CircleButton({size, color})
{
    const {
        updateSettings
      } = useCanvas();
    const style = {
        width: (size != -1) ? size*3 : 30,
        height: (size != -1) ? size*3 : 30,
        borderRadius: '50%',
        backgroundColor: (color != "") ? color : "black",
        paddingLeft: 10,
        paddingRight: 10
    };
    const onClick = () =>
        {
            updateSettings(size, color);
        }
    return (
        <>
        <button style={style} onClick={onClick}/>
        </>
    )
}