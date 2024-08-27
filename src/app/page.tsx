import Redes from "@/components/redes/Redes";
import AboutMe from "@/sections/aboutMe";
import Main from "@/sections/main";
import Products from "@/sections/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Main/>
      <AboutMe/>
      <Products/>
      <Redes/>
    </div>
  );
}
