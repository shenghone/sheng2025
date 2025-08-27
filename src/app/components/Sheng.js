"use client"
import {useRef} from "react";
import {usePathname} from "next/navigation";
import Link from 'next/link'
import gsap from "gsap"

const Sheng = function (){
    const path = usePathname();
    const span1Ref = useRef(null);
    const span2Ref = useRef(null);
    const span3Ref = useRef(null);
    const animate = (el)=>{
        gsap.to(el.current,{duration:0.7, width:"100%"})
    }

    const checkPath =(p,type)=>{
       
        if(p===path){
            if(type==="text"){
                    return "text-red-500"
            }else if(type==="bar"){
                return "bg-red-500"
            }else if(type==="active"){
                return true
            }
        
        }else {
            if(type==="text"){
                return "text-white"
            }else if(type==="bar"){
                return "bg-transparent"
            }
            else if(type==="active"){
                return false
            }
        }
     
    
    }
    const handleLeave = (el)=>{
        gsap.to(el.current,{
            duration:1,
            width: "0%",
        });
    }
    return (
        <section className="flex font-semibold absolute p-8 gap-4 w-screen z-999">
                <Link href="/" className="cursor-pointer "><h3 className="font-semibold tracking-widest hover:opacity-75 transition delay-150 duration-700 cursor-pointer uppercase text-white">sheng</h3></Link>
                <div className="flex absolute right-0 pr-8 gap-4 box-border">
                    <Link  data-active={checkPath("/about","active")} href="/about" onMouseEnter={()=>animate(span1Ref)}  onMouseLeave={()=>handleLeave(span1Ref)} className={`${checkPath("/about","text")} relative cursor-pointer uppercase hover:opacity-75 transition delay-150 duration-700`}>
                        about
                        <span ref={span1Ref}  className={`${checkPath("/about","bar")} absolute left-0 bottom-0 h-[2px] w-[0%]`}></span>
                    </Link>
                    <Link  data-active={checkPath("/projects","active")} href="/projects" onMouseEnter={()=>animate(span2Ref)}  onMouseLeave={()=>handleLeave(span2Ref)} className={`${checkPath("/projects","text")} relative cursor-pointer uppercase hover:opacity-75 transition delay-150 duration-700`}>
                        projects
                        <span ref={span2Ref} className={`${checkPath("/projects","bar")} absolute left-0 bottom-0 h-[2px] w-[0%]`}></span>
                    </Link>
                    <Link  data-active={checkPath("/work","active")} href="/work" onMouseEnter={()=>animate(span3Ref)}  onMouseLeave={()=>handleLeave(span3Ref)} className={`${checkPath("/work","text")} relative cursor-pointer uppercase hover:opacity-75 transition delay-150 duration-700`}>
                        work
                        <span ref={span3Ref} className={`${checkPath("/work","bar")} absolute left-0 bottom-0 h-[2px] w-[0%]`}></span>
                    </Link>
                </div>
        </section>
    )
}


export default Sheng;