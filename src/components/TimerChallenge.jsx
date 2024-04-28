import { useState,useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({title , targetTime}) {
    const [timeExpired , setTimeExpired] = useState(false);
    const [timeStarted , setTimeStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleClick(){
        timer.current = setTimeout(()=> {
            setTimeExpired(true);
            dialog.current.show();
        } , targetTime*1000);
        setTimeStarted(prev => !prev);
    }

    function handleStop(){
        clearTimeout(timer.current);
        dialog.current.show();
    }
    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timeStarted ?  handleStop :handleClick}>
                        {timeStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timeStarted ? 'active' : undefined}>
                    {timeStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}