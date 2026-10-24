"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import ScrollSwitch from "./components/ScrollSwitch";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen w-full bg-[#1a1a1a] text-white">
      {/* Background: fixed to the viewport, behind everything in <main> */}
      <div className="fixed inset-0 -z-10">
        <ShaderGradientCanvas
          style={{ width: "100%", height: "100%" }}
          lazyLoad={true}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="waterPlane"
            wireframe={false}
            shader="defaults"
            uTime={0.2}
            uSpeed={0.1}
            uStrength={2}
            uDensity={1.3}
            uFrequency={5.5}
            uAmplitude={0}
            positionX={0.2}
            positionY={0.1}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={235}
            color1="#881d27" // deep red
            color2="#2d2d2d" // dark grey
            color3="#1a1a1a" // near black
            reflection={0.1}
            cAzimuthAngle={179}
            cPolarAngle={115}
            cDistance={3.9}
            cameraZoom={1}
            lightType="3d"
            brightness={1.1}
            envPreset="city"
            grain="off"
          />
        </ShaderGradientCanvas>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="navbar bg-[repeating-linear-gradient(135deg,#1a1a1a_0px_10px,#2d2d2d_1px_21px)] rounded-lg shadow-lg">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto mr-2" />
          <a className="text-2xl md:text-4xl font-mario text-white">Steam DuB&apos;s Mod</a>
        </div>
      </div>

      <div className="px-4">
        <div className="hero p-0">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/Banner.png" alt="Banner" className="md:max-w-sm" />
            <div>
              <h1 className="text-center text-2xl md:text-5xl font-bold">
                Active Modding group <br /> for NSMBU
              </h1>
              <p className="text-center py-6">blah blah blah blah blah blah blah blah blah</p>

              <div className="flex justify-center ">
                <button className=" btn btn-soft bg-[#e6514c]">
                  Get latest download
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="divider divider-[#1a1a1a]"></div>

        <ScrollSwitch />
      </div>
    </main>
  );
}