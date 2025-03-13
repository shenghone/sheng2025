"use client"
import {useEffect, useState,useCallback} from "react";
export default ()=>{
    const [windowSize, setWindowSize] = useState({
        width : 0,
        height: 0
    })
    const resize =useCallback(()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    },[])
    useEffect(()=>{
        window.addEventListener("resize",resize)
        resize();
        return ()=>{
            window.removeEventListener("resize",resize);
        }
    },[resize])
    return windowSize;
}