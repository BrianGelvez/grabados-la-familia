"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Main() {
  return (
    <div className="relative flex flex-col h-screen">
      <Image
        src="/fondo.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
        className="lg:hidden"
      />
      <Image
        src="/fondodesktop.webp"
        alt="Imagen de fondo de inicio para escritorio"
        layout="fill"
        objectFit="absolute"
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="absolute inset-0 bg-black/60 lg:bg-black/40 flex flex-col xl:items-center">
          <div className="w-full h-auto p-2 backdrop-blur-md bg-white/20 mt-[100px] lg:mt-[120px] flex flex-col justify-center items-center italic">
            {/* <p className="text-slate-200 underline">Ventas por mayor y menor</p> */}
            <p className="text-white text-xl lg:text-2xl xl:text-3xl">
              📦Envio{" "}
              <span className="text-brown-secundary font-semibold">gratis</span>{" "}
              a todo el pais!📦
            </p>
          </div>
          <div className="relative xl:w-container xl:justify-center px-4 lg:px-10 xl:px-0 flex flex-col items-start gap-8 mt-4 lg:mt-20 lg:w-[70%]">
            {/* <div className="w-full flex justify-center items-center">
              <h1 className="text-center font-semibold text-2xl text-white flex items-center">
                Diseños 100% personalizados
              </h1>
            </div> */}

            <div className="flex flex-row items-start mt-3 justify-start">
              <div className="flex flex-col max-w-[70%]">
                {" "}
                {/* Limita el ancho máximo del contenedor de texto */}
                <h1 className="gradient-text text-5xl font-semibold lg:text-6xl italic">
                  Grabados La Familia
                </h1>
                <h2 className="text-xl mt-2 lg:text-2xl mx-0 text-brown-secundary italic">
                  Cortes y Grabados Láser <br />{" "}
                  {/* Esto añade un salto de línea */}
                  <span className="inline-block">
                    de Calidad{" "}
                    <Image
                      src="/rayolaser.webp"
                      width={30}
                      height={30}
                      alt="Imagen de un rayo láser"
                      className="inline-block"
                    />
                  </span>
                </h2>
                <h3 className="text-brown-secundary italic mt-1">
                  diseños 100% personalizados
                </h3>
              </div>
              <div className="flex-shrink-0 mt-3">
                {" "}
                {/* Evita que la imagen se reduzca si el espacio es limitado */}
                <Image
                  src="/laser.webp"
                  width={70}
                  height={70}
                  alt="Imagen de una balanza, símbolo de justicia"
                  className="lg:w-24"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute transition-transform duration-300 bottom-28 w-full lg:w-full lg:flex lg:justify-center lg:items-center px-4 h-10">
          <button className="backdrop-blur-sm bg-brown-primary/30 shadow-md border-[1px] border-brown-secundary w-full lg:w-auto lg:px-14 lg:py-3 h-auto p-2 rounded-lg text-white lg:text-3xl lg:flex lg:justify-center lg:items-center">
            Quiero mi mate grabado🔥
          </button>
        </div>

        <div className="absolute bottom-0 w-full h-24 opacity-50 flex justify-center items-center">
          <Link href="#aboutme">
            <FaArrowDown size={36} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
