import React from "react";

export const FeedbackOptions =({good,neutral,bad})=>{
    return(
        <div>
        <ul>
            <li>Good:{good}</li>
            <li>Neutal:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:</li>
            <li>Positive feedback:</li>
        </ul>
    </div>
    )
}