<<<<<<< HEAD
import React, {useEffect, useState} from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";


const HomePage = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        getAllMemes().then(memes=>setData(memes.data.memes));
    })
    return(
        <div className="row">
            {data.map((el)=>(
                <MemeCard img={el.url} title={el.name} />
            ))}
        </div>
    )
}

export default HomePage;
=======
import React, {useEffect, useState} from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const HomePage = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        getAllMemes().then(memes=>setData(memes.data.memes));
    })
    return(
        <div className="row">
            {
                data.map((el)=>(
                <MemeCard img={el.url} title={el.name} />
            ))}
        </div>
    )
}

export default HomePage;
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
