import React from "react";
import Class from "./Class"
export default function Fun() {
    return (
        <div>
            <h1>Fun </h1>
            {[1, 2, 3, 4, 5].map((e) => {
                return <Class />;
            })}
            <hr />
        </div>
    )
}
