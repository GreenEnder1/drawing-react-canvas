import React, { useEffect, useState } from "react"
import { useCanvas } from "./CanvasContext";

const gameStarted = false;
export var chosenTime = 120;
export function SettingsLeft()
{
    return(
        <>
        <div className="settings-left">
        </div>
        </>
    )
}

export function SettingsRight()
{
    const { clearCanvas } = useCanvas()
    return (
        <>
        <div className="settings-right">
        <button onClick={startGame(clearCanvas)} disabled={gameStarted}>Start Game</button>
        </div>
        </>
    )
}

function startGame(clearCanvas)
{
    return clearCanvas;
}