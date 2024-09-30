import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Magicbutton from './ui/Magicbutton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"></Spotlight>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw] " fill="purple"></Spotlight>
            <Spotlight className="top-20 -left-28 h-[80vh] w-[50vw]" fill="blue"></Spotlight>
            <Spotlight className="top-30 -left-28 h-[80vh] w-[50vw]" fill="red"></Spotlight>

        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative  my-20 z-10">
        <div className="max-w-[200vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col item-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100">dymanic Portofolio using Nextjs</h2>
          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Welcome To PortFolio Design using Next.Js">
          </TextGenerateEffect>
          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi,I am suman a Nextjs Developer from Nepal
          </div>
          <div className="flex justify-center items-center py-3">
             <Magicbutton
             title="Show My projects"
             position="right"
             icon={<FaLocationArrow />}
             ></Magicbutton>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero