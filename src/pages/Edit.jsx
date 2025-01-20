import React from "react";
<<<<<<< HEAD
import { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import TextPage from "../components/text";
import { exportComponentAsJPEG } from "react-component-export-image";
import './Edit.css'

const EditPage = () =>{


=======
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextPage from "../components/text";
const EditPage = () =>{
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
    const [params] = useSearchParams();
    console.log(params.get('url'));
    const [count,setCount] = useState(0);
    const addText = () =>{setCount(count +1)}
<<<<<<< HEAD
    const memeRef = createRef();


    return(
        <div ref={memeRef} className="meme mt-5 mb-5">
=======
    return(
        <div>
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
            <div>
             <img src={params.get('url')} width = "250px" alt=""/>
             {
                Array(count).fill(0).map(e => <TextPage />)
             }
            </div>
            <button onClick={addText}>Add Text</button>
<<<<<<< HEAD
            <button variant ="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Download</button>
=======
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
        </div>
    )
}

<<<<<<< HEAD
export default EditPage;
=======
export default EditPage;
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
