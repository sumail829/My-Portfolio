import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FlotaingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";

export default function Home() {
  return (
     <div className="relative bg-black-100 justify-center item-center flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
        <FloatingNav
        className=""
        navItems={[{
          name: "Home",
         link: "/",
          icon: <FaHome/>
          }]}></FloatingNav>
      <Hero></Hero>
      <Grid></Grid>
      </div>
     
     </div>
  );
}
