import Image from "next/image";
import { Star } from "lucide-react";
import { testimoniesData } from "./testimonies.data";

export default function Testimonies() {
  return (
    <div
      className="relative w-full flex flex-col h-[1600px] min1:h-[1500px] 
                min2:h-[1520px] min3:h-[1500px] min4:h-[1500px] sm:h-[1450px] md:h-[1500px] 
                lg:h-[1550px] xl:h-[1500px]"
    >
      <Image
        src="/fondoderecho.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        className="block lg:hidden"
      />
      <Image
        src="/blackdesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        className="hidden lg:block"
      />

      {/* Degradado superior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="w-full absolute inset-0 bg-gradient-to-t bg-black/30 via-transparent to-transparent">
        <div className="w-full absolute flex flex-col lg:flex-row px-4 lg:py-12 xl:justify-center">
          <div className="w-full xl:w-container flex flex-col justify-center">
            <p className="text-white text-center mt-12 mb-5 text-4xl lg:text-6xl">
              Testimonios 🗣️
            </p>
            <div>
              <h3 className="gradient-text text-center text-xl lg:text-3xl mb-4">
                Capturas de clientes ✨
              </h3>
              <div className="w-full flex flex-row md:justify-center gap-10 overflow-x-auto py-12">
                <Image
                  src="/testimonie1.webp"
                  width={300}
                  height={300}
                  alt="testimonios"
                  className="rounded-xl border-[1px] border-brown-primary shadow-full transition-transform duration-[300ms] ease-in-out hover:scale-110"
                />
                <Image
                  src="/testimonie2.webp"
                  width={300}
                  height={300}
                  alt="testimonios"
                  className="rounded-xl border-[1px] border-brown-primary shadow-full transition-transform duration-[300ms] ease-in-out hover:scale-110"
                />
              </div>
            </div>
            <div className="w-full flex flex-row lg:justify-center gap-6 overflow-x-auto px-[2px]">
              {testimoniesData.map((data) => (
                <div
                  key={data.id}
                  className="snap-center flex-shrink-0 w-full max-w-[550px] mt-20 bg-white/10 border-[#343434] backdrop-blur-sm rounded-xl mb-6 shadow-full"
                >
                  <div className="h-20 bg-gradient-to-r rounded-t-xl from-brown-try to-brown-primary relative">
                    {/* Punto titilante */}
                    <span className="absolute top-2 right-2 flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                    </span>
                    <div className="w-32 h-32 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-brown-secundary shadow-lg overflow-hidden">
                      <Image
                        src={data.imageUrl}
                        width={100}
                        height={100}
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="pb-6 px-6 flex flex-col gap-4 items-center">
                    <h2 className="mt-4 text-2xl text-slate-100">
                      {data.name}
                    </h2>
                    <p className="gradient-text">{data.city}</p>
                    <p className="text-lg text-center text-gray-300">
                      {data.description}
                    </p>
                    <div className="flex gap-1 items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-7 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
