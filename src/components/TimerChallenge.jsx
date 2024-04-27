import { useState } from "react";
export default function TimerChallenge({title , targetTime}) {
    const [timeExpired , setTimeExpired] = useState(false);
    const [timeStarted , setTimeStarted] = useState(false)
    function handleClick(){
        setTimeout(()=> {setTimeExpired(true);} , targetTime*1000);
        setTimeStarted(prev => !prev);
    }
    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={handleClick}>
                    {timeStarted ? 'stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeStarted ? 'active' : undefined}>
                {timeStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}