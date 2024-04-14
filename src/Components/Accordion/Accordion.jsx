import React, { useState } from "react";
import "./Accordion.css";

function Accordion({qustion,ans1,ans2}) {
    const [accordExpant, setAccordExpant] = useState(true);

    function handleAccordClick() {
        setAccordExpant(!accordExpant);
    }

    return (
        <div className="container d-block">
            <div className="accordDiv w-100 mx-3 py-4 px-3 text-start mt-2" onClick={handleAccordClick}>
                <button className="btn w-100 d-flex justify-content-between p-0">
                    <p className="fs-3 m-0">{qustion }</p>
                    <p className="fs-3 m-0 p-0">{ accordExpant ? "+" : "-" }</p>
                </button>
            </div>
            <div className={`expantAccrod mx-3 py-4 px-3 w-100 ${accordExpant && "d-none slide-in-down"} `}>
                <p className="fs-4 m-0">{ ans1 }</p>
                <br />
                <p className="fs-4 m-0">{ ans2 }</p>
            </div>
        </div>
    );
}

export default Accordion;
