import Redes from "@/components/redes/Redes";
import AboutMe from "@/sections/aboutMe";
import Characteristics from "@/sections/characteristics";
import Faq from "@/sections/faq";
import Footer from "@/sections/footer";
import Form from "@/sections/form";
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
      <Characteristics/>
      <Faq/>
      <Form/>
      <Footer/>
      <Redes/>
    </div>
  );
}
