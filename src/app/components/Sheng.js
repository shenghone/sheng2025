"use client"
import {useRef} from "react";
import gsap from "gsap"

const Sheng = function (){
    const span1Ref = useRef(null);
    const span2Ref = useRef(null);
    const animate = (el)=>{
        gsap.to(el.current,{duration:0.7, width:"100%", backgroundColor:"#c1121f"})
    }

    const animateLeave = (el)=>{
        gsap.to(el.current,{duration:0.7, width:"0%", backgroundColor:"#fffff"})
    }
    return (
        <section className="flex absolute p-8 gap-4 w-screen">
                <div className="cursor-pointer"><h3 className="font-semibold tracking-widest hover:opacity-75 transition delay-150 duration-700 cursor-pointer uppercase text-white">sheng</h3></div>
                <div className="flex gap-4 self-end">
                    <div className="relative cursor-pointer uppercase hover:opacity-75 transition delay-150 duration-700">
                        <h3>about</h3>
                        <span ref={span1Ref} onMouseLeave={()=>animateLeave(span1Ref)} onMouseEnter={()=>animate(span1Ref)} className="absolute h-[2px] w-[100%] bg-white"></span>
                    </div>
                    <div className="relative cursor-pointer uppercase hover:opacity-75 transition delay-150 duration-700">
                        <h3>work</h3>
                        <span ref={span2Ref} onMouseLeave={()=>animateLeave(span2Ref)} onMouseEnter={()=>animate(span2Ref)} className="absolute h-[2px] w-[100%] bg-white"></span>
                    </div>
                </div>
        </section>
    )
}


export default Sheng;