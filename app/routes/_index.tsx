import type { MetaFunction } from "@remix-run/node";
import Scene from "~/components/Scene";
import SlidingTrack from "~/components/SlidingTrack";

export const meta: MetaFunction = () => {
  return [
    { title: "The Beat of Space" },
    { name: "description", content: "Explore the wonders of space with us!" },
  ];
};

export default function Index() {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden font-syneMono">
      {/* 3D Torus and Space Background */}
      <Scene />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 text-white">
        {/* Top Left Title */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <p className="text-sm sm:text-lg font-semibold uppercase tracking-wide">
            Enjoy the (space)
          </p>
        </div>

        {/* Adjusted Main Title */}
        <div className="absolute left-4 top-1/4 sm:left-8 sm:top-20">
          <h1 className="text-[3rem] leading-tight sm:text-[5rem] lg:text-[9rem] font-extrabold">
            ΠΤΥΧΗ ΤΟΥ <br /> <span className="text-zinc-400">ΧΩΡΟΥ</span>
          </h1>
        </div>

        {/* Right-Aligned Subtitle */}
        <div className="absolute top-1/2 right-4 sm:top-1/3 sm:right-8 max-w-[90%] sm:max-w-sm bg-black p-2 sm:p-4">
          <p className="text-xs sm:text-sm leading-5 sm:leading-6">
            Welcome to our website dedicated to exploring space! Our team of
            experts works hard to provide you with up-to-date and fascinating
            information about space.
          </p>
        </div>
      </div>

      {/* Bottom Sliding Track */}
      <div className="absolute bottom-0 w-full">
        <SlidingTrack />
      </div>
    </div>
  );
}
