import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonies() {
  return (
    <div
      className="relative w-full flex flex-col h-[1700px] min1:h-[1650px] 
                min2:h-[1600px] min3:h-[1500px] min4:h-[1400px] sm:h-[1380px] md:h-[1330px] 
                lg:h-[1100px] xl:h-[1100px] 2xl:h-[900px]"
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
        objectFit=""
        className="hidden lg:block"
      />
      <div className="w-full absolute inset-0 bg-gradient-to-t bg-black/30 via-transparent to-transparent">
        <div className="w-full absolute flex flex-col lg:flex-row  px-4 lg:py-12 xl:justify-center">
          <div className="w-full xl:w-container flex flex-col gap-28 justify-center">
            <p className="text-white text-center mt-12 text-4xl">
              Testimonios 🗣️
            </p>
            <div className="w-full bg-white/10  border-[#343434] backdrop-blur-sm rounded-xl shadow-full overflow-visible">
              <div className="h-20 bg-gradient-to-r rounded-t-xl from-brown-try to-brown-primary relative">
                <div className="w-32 h-32 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-brown-secundary shadow-lg overflow-hidden">
                  <Image
                    src="/yo.webp"
                    width={100}
                    height={100}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className=" pb-6 px-6 flex flex-col gap-4 items-center">
                <h2 className="mt-4 text-2xl text-slate-100">
                  Brian Gelvez
                </h2>
                <p className="text-lg text-center text-gray-300">
                  Con mi familia hicimos una compra de 50 mates para los 15 años
                  de mi hermana, la verda excelente los mates. Los invitados
                  estuvieron muy contento con los souveniles
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
          </div>
        </div>
      </div>
    </div>
  );
}
