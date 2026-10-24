"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function RedWavesBackground() {
  return (
    <div className="red-waves-background" aria-hidden="true">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        lazyLoad
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
          color1="#651d27"
          color2="#292528"
          color3="#151519"
          reflection={0.08}
          cAzimuthAngle={179}
          cPolarAngle={115}
          cDistance={3.9}
          cameraZoom={1}
          lightType="3d"
          brightness={0.72}
          envPreset="city"
          grain="off"
        />
      </ShaderGradientCanvas>
      <div className="red-waves-shade" />
    </div>
  );
}
