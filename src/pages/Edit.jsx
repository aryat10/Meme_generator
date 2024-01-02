import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextPage from "../components/text";
const EditPage = () =>{
    const [params] = useSearchParams();
    console.log(params.get('url'));
    const [count,setCount] = useState(0);
    const addText = () =>{setCount(count +1)}
    return(
        <div>
            <div>
             <img src={params.get('url')} width = "250px" alt=""/>
             {
                Array(count).fill(0).map(e => <TextPage />)
             }
            </div>
            <button onClick={addText}>Add Text</button>
        </div>
    )
}

export default EditPage;
