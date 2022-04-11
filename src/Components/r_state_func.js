import { useState,useEffect } from "react";
import data from '../my.json';


export default function Func_state()
{
    const x = 20;
    const [A,setA] = useState({n:40});

    const Displ = ()=>{
        setA({n:90});
    }

    // will did mount
    useEffect(()=>{
        console.log("Did Mount");
    },[])

    // useEffect(()=>{
    //     console.log("Did Update");
    // },[null,null])

    // did update
    useEffect(()=>{
        return ()=>{
            console.log("did update")
        }
    })
    // will un mount
    useEffect(()=>{
        return ()=>{
            console.log("will unmount")
            alert("hello")
        }
    },[])

    return(
        <>
            <h1>{x}</h1>
            <button onClick={()=>Displ()}>Click me</button>
            <h2>{A.n}</h2>
            <ul>
                {data.employee.map(v=>
                    
                    <li key={v.id}>{v.address}</li>
                )}
            </ul>
        </>
    )
}