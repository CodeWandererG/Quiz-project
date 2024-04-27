import { useState } from "react";

export function Player(){
    const [playerName , setPlayerName] = useState("");
    const [submitted , setSubmitted] = useState(false);
    const handleChange = (event) =>{
        setSubmitted(false)
        setPlayerName(event.target.value);
    }

    const handleClick = () =>{
        setSubmitted(true);
    }
    return (
        <section id="player">
            <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
            
            <p>
                <input type="text" onChange={handleChange} value={playerName}></input>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}