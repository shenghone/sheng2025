"use client";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../util/useWindowSize";
import Sheng from "../components/Sheng";
import { useRandomtext } from "../customHook";
import gsap from "gsap";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Mail01FreeIcons } from "@hugeicons/core-free-icons";

const About = () => {
  const whiteRef = useRef<HTMLDivElement | null>(null);
  const redRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const iconDivRef = useRef<HTMLDivElement | null>(null);
  const bioRef = useRef<HTMLHeadingElement | null>(null);
  const meCateRef = useRef<HTMLDivElement | null>(null);
  const meSectionRef = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const { width } = useWindowSize();
  useRandomtext(nameRef, currentIndex);
  const getColour = (idx: number, self: number) => {
    if (idx === self) {
      return "text-white";
    }
    return "text-black";
  };
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
            className="text-[rgba(27,27,31,0.9)] max-sm:text-sm font-[500] m-[auto] text-justify pl-[2rem] pr-[2rem]"
          >
            Born and raised in Taiwan, Sheng Hung Tsai moved to Canada in 2014.
            He loves all the beautiful things made with code. He is a creative
            thinker, a cat lover and a web developer .
          </h6>
        </section>
      );
    } else if (idx === 2) {
      return (
        <div
          ref={bioRef}
          className="max-sm:text-sm place-self-center text-justify"
        >
          <h5>Seneca College 2019</h5>
          <h6 className="text-[rgba(27,27,31,0.9)]  font-[400]">
            Diploma in Computer Programmer
          </h6>
          <h5>Fu-Jen Univerisity 2013</h5>
          <h6 className="text-[rgba(27,27,31,0.9)]  font-[400]">
            BBA in International Business
          </h6>
        </div>
      );
    } else {
      return (
        <div
          ref={bioRef}
          className="place-self-center max-sm:text-sm max-sm:p-5 text-justify"
        >
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
    if (
      animated &&
      meSectionRef.current &&
      meCateRef.current &&
      iconDivRef.current
    ) {
      gsap.set([...iconDivRef.current.children], {
        y: 10,
        opacity: 0,
      });
      gsap.to([...iconDivRef.current.children], {
        y: 0,
        delay: 2,
        duration: 1,
        opacity: 1,
        stagger: {
          each: 0.8,
        },
        zIndex: 999999,
      });
      gsap.set([...meSectionRef.current.children], {
        y: 10,
        opacity: 0,
      });
      gsap.to(meCateRef.current, {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        display: "block",
        zIndex: 999,
      });
      gsap.to([...meSectionRef.current.children], {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1,
        stagger: {
          each: 0.8,
        },
      });
    }
  }, [animated, width]);
  useEffect(() => {
    setAnimated(false);
    if (width !== 0 && whiteRef.current && redRef.current) {
      if (width >= 768) {
        gsap.fromTo(
          whiteRef.current,
          { width: "100%", height: "100%" },

          { width: "50%", height: "100%", duration: 1.5, delay: 1 }
        );

        gsap.fromTo(
          redRef.current,
          {
            width: "0%",
            height: "100%",
          },
          {
            width: "50%",
            height: "100%",
            duration: 1.2,
            delay: 1.45,
            onComplete: () => setAnimated(true),
          }
        );
      } else if (width < 768) {
        gsap.fromTo(
          whiteRef.current,
          { height: "100%", width: "100%" },
          { height: "50%", width: "100%", duration: 1.5, delay: 1 }
        );
        gsap.fromTo(
          redRef.current,
          {
            height: "0%",
            width: "100%",
          },
          {
            height: "50%",
            width: "100%",
            duration: 1.2,
            delay: 1.45,
            onComplete: () => setAnimated(true),
          }
        );
      }
    }
  }, [width]);
  return (
    <div className="relative grid h-[auto] w-[100vw] max-md:overflow-y-scroll font-[family-name:var(--font-geist-sans)] md:grid-rows-[100px_calc(100vh-100px)] max-md:grid-rows-[100px_auto]">
      <Sheng />
      <div className="relative grid overflow-y-scroll row-start-2 md:row-start-1 md:row-span-2 w-[100%] min-h-[600px] md:h-[100vh] place-items-center">
        <div className="relative max-md:mb-[100px] w-[65vw] md:w-[60vw] h-[600px] md:h-[300px] bg-black justify-self-center after:content-[''] after:border-box after:absolute after:w-[100%] after:h-[100%] after:outline-[1px] after:outline-black after:outline-offset-[-3px] after:outline-solid after:z-99">
          <div
            ref={whiteRef}
            className="absolute max-md:top-0 md:left-0 md:h-[100%] w-[100%] bg-[#cecece]"
          >
            <section
              ref={iconDivRef}
              className="p-1 bottom-0 absolute flex gap-1 w-[100%] z-99999"
            >
              <div className="opacity-0">
                <HugeiconsIcon
                  icon={GithubIcon}
                  size={14}
                  color="#000000"
                  onClick={() =>
                    handleTo("https://github.com/shenghone", "url")
                  }
                  className="hover:opacity-75 hover:cursor-pointer"
                />
              </div>
              <div className="opacity-0">
                <HugeiconsIcon
                  icon={Mail01FreeIcons}
                  size={14}
                  color="#000000"
                  onClick={() =>
                    handleTo("https://shenghone@gmail.com", "mail")
                  }
                  className="hover:opacity-75 hover:cursor-pointer"
                />
              </div>
            </section>
            <section className="w-[100%] h-[100%] grid place-items-center">
              <h2
                ref={nameRef}
                className="text-center tracking-[0.4rem] max-sm:text-sm text-[1.1rem] font-bold text-[#747d8c] [&>div]:inline-block [&>div]:uppercase w-[100%]"
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
          </div>
          <div
            ref={redRef}
            className="absolute max-md:bottom-0 max-md:w-[100%] md:right-0 md:w-[0%] bg-red-500 h-[0px] md:h-[100%]"
          >
            {animated && (
              <>
                <div
                  ref={meCateRef}
                  className="absolute text-right hidden z-99 h-[100%] w-[100%]"
                >
                  <section
                    ref={meSectionRef}
                    className="[&>p]:inline-block [&>p]:ml-[0.4rem] [&>p]:mt-[0.4rem] absolute right-0"
                  >
                    <p
                      className={`text-black opacity-0 hover:opacity-60 cursor-pointer ${getColour(
                        currentIndex,
                        1
                      )}`}
                      onClick={() => setCurrentIndex(1)}
                    >
                      me
                    </p>
                    <p
                      className={`text-black opacity-0 hover:opacity-60 cursor-pointer ${getColour(
                        currentIndex,
                        2
                      )}`}
                      onClick={() => setCurrentIndex(2)}
                    >
                      education
                    </p>
                    <p
                      className={`text-black opacity-0 hover:opacity-60 cursor-pointer mr-[0.4rem] ${getColour(
                        currentIndex,
                        3
                      )}`}
                      onClick={() => setCurrentIndex(3)}
                    >
                      skills
                    </p>
                  </section>
                </div>
                <section className="grid w-[100%] h-[100%] absolute">
                  {contentGenerator(currentIndex)}
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
/*
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
            className="text-[rgba(27,27,31,0.9)] max-sm:text-sm font-[500] m-[auto] text-justify pl-[2rem] pr-[2rem]"
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
        <div
          ref={bioRef}
          className="place-self-center max-sm:text-sm max-sm:p-5 text-justify"
        >
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
    if (blackRef.current && redRef.current && meCateRef.current && size) {
      const { width } = size;
      gsap.set(blackRef.current, {
        width: "100%",
        height: "100%",
      });
      gsap.to(blackRef.current, {
        width: () => {
          if (width >= 680) {
            return "50%";
          } else {
            return "100%";
          }
        },
        height: () => {
          //size.width < 1024 ? "50%" : "",
          if (width >= 1024) {
            return "";
          } else if (width < 1024 && width >= 680) {
            return "50%";
          } else {
            return "100%";
          }
        },
        duration: 1.6,
        delay: 1.8,
      });

      gsap.set(redRef.current, {
        height: size.width < 1024 ? 0 : "100%",
        opacity: 0,
        y: 0,
      });

      gsap.to(redRef.current, {
        width: size.width >= 1024 ? "50%" : "",
        height: () => {
          //size.width < 1024 ? "100%" : "",
          if (width >= 1024) {
            return "100%";
          } else if (width < 1024 && width >= 680) {
            return "100%";
          } else if (width < 680) {
            return "50%";
          } else {
            return "100%";
          }
        },
        y: () => {
          if (width < 680) {
            return "100%";
          } else {
            return "";
          }
        },
        transformOrigin: size.width < 1024 ? "bottom" : "right",
        duration: 1.5,
        delay: 2,
        zIndex: 99999,
        opacity: size.width < 1024 ? 1 : "",
      });
      gsap.to(meCateRef.current, {
        opacity: 1,
        delay: 3.5,
        duration: 0.5,
        display: "block",
        zIndex: 999,
        onComplete: () => setAnimated(true),
      });
    }
  }, [size]);

  return (
    <div className="grid relative h-[100vh] w-[100vw] font-[family-name:var(--font-geist-sans)]">
      <Sheng />
      <section className="relative z-0 w-[60%] lg:h-[300px] max-sm:h-[500px] grid lg:grid-rows-[1fr] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr] place-self-center  after:z-1">
        <section
          className="relative sm:row-start-1 sm:row-span-2 md:col-start-1 md:col-span-2 w-[100%] grid bg-white z-1"
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
              className="tracking-[0.4rem] max-sm:text-sm text-[1.1rem] font-bold text-[#747d8c] [&>div]:inline-block [&>div]:uppercase w-[100%]"
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
          className="absolute grid-cols-[1fr] lg:row-start-1 z-[-1] lg:col-start-1 sm:row-start-2 sm:row-span-1 sm:col-start-1 grid-rows-[auto_1fr] h-[100%] w-[100%] bg-red-500 justify-self-end"
          ref={redRef}
        >
          <div
            ref={meCateRef}
            className="relative text-right hidden isolate z-99 h-[100%] w-[100%]"
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
*/

export default About;
