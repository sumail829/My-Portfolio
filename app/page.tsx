import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
     <div className="relative bg-black-100 justify-center item-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
      <Hero></Hero>
      </div>
     
     </div>
  );
}
