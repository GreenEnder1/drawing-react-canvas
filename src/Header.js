import React, {useEffect, useState} from 'react'
import { chosenTime } from './Settings';

export function Header()
{
    const [headerWord, setHeaderWord] = useState("Null");
    return(
        <>
        <div className="header-elements">
            <p>Options</p>
            <p>{headerWord}</p>
            <p><Timer/></p>
        </div>
        </>
    )
}

// TODO integrate with python word list
function getWord()
{
    return "Null";
}

function Timer()
{
    const timerStarted = false;
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
    return (
        <>
        {minutes}:{(seconds == 0) ? "00" : seconds}
        </>
    )
}

export function startTimer(startTime)
{

}