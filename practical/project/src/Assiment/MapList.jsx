import React from "react";
import "./ListMap.css"

export default function map() {
    let array = ["Wake up at 5 o'clock", "Go for bath", "Go for khidmat", " Come home", "Go to classes at 7 o'clock", "After classes go to collage ", " Have lunch with friends", "Come home take rest ", " Go to job at 5 o'clock", "Leave at 9 o'clock", " After job go outside with friends an doing chill "];


    return (
        <div>

            <h1 className="title">MY DAILY RUTINE </h1>
            <hr />
            <ul>
                {array?.map((e, i) => {
                    return (
                        <div key={i}>
                            <li className="list">
                                {i + 1}. {e}
                            </li>
                            <hr />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

