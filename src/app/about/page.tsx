"use client";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../util/useWindowSize";
import Sheng from "../components/Sheng";
import { useRandomtext } from "../customHook";
import gsap from "gsap";

import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Mail01FreeIcons } from "@hugeicons/core-free-icons";

export default function Home() {
  //const path = usePathname();
  const blackRef = useRef(null);
  const size = useWindowSize();
  const nameRef = useRef(null);
  const meCateRef = useRef<HTMLDivElement>(null);
  const meSectionRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const iconDivRef = useRef<HTMLDivElement>(null);
  //const whiteRef = useRef(null)
  const redRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  useRandomtext(nameRef, index);
  console.log(size);
  const getColour = (idx: number, self: number) => {
    if (idx === self) {
      return "text-white";
    }
    return "text-black";
  };
  useEffect(() => {
    if (iconDivRef.current && iconDivRef.current.children) {
      gsap.set([...iconDivRef.current.children], {
        y: 10,
        opacity: 0,
      });
      gsap.to([...iconDivRef.current.children], {
        y: 0,
        delay: 4,
        duration: 1,
        opacity: 1,
        stagger: {
          each: 0.8,
        },
      });
    }
    if (animated && meSectionRef.current && redRef.current) {
      redRef.current.style.zIndex = "-1";
      gsap.set([...meSectionRef.current.children], {
        y: 10,
        opacity: 0,
      });
      gsap.to([...meSectionRef.current.children], {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: {
          each: 0.8,
        },
      });
    }
  }, [animated]);
  const handleTo = (externalUrl: string, type: string): void => {
    if (type === "url") {
      window.open(externalUrl, "_blank"); // Opens in a new tab/window
    } else if (type === "mail") {
      window.location.href = `mailto:${externalUrl}`;
    }
  };
  const contentGenerator = (idx: number) => {
    if (idx === 1) {
      return (
        <section className="grid">
          <h6
            ref={bioRef}
            className="text-[rgba(27,27,31,0.9)] font-[500] m-[auto] text-justify pl-[2rem] pr-[2rem]"
          >
            Born and raised in Taiwan, Sheng Hung Tsai moved to Canada in 2014.
            He loves all the beautiful things made with code. He is a creative
            thinker, a cat lover and a web developer .
          </h6>
        </section>
      );
    } else if (idx === 2) {
      return (
        <div ref={bioRef} className="place-self-center text-justify">
          <h5>Seneca College 2019</h5>
          <h6 className="text-[rgba(27,27,31,0.9)] font-[400]">
            Diploma in Computer Programmer
          </h6>
          <h5>Fu-Jen Univerisity 2013</h5>
          <h6 className="text-[rgba(27,27,31,0.9)] font-[400]">
            BBA in International Business
          </h6>
        </div>
      );
    } else {
      return (
        <div ref={bioRef} className="place-self-center text-justify">
          <h5>Front end</h5>
          <h6 style={{ fontWeight: "400", color: "rgba(27,27,31,0.9)" }}>
            React, Redux, Pixi, Next, GSAP, Apollo Client
          </h6>
          <h5>Back end</h5>
          <h6 style={{ fontWeight: "400", color: "rgba(27,27,31,0.9)" }}>
            Node, Express, GraphQL, MongoDB
          </h6>
        </div>
      );
    }
  };

  useEffect(() => {
    if (blackRef.current && redRef.current && meCateRef.current) {
      gsap.to(blackRef.current, {
        width: size.width >= 1024 ? "50%" : "",
        height: size.width < 1024 ? "50%" : "",
        duration: 1.6,
        delay: 1.8,
      });

      gsap.set(redRef.current, {
        height: size.width < 1024 ? 0 : "100%",
        opacity: 0,
        zIndex: -1,
      });

      gsap.to(redRef.current, {
        width: size.width >= 1024 ? "50%" : "",
        height: size.width < 1024 ? "100%" : "",
        transformOrigin: size.width < 1024 ? "bottom" : "right",
        duration: 1.5,
        delay: 2,
        opacity: size.width < 1024 ? 1 : "",
      });
      gsap.to(meCateRef.current, {
        opacity: 1,
        delay: 3.5,
        duration: 0.5,
        display: "block",
        onComplete: () => setAnimated(true),
      });
    }
  }, [size]);

  return (
    <div className="grid relative h-[100vh] w-[100vw] font-[family-name:var(--font-geist-sans)]">
      <Sheng />
      <section className="relative z-0 w-[60%] lg:h-[300px] sm:h-[400px] grid lg:grid-rows-[1fr] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr] place-self-center  after:z-1">
        <section
          className="relative sm:row-start-1 sm:row-span-2 md:col-start-1 md:col-span-2  w-[100%] grid bg-white z-1"
          ref={blackRef}
        >
          <section
            ref={iconDivRef}
            className="p-1 bottom-0 absolute flex gap-1 w-[100%] z-9"
          >
            <div className="opacity-0">
              <HugeiconsIcon
                icon={GithubIcon}
                size={14}
                color="#000000"
                onClick={() => handleTo("https://github.com/shenghone", "url")}
                className="hover:opacity-75 hover:cursor-pointer"
              />
            </div>
            <div className="opacity-0">
              <HugeiconsIcon
                icon={Mail01FreeIcons}
                size={14}
                color="#000000"
                onClick={() => handleTo("https://shenghone@gmail.com", "mail")}
                className="hover:opacity-75 hover:cursor-pointer"
              />
            </div>
          </section>
          <section className="place-self-center absolute">
            <h2
              ref={nameRef}
              className="tracking-[0.4rem] text-[1.1rem] font-bold text-[#747d8c] [&>div]:inline-block [&>div]:uppercase w-[100%]"
            >
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
        <section
          className="absolute grid-cols-[1fr] isolate lg:row-start-1 z-[-1] lg:col-start-1 sm:row-start-2 sm:row-span-1 sm:col-start-1 grid-rows-[auto_1fr] h-[100%] bg-red-500 justify-self-end"
          ref={redRef}
        >
          <div
            ref={meCateRef}
            className="text-right hidden isolate z-99 h-[100%]"
          >
            <section
              ref={meSectionRef}
              className="[&>p]:inline-block [&>p]:ml-[0.4rem] [&>p]:mt-[0.4rem] absolute right-0"
            >
              <p
                className={`text-black opacity-0 hover:opacity-60 cursor-pointer ${getColour(
                  index,
                  1
                )}`}
                onClick={() => setIndex(1)}
              >
                me
              </p>
              <p
                className={`text-black opacity-0 hover:opacity-60 cursor-pointer ${getColour(
                  index,
                  2
                )}`}
                onClick={() => setIndex(2)}
              >
                education
              </p>
              <p
                className={`text-black opacity-0 hover:opacity-60 cursor-pointer mr-[0.4rem] ${getColour(
                  index,
                  3
                )}`}
                onClick={() => setIndex(3)}
              >
                skills
              </p>
            </section>
            <section className="grid w-[100%] h-[100%]">
              {contentGenerator(index)}
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}
