import React, {useState, useCallback}  from "react";
import {useNavigate} from 'react-router-dom'

export const Homepage = ()=>{
    const navigate= useNavigate()
    const [value ,setValue]=useState();

    const handleJoinRoom =useCallback(()=>{
        navigate (`/room/${value}`)

    },[navigate,value])

    
    return (
    <div>
        <input 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        type="text" 
        placeholder="Enter Room Code" 
        />
        <button onClick={handleJoinRoom}>Join </button>
        </div>
        )
}








