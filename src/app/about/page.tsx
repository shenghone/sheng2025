"use client"
import {useEffect,useRef} from "react";
import Sheng from "../components/Sheng";
import { usePathname } from 'next/navigation'
import gsap from "gsap"

export default function Home() {
  const path = usePathname();
  const blackRef = useRef(null);
  const whiteRef = useRef(null)
  const redRef = useRef(null);
  useEffect(()=>{
    if(blackRef.current && redRef.current){

      gsap.to(blackRef.current,{
        width: "50%",
        duration: 1.6,
        delay:1.8
      })
      gsap.to(redRef.current,{
        width: "50%",
        duration: 1.5,
        delay: 2
      })
    }
  },[blackRef.current,redRef.current])
  return (
    <div className="grid relative h-[100vh] w-[100vw] font-[family-name:var(--font-geist-sans)]">
      <Sheng/>
      <section className="relative  w-[60%] h-[300px] grid place-self-center">
        <section className="absolute w-[100%] grid h-[100%] bg-white" ref={blackRef}>
          <section className="place-self-center">
            <h2 className="tracking-[0.2rem] text-[#747d8c] [&>div]:inline-block [&>div]:uppercase w-[100%]">
              <div>s</div>
              <div>h</div>
              <div>e</div>
              <div>n</div>
              <div>g</div>
              <div></div>
              <div>h</div>
              <div>o</div>
              <div>n</div>
              <div>g</div>
              <div></div>
              <div>t</div>
              <div>s</div>
              <div>a</div>
              <div>i</div>
            </h2>
          </section>
        </section>
        <section className="absolute h-[100%] bg-red-500 justify-self-end" ref={redRef}>

        </section>
        
      </section>
    </div>
  );
}
