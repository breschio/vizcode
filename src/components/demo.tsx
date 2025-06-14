import React from "react";
import { SplashCursor } from "@/components/ui/splash-cursor";

export function SplashDemo() {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <SplashCursor />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold font-mono">RETRO FLUID SIM</h1>
          <p className="text-xl text-green-300 font-mono">Move your mouse to create pixelated fluid effects</p>
          <p className="text-sm text-cyan-400 font-mono">>>> Click and drag for chunky retro splashes <<<</p>
          <p className="text-xs text-gray-500 font-mono">Authentic 8-bit style • Touch supported</p>
        </div>
      </div>
    </div>
  );
} 