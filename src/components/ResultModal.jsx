import { forwardRef } from "react"

const ResultModal =  forwardRef(function ResultModal({targetTime , result},ref){
    return <>
        <dialog className="result-modal" ref={ref}>
            <h2>You {result}</h2>
            <p>Your target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
        
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    </>
})

export default ResultModal;