import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { characteristicsData } from "./data.characteristics";
import { ThreeDCard } from "@/components/card3d/threeDCard";
import { Facebook, Instagram } from "lucide-react";

export default function Characteristics() {
  return (
    <div
      className="relative w-full flex flex-col h-[2200px] min1:h-[1900px] 
              min2:h-[1800px] min4:h-[1600px] sm:h-[1900px] md:h-[1450px] 
              lg:h-[1600px] xl:h-[1400px]"
    >
      <Image
        src="/fondoizquierdo.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
        className="block lg:hidden"
      />
      <Image
        src="/fondoproductodesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t bg-black/30 via-transparent to-transparent">
        <div className="w-full flex flex-col px-4 lg:py-12 justify-center">
          <h1 className="text-4xl text-center lg:text-center text-brown-primary">
            Dale un toque único a tus objetos favoritos
          </h1>
          <p className="text-center text-xl lg:text-2xl text-white my-4">
            Explora las posibilidades de personalización con grabados láser
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:mt-12">
            <div
              className="relative w-full lg:w-[50%] h-auto flex flex-col gap-2 lg:gap-8 border-[1px]
            shadow-full border-[#343434] backdrop-blur-sm p-4 rounded-lg
            bg-[url('/mateqatar.webp')] bg-cover bg-center bg-no-repeat 
            bg-black/60 bg-blend-overlay"
            >
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  Nuestros grabados láser son la mejor manera de personalizar
                  una amplia gama de objetos, desde mates y bombillas hasta
                  cuchillos y otros artículos especiales.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  Ofrecemos una gran variedad de productos listos para ser
                  personalizados, pero también damos la opción de traer tus
                  propios objetos para grabar.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 font-semibold text-center gradient-text">
                  ¡Las posibilidades son infinitas!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4 justify-center lg:justify-between">
              {characteristicsData.map((data) => (
                <div
                  key={data.id}
                  className="w-full h-auto flex flex-row items-center bg-black/50 
                              border-[1px] border-brown-secundary rounded-lg shadow-lg p-2 gap-4"
                >
                  <FcApproval size={40} className="flex-shrink-0" />
                  <p className="text-white text-md font-medium">
                    <span className="font-bold text-brown-primary">
                      {data.keyword}
                    </span>{" "}
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-12">
            <div className="w-full lg:w-[50%]">
              <ThreeDCard
                title="¡Personaliza tus productos con magia! 🪄"
                image="/magia.webp"
                description="¿Tienes un objeto especial que quieres personalizar? Trae tus propios materiales y grábalo como desees."
                imageUrl="/personalizados.webp"
                price=""
                link="aqui"
              />
            </div>
            <div className="w-full flex flex-col justify-evenly lg:w-[50%] lg:py-14">
              <div
                className="text-center lg:h-36 lg:text-2xl lg:flex justify-center items-center w-full font-extralight text-slate-200 border-2 bg-brown-secundary bg-gradient-to-tl via-brown-primary from-brown-try
                     border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-lg shadow-yellow-700/50 animate-bounce cursor-pointer"
              >
                <a href="/services" className="">
                  🪄 Tengo productos para personalizar 🪄
                </a>
              </div>

              <a
                href="/services"
                className="hidden lg:flex gap-2 justify-center text-center lg:text-xl w-full font-extralight text-slate-200 border-2 bg-brown-secundary bg-gradient-to-tl via-brown-primary from-brown-try
                     border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-lg shadow-yellow-700/50"
              >
                Nuestro Instagram{" "}
                <Instagram size={30} color="#ffffff" strokeWidth={1} />
              </a>
              <a
                href="/services"
                className="hidden lg:flex gap-2 text-center justify-center lg:text-xl w-full font-extralight text-slate-200 border-2 bg-brown-secundary bg-gradient-to-tl via-brown-primary from-brown-try
                     border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-lg shadow-yellow-700/50"
              >
                Nuestro Facebook <Facebook size={30} color="#ffffff" strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
