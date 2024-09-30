import React from 'react'

const Magicbutton = ({
    title,
    icon,
    handleClick,
    otherClasses,
    position}:{
        title:string;
        icon:React.ReactNode;
        handleClick?:()=>void;
        otherClasses?:string;
        position:string;

    }) => {
  return (
    <div><button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className={`inline-flex h-full w-full gap-2 item-center justify-center px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
      {position==="left" &&icon}
      {title}
      {position==="right" &&icon}
    </div>
  </button></div>
  )
}

export default Magicbutton