import React, { useState } from "react";
import "./Style.css";

export default function Number() {
    let [Count, Setcount] = useState(0);


    return (
        <div className="main">
            <h1 className="Font"> React Web</h1>

            <h1 className="Count">{Count}</h1>

            <div className="center">
                <button className="btn1" onClick={() => Setcount(Count + 1)}>Increment</button>
                <button className="btn2" onClick={() => Setcount(Count - 1)}>Decrement</button>
            </div>

            <div className="middle">
                <button className="btn3" onClick={() => Setcount(0)}>Reset</button>
            </div>

        </div>
    );

}