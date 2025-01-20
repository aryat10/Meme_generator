import React from "react";
import { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import TextPage from "../components/text";
import { exportComponentAsJPEG } from "react-component-export-image";
import './Edit.css'

const EditPage = () =>{


    const [params] = useSearchParams();
    console.log(params.get('url'));
    const [count,setCount] = useState(0);
    const addText = () =>{setCount(count +1)}
    const memeRef = createRef();


    return(
        <div ref={memeRef} className="meme mt-5 mb-5">
            <div>
             <img src={params.get('url')} width = "250px" alt=""/>
             {
                Array(count).fill(0).map(e => <TextPage />)
             }
            </div>
            <button onClick={addText}>Add Text</button>
            <button variant ="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Download</button>
        </div>
    )
}

export default EditPage;