import Image from "next/image";

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
          <div className="w-full xl:w-container flex flex-col gap-8 justify-center">
            <p className="text-white text-center mt-12 text-4xl">
              Testimonios 🗣️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
