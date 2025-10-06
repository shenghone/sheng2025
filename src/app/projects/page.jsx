"use client";
import React, { useState,useRef,useEffect } from "react";
import {useQuery}  from "@apollo/client/react";
import {GET_PROJECTS} from "../graphql/queries";
import Image from 'next/image'
import Sheng from "../components/Sheng";
import gsap from "gsap";

const sampleP = [
  {
    Title: "Travel Japan",
    FrontEnd: "Next, GSAP, Tailwind",
    BackEnd: null,
    Description: "An experimental project on NextJs, ContextAPI and GSAP",
    Link:
      "/sample.jpeg",
    Status: true,
    Asset: "/sample.jpeg",
  },
  {
    Title: "Personal Portfolio",
    FrontEnd: "Next, GSAP, PIXI, Tailwind",
    BackEnd: "Express, GraphQL",
    Description:
      "A personal website to push my boundary, learn new skills and review what I've learned along the way.",
    Link:
      "/sample.jpeg",
    Status: true,
    Asset: "/sample.jpeg",
  },
];

function projects() {
  const {loading:ProjectStatus,error,data:ProjectData} = useQuery(GET_PROJECTS);
  const [currentProject, setCurrentProject] = useState(null);
  const [animationStatus, setDoneAnimation] = useState(false);
  const titleRef = useRef(null);
  const imageRef = useRef(null)
  const descriptionRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const blockerRef = useRef(null);
  const projectBarArea = useRef(null);
  const getPosition = (self,currentRef) =>{
    if(currentProject.index==self){
      gsap.to(currentRef.current,{
        y:-10,
     
        opacity: 0.6
      })
    }
  }
  useEffect(()=>{
    if(currentProject===null && ProjectData){
      setCurrentProject(ProjectData.Projects[0])
    }
  },[ProjectData])

  useEffect(()=>{
    gsap.set([...projectBarArea.current.children],{
      y:10,
      opacity:0
    })

    gsap.to([...projectBarArea.current.children], {
      y: 0,
      delay: 2,
      duration: 1,
      opacity: 1,
      stagger: {
        each: 0.8,
      },
    });
  },[ProjectData])
   //removed data printing
  useEffect(()=>{
    if(currentProject!=null){
      setDoneAnimation("animating")
      gsap.set(topRef.current,{
        y: 0,
        display:"block"
      })
      gsap.to(topRef.current,{
        y: "-50vh",
        duration: 1.7,
        display:"none"
      })
      gsap.set(bottomRef.current,{
        y:0,
        display:"block"
      })
      gsap.to(bottomRef.current,{
        y: "50vh",
        duration: 1.7,
        display:"none"
      })
      gsap.set(blockerRef.current,{
        y:"0%",
        display:"block"
      })
      gsap.to(blockerRef.current,{
        y:"-100%",
        duration:1.5,
        delay: 1.5,
        display:"none",
      })

      const t1 = gsap.timeline()
      const t2 = gsap.timeline()
      const t3 = gsap.timeline()
      const t4 = gsap.timeline();
      t1.set(titleRef.current,{
        y: -10,
        opacity:0,
        delay: 0,
      }).to(titleRef.current,{
        duration: 1,
        delay: 2.2,
        opacity: 1,
        y:0
      })
      t2.set(descriptionRef.current,{
        opacity:0,
        y:10,
        delay: 0,
      }).to(descriptionRef.current,{
        opacity: 1,
        y:0,
        duration: 1.4,
        delay:1.9
      })
      t3.set([frontendRef.current,backendRef.current],{
        opacity: 0,
      }).to([frontendRef.current,backendRef.current],{
        opacity: 1,
        duration: 2,
        delay: 3,
        onComplete: ()=>setDoneAnimation(true)
      })
      t4.set(imageRef.current,{
        opacity: 0,
        x: "20px",
      })
      t4.set(imageRef.current,{
        x:20,
        opacity: 0,
        display: "hidden"
      })
      t4.to(imageRef.current,{
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 2,
        display: "block"
      })
    
    }

  },[currentProject])

  return (
    <div className="grid relative lg:h-[100vh] w-[100vw] font-[family-name:var(--font-geist-sans)] md:grid-rows-[100px_calc(100vh-100px)] max-md:grid-rows-[100px_auto]">
      <Sheng />
      <section className="relative grid place-self-center overflow-hidden lg:min-h-[300px] lg:h-[60vh] max-md:min-h-[600px] max-md:h-[75vh] max-w-[70vw] row-span-1 row-start-2 lg:grid-rows-[325px_80px] sm:grid-rows-[500px_80px] grid-column-[1fr]">
        <section className="grid relative lg:mih-h-[450px] row-start-1 row-span-1 w-[100%]">
          <section ref={topRef} className="absolute bg-black w-[100%] h-[50%] z-999"></section>
          <section ref={bottomRef} className="absolute bg-black bottom-0 w-[100%] h-[50%] z-999"></section>
          <section className="w-[100%] h-[100%] bg-white absolute" ref={blockerRef}></section>
          {currentProject &&
            <>
            <section className="absolute w-[100%] sm:overflow-hidden h-[100%] z-9999 grid lg:grid-rows-[1fr] sm:grid-cols-[1fr] sm:grid-rows-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
              <section className="relative grid lg:gap-1 sm:place-items-end md:place-items-start md:place-content-center">
                   <h4 ref={titleRef} className="text-red-500 mb-2 opacity-0 tracking-wider text-4xl z-10">{currentProject.Title}</h4>
                   <h5 ref={descriptionRef} className="lg:text-2xl opacity-0 mb-1 text-[#747d8c] z-10">{currentProject.Description}</h5>
                   <h6 ref={frontendRef}className="z-10 opacity-0">Front-End: {currentProject.FrontEnd}</h6>
                   <h6 ref={backendRef} className="z-10 opacity-0">Back-End: {currentProject.BackEnd?currentProject.BackEnd:"none"}</h6>
              </section>
              <section className="relative w-[100%] h-[100%] lg:h-[400px] sm:h-[400px] sm:p-4">
                  <Image
                    ref={imageRef}
                    src={currentProject.Asset}
                    width={400}
                    height={400}
                    alt={currentProject.Description}
                    className="w-[100%] h-[100%] opacity-0 object-contain duration-400 cursor-pointer hover:blur-xs"
                    onClick={()=> window.open(currentProject.Link, '_blank', 'noopener,noreferrer')}
                />
              </section>
            </section>
            </>
          }
          {(!currentProject && ProjectStatus) && <section className="z-9999 absolute w-[100%] h-[100%] grid place-items-center"><h4 className="text-2xl text-white tracking-widest">loading</h4></section>  }
        </section>
        <section ref={projectBarArea} className="flex relative h-[8px] w-[70vw] m-[auto] justify-content-center z-1000">
          {(!ProjectStatus && ProjectData) && ProjectData.Projects.map((self, index) => {
              return (
                <div
                  onClick={(animationStatus===true||animationStatus===false)?() => setCurrentProject({...self,index}):()=>{}}
                  key={index}
                  className={"bg-red-500 w-[70px] h-[100%] cursor-pointer hover:scale-90 hover:opacity-50 "+(index===0?"ml-0 ":"ml-[15px] ") + (currentProject?.index===index?"scale-80":"scale-100")}
                ></div>
              );
          })}
        </section>
      </section>
    </div>
  );
}

export default projects;
