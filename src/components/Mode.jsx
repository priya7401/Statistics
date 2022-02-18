import React, {useState} from "react";

export default function Mode (props) {

    const [mode, setMode] = useState(0);

    const arr = props.data;

    function calcMode() {
        // hash the elements with their count; get number with max freq
        const mp = new Map();
        for(var i=0; i<arr.length; i++)
            mp.set(arr[i], mp.get(arr[i]) ? mp.get(arr[i]) + 1 : 1);
        
        let maxFreq = 0;
        let ans = 0;

        for(const [key, value] of mp.entries()) {
            if(value > maxFreq) {
                maxFreq = value;
                ans = key;
            }
        }

        setMode(ans);
    }

    return (
        <div className="components">
            <button
                onClick={calcMode}
            >
                Calculate Mode
            </button>
            <h3>{mode.toFixed(6)}</h3>
        </div>
    )
}