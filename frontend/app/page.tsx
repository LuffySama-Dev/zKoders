"use client";

import GLOBE from "vanta/src/vanta.globe";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6b21a8,
          backgroundColor: 0x020617,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div
      className="bg-[#0x23153c] min-h-screen w-full flex flex-col justify-center items-start text-gray-200"
      ref={vantaRef}
    >
      <div className=" mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32">
        <h1 className="tracking-wider font-bold text-7xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
          zkverify
        </h1>
        <h2 className="tracking-wider text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 font-semilight">
          Building the future
        </h2>

        <div className="w-full border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900">
          {" "}
          <Link href="/main">
            <p>Explore</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
