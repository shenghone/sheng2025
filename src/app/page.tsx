"use client";

import { useState, useRef } from "react";
import Corona from "./components/Corona";
import Sheng from "./components/Sheng";
import gsap from "gsap";

export default function Home() {
  const [completed, setCompleted] = useState(false);
  const [animEnded, setAnimEnded] = useState(false);
  const leftRef = useRef(null);
  const topRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const blockerRef = useRef(null);
  const yellowRef = useRef(null);
  const redRef = useRef(null);

  const triggerAnim = () => {
    const tl = gsap.timeline();
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();
    tl.to(leftRef.current, { duration: 0.5, height: "100%" })
      .to(topRef.current, { duration: 0.5, width: "100%" })
      .to(rightRef.current, { duration: 0.5, height: "100%" })
      .to(bottomRef.current, {
        duration: 0.5,
        width: "100%",
        onComplete: () => {
          setAnimEnded(false);
        },
      });
    //https://tympanus.net/codrops/2016/06/01/multi-layer-page-reveal-effects/
    t1.to(blockerRef.current, {
      keyframes: {
        "0%": { transform: "translate3d(0, 0, 0)" },
        "25%, 75%": { transform: "translate3d(0, -100%, 0)" }, // finetune with individual eases
        "100%": { transform: "translate3d(0, -200%, 0)" },
        easeEach: "expo.inOut", // ease between keyframes
      },
      duration: 1.3,
      delay: 2,
      onComplete: () => setCompleted(true),
    });
    t2.to(yellowRef.current, {
      keyframes: {
        "0%, 12.5%": { transform: "translate3d(0, 0, 0)" },
        "37.5%, 62.5%": { transform: "translate3d(0, -100%, 0)" }, // finetune with individual eases
        "87.5%, 100%": { transform: "translate3d(0, -200%, 0)" },
        easeEach: "expo.inOut", // ease between keyframes
      },
      duration: 1.5,
      delay: 2.2,
    });
    t3.to(redRef.current, {
      keyframes: {
        "0%, 25%": { transform: "translate3d(0, 0, 0)" },
        "75%, 100%": { transform: "translate3d(0, -200%, 0)" },
        easeEach: "expo.inOut", // ease between keyframes
      },
      duration: 1.7,
      delay: 2.3,
    });
  };
  const mouseLeave = () => {
    const tl = gsap.timeline();
    if (!animEnded) {
      tl.to(leftRef.current, { duration: 0.5, height: "0%" })
        .to(topRef.current, { duration: 0.5, width: "0%" })
        .to(rightRef.current, { duration: 0.5, height: "0%" })
        .to(bottomRef.current, {
          duration: 0.5,
          width: "0%",
          onComplete: () => {
            setAnimEnded(true);
          },
        });
    }
  };

  return (
    <div className="grid relative h-[100vh] w-[100vw] overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {!completed && !animEnded ? (
        <section
          ref={blockerRef}
          className="absolute grid bg-white w-[100%] h-[100%] z-999"
        >
          <section className="relative place-self-center">
            <div
              ref={leftRef}
              className="bg-black w-[1px] h-[0%] scale-110 translate-x-[-15px] absolute"
            ></div>
            <div
              ref={topRef}
              className="bg-black w-[0%] h-[1px] scale-120 translate-y-[-15px] absolute"
            ></div>
            <div
              ref={rightRef}
              className="bg-black w-[1px] h-[0%] scale-110 translate-x-[15px] right-0 absolute"
            ></div>
            <div
              ref={bottomRef}
              className="bg-black w-[0%] h-[1px] scale-120 translate-y-[15px] bottom-0 absolute"
            ></div>
            <h4
              onMouseLeave={() => mouseLeave()}
              onClick={() => triggerAnim()}
              className="text-black text-[1.2rem] tracking-[0.4rem] cursor-pointer hover:opacity-60 hover:tracking-[0.5rem] duration-350"
            >
              enter
            </h4>
          </section>
        </section>
      ) : null}
      <section
        ref={yellowRef}
        className="absolute translate-y-[100%] w-[100vw] h-[100vh] bg-yellow-600 z-99"
      />
      <section
        ref={redRef}
        className="absolute translate-y-[100%] w-[100vw] h-[150vh] bg-red-500 z-9"
      />
      {completed && (
        <>
          <Sheng />
          <Corona />
        </>
      )}
      {/*<div className="absolute left-0 w-[60%] h-[100%] bg-black"></div>
      <div className="absolute right-0 w-[40%] h-[100%] bg-red-500"></div>*/}
    </div>
  );
}
