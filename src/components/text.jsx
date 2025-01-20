import React, {useState} from "react";
import Draggable from "react-draggable";
const TextPage = () =>{
    const [editMode,setEditMode] = useState(false);
    
    const [val,setVal] = useState("Double Click to Edit your meme!!");
   
    return(
     <Draggable>
        {
            editMode ? (<input onDoubleClick={(e)=> setEditMode(false)} 
            value={val} 
            onChange={(e) => setVal(e.target.value)}  />
            ) : (
             <h1 onDoubleClick={e=> setEditMode(true)}>{val}</h1>
            )}
     </Draggable>   
    )
}

<<<<<<< HEAD
export default TextPage;
=======
export default TextPage;
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
