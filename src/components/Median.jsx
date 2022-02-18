import React, {useState} from "react";

export default function Median (props) {

    const [median, setMedian] = useState(0);

    const arr = props.data;

    function calcMedian() {
        const n = arr.length;
        arr.sort(function(a, b){return b - a});

        if(n%2 === 0) 
            setMedian(arr[n/2]);
        else
            setMedian((arr[(n - 1)/2] + arr[(n + 1)/2]) / 2)
    }

    return (
        <div className="components">
            <button
                onClick={calcMedian}
            >
                Calculate Median
            </button>
            <h3>{median.toFixed(6)}</h3>
        </div>
    )
}