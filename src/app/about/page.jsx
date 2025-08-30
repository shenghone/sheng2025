"use client"
import {useEffect,useRef,useState} from "react";
import Sheng from "../components/Sheng";
import {useRandomtext}  from "../customHook";
import gsap from "gsap"


export default function Home() {
  //const path = usePathname();
  const blackRef = useRef(null);
  const nameRef = useRef(null);
  const meCateRef = useRef(null);
  const bioRef = useRef(null);
  //const whiteRef = useRef(null)
  const redRef = useRef(null);
  const [index,setIndex] = useState(1);
  useRandomtext(nameRef, index);
  const getColour=(idx,self)=>{
    if(idx===self){
      return "text-white"
    }
    return "text-black"
  }
  const contentGenerator = (idx) => {
    if (idx === 1) {
      return (
        <section className="grid">
          <h6 ref={bioRef} className="text-[rgba(27,27,31,0.9)] font-[500] m-[auto] text-justify pl-[2rem] pr-[2rem]">
          Born and raised in Taiwan, Sheng Hung Tsai moved to Canada in 2014. He
          loves all the beautiful things made with code. He is a creative
          thinker, a cat lover and a web developer .
        </h6>
        </section>
      );
    } else if (idx === 2) {
      return (
        <div ref={bioRef} className="place-self-center text-justify">
          <h5>Seneca College 2019</h5>
          <h6 className="text-[rgba(27,27,31,0.9)] font-[400]" >
            Diploma in Computer Programmer
          </h6>
          <h5>Fu-Jen Univerisity 2013</h5>
          <h6 className="text-[rgba(27,27,31,0.9)] font-[400]" >
            BBA in International Business
          </h6>
        </div>
      );
    } else {
      return (
        <div ref={bioRef} className="place-self-center text-justify">
          <h5>Front end</h5>
          <h6 style={{ fontWeight: "400", color: "rgba(27,27,31,0.9)" }}>
            React, Pixi, Next, GSAP, Apollo Client
          </h6>
          <h5>Back end</h5>
          <h6 style={{ fontWeight: "400", color: "rgba(27,27,31,0.9)" }}>
            Node, Express, GraphQL, MongoDB
          </h6>
        </div>
      );
    }
  };
  useEffect(()=>{
    if(blackRef.current && redRef.current && meCateRef){

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
      gsap.to(meCateRef.current,{
        opacity: 1,
        delay: 3.5,
        duration: 0.5,
        display: "block"
      })
    }
  },[blackRef.current,redRef.current,meCateRef.current])
  return (
    <div className="grid relative h-[100vh] w-[100vw] font-[family-name:var(--font-geist-sans)]">
      <Sheng/>
      <section className="relative  w-[60%] h-[300px] grid place-self-center">
        <section className="absolute w-[100%] grid h-[100%] bg-white" ref={blackRef}>
          <section className="place-self-center">
            <h2 ref={nameRef} className="tracking-[0.4rem] text-[1.1rem] font-bold text-[#747d8c] [&>div]:inline-block [&>div]:uppercase w-[100%]">
              <div>s</div>
              <div>h</div>
              <div>e</div>
              <div>n</div>
              <div>g</div>

              <div className="text-[#000]">h</div>
              <div className="text-[#000]">u</div>
              <div className="text-[#000]">n</div>
              <div className="text-[#000]">g</div>
              
              <div>t</div>
              <div>s</div>
              <div>a</div>
              <div>i</div>
            </h2>
          </section>
        </section>
        <section className="absolute grid-cols-[1fr] grid-rows-[auto_1fr] h-[100%] bg-red-500 justify-self-end" ref={redRef}>
          <div ref={meCateRef} className="opacity-0 text-right hidden h-[100%]">
            <section className="[&>p]:inline-block [&>p]:ml-[0.4rem] [&>p]:mt-[0.4rem]">
                  <p className={`text-black hover:opacity-60 cursor-pointer ${getColour(index,1)}`} onClick={() => setIndex(1)} >me</p>
                  <p className={`text-black hover:opacity-60 cursor-pointer ${getColour(index,2)}`} onClick={() => setIndex(2)}>education</p>
                  <p className={`text-black hover:opacity-60 cursor-pointer mr-[0.4rem] ${getColour(index,3)}`} onClick={() => setIndex(3)}>skills</p>
            </section>
            <section className="grid w-[100%] h-[80%]">
              {contentGenerator(index)}
            </section>
          </div>
        </section>
        
      </section>
    </div>
  );
}
