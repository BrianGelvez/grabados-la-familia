import Redes from "@/components/redes/Redes";
import AboutMe from "@/sections/aboutMe";
import Main from "@/sections/main";
import Products from "@/sections/products";
import Testimonies from "@/sections/testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Main/>
      <AboutMe/>
      <Products/>
      <Testimonies/>
      <Redes/>
    </div>
  );
}
