import React, {useState} from "react";

export default function Mean (props) {

    const [mean, setMean] = useState(0);

    const arr = props.data;

    let sum = 0;

    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    function calcMean() {
        setMean(sum/arr.length);
    }

    return (
        <div className="components">
            <button
                onClick={calcMean}
            >
                Calculate Mean
            </button>
            <h3>{mean.toFixed(6)}</h3>
        </div>
    )
}