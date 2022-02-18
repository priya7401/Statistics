import React, {useState} from "react";

export default function StandardDev (props) {

    const [stdDev, setStdDev] = useState(0);

    const arr = props.data;

    function calcMean() {
        let sum = 0;
        for(var i=0; i<arr.length; i++) 
            sum += arr[i];
        return (sum/arr.length);
    }

    function calcStdDev() {
        let mean = calcMean();
        let sum = 0;
        for(var i=0; i<arr.length; i++) {
            sum += (arr[i] - mean)*(arr[i] - mean);
        }
        setStdDev(Math.sqrt(sum/(arr.length - 1)));
    }

    return (
        <div className="components">
            <button
                onClick={calcStdDev}
            >
                Calculate Standard Deviation
            </button>
            <h3>{stdDev.toFixed(6)}</h3>
        </div>
    )
}