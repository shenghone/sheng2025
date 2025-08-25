"use client"
import React, { useEffect, useCallback, useRef } from "react";
import * as PIXI from "pixi.js";
import Perlin from "../util/perlin";
import useWindowSize from "../util/useWindowSize";


const Corona = function Corona() {
  const windowSize = useWindowSize();
  const canvasRef = useRef(null);
  const init = useCallback(async()=>{
    const canvas = canvasRef.current;
    const app = new PIXI.Application();
    const width = window.innerWidth;
    const height = window.innerHeight;
    await app.init({width,height,canvas})
     
        const NoiseMax = 5;
        const Noise = new Perlin.Noise(Math.random());
        const container = new PIXI.Container();
        const circle = new PIXI.Graphics();
        const surrounding = new PIXI.Graphics(); 
        app.stage.addChild(container);


        // this function map number to specified range
        // s is original value, a1~a2 as original range and b1~b2 as the range I want to map/scale to
        // the returned value is the relative value in b1~b2 range
        const mapNumber = (s, a1, a2, b1, b2) => {
            return b1 + ((s - a1) * (b2 - b1)) / (a2 - a1);
        };
        //circle
        circle.circle(width/ 2, height/ 2, 160);
        circle.fill(0x000000);
        container.pivot.x = width/2;
        container.pivot.y = height/2;
        surrounding.position.x = width /2;
        surrounding.position.y = height /2;

   
      


        let phase = 0;

        app.ticker.add(() => {
            container.position.set(width / 2, height / 2);
   
    
            //position
             surrounding.position.x = width /2;
             surrounding.position.y = height /2;
            let path = [];
            surrounding.clear();
           
      
            for (let a = 0; a < 2 * Math.PI; a += 0.3) {
              let xoffset = mapNumber(Math.cos(a + phase), -1, 1, 0, NoiseMax);
              let yoffset = mapNumber(Math.sin(a + phase), -1, 1, 0, NoiseMax);
              let r = mapNumber(Noise.simplex2(xoffset, yoffset), -1, 1, 165, 195);
              let x = r * Math.cos(a);
              let y = r * Math.sin(a);
              path.push(x);
              path.push(y);
          
            }
        
            phase += 0.001;
            surrounding.poly(path);
            surrounding.fill(0xffffff);
        });
    
        //surrounding.poly([100.45281267059667, 0, 165.61232887741502, 51.229896704055065, 164.27382038637154, 112.38576717322866, 107.52978936776684, 135.50454770324845, 64.23778201891818, 165.22931522175725, 11.914083499790557, 168.00549471621602, -39.453098131754345, 169.10630246747866, -93.4065807410835, 159.71091916467236, -134.2817770407584, 123.00402661207362, -161.77553263095646, 76.47576398751319, -192.17574448881223, 27.393988039605965, -197.73193879314658, -31.586836398778836, -168.40932981481714, -83.10440128266681, -125.47370882866763, -118.87688466315834, -101.39163147478456, -180.2519917403257, -41.91840430509902, -194.3895599596712, 15.631693380656504, -177.9648072455614, 68.32505556998835, -167.35466793235943, 121.01268960663764, -147.33788989321744, 148.67982682644117, -98.08862712581846, 167.62598143765504, -48.7801984353029])
        //surrounding.fill(0xffffff);
        let blurFilter = new PIXI.BlurFilter(12);
        surrounding.filters = [blurFilter];
        container.addChild(surrounding);
        container.addChild(circle);
        container.setChildIndex(surrounding, 0);
        container.setChildIndex(circle, 1);

        return app
  },[])
  useEffect(()=>{
    //resize according to the window size
    const app = init();
    const resize = async()=> {
        (await app).renderer.resize(windowSize.width,windowSize.height)
    };
    window.addEventListener("resize", resize);
    return async ()=>{
        (await app).stop()
        window.removeEventListener("resize",resize);
    }
  },[init,windowSize])



    /*
  const handleMove = _.debounce(e => {
    const center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const newDistance = Math.hypot(e.screenX - center.x, e.screenY - center.y);
    setDistance(newDistance);
  }, 400);
    */
  
  return (
    <div style={{ zIndex: "-1" }}>
      <canvas
        className="coronaWrapper"
        ref={canvasRef}
      />
    </div>
  );
};

export default Corona;