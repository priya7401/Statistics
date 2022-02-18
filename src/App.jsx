import React, { useEffect, useState } from "react";
import Mean from "./components/Mean";
import Median from "./components/Median";
import Mode from "./components/Mode";
import StandardDev from "./components/StandardDev";

export default function App () {

    const [num, setNum] = useState(0);  //state for any new additions
    const [arr, setArr] = useState([]);   //state to make changes(add new num) to the array
    const [data,changeData] = useState(false);

    function handleAddNum(event) {
        setNum(event.target.value);
    }

    function addNewNum() {
        // insert the new number into the arr
        setArr(prevNums => [...prevNums,parseInt(num)]);
    }

    useEffect( () => {
        async function getData() {
            if(data) {
                const res = await fetch("../data-1234.json");
                const data = await res.json();
                setArr(data.data);
            }
            else {
                const res = await fetch("../data-4321.json");
                const data = await res.json();
                setArr(data.data);
            }
        }

        getData();
    },[data])

    function changeDataSet() {
        changeData(prevData => !prevData);
    }

    return (
        <div className="app-components"> 
            <button onClick = {changeDataSet}>
                Click here to generate a new dataset 
            </button>
            <br/>
            <input 
                type="text"
                placeholder="Enter the number"
                value={num}
                onChange={handleAddNum}
            />
            <button
                onClick={addNewNum}>
                Add a number
            </button>
            <Mean data={arr}/>
            <Median data={arr}/>
            <Mode data={arr}/>
            <StandardDev data={arr}/>
        </div>
    )
}