import Image from "next/image";

export default function Characteristics() {
  return (
    <div
      className="relative w-full flex flex-col h-[1600px] min1:h-[1500px] 
              min2:h-[1400px] min3:h-[1340px] sm:h-[1270px] md:h-[1230px] 
              lg:h-[1340px] xl:h-[1280px]"
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
        <div className="w-full flex flex-col lg:flex-row px-4 lg:py-12 justify-center">
          <h1 className="text-4xl text-center lg:text-center text-brown-primary">
            Dale un toque único a tus objetos favoritos
          </h1>
          <p className="text-center text-xl lg:text-2xl text-white mt-4">
            Explora las posibilidades de personalización con grabados láser
          </p>
          <div
            className="relative w-full lg:w-[50%] h-auto flex flex-col gap-2 lg:gap-8 border-[1px]
            shadow-full border-[#343434] backdrop-blur-sm p-4 rounded-lg mt-12 
            bg-[url('/mateqatar.webp')] bg-cover bg-center bg-no-repeat 
            bg-black/70 bg-blend-overlay"
          >
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
              <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                Nuestros grabados láser son la mejor manera de personalizar una
                amplia gama de objetos, desde mates y bombillas hasta cuchillos
                y otros artículos especiales.
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
        </div>
      </div>
    </div>
  );
}
