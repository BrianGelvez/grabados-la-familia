import { dataCards } from "@/components/card3d/dataCards";
import { ThreeDCard } from "@/components/card3d/threeDCard";
import Image from "next/image";

export default function Products() {
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
        objectFit=""
        className="block lg:hidden"
      />
      <Image
        src="/fondoproductodesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit=""
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t bg-black/30 via-transparent to-transparent">
        <div className="w-full flex flex-col lg:flex-row  px-4 lg:py-12 xl:justify-center">
          <div className="w-full xl:w-container flex flex-col gap-8 justify-center">
            <h1 className="text-center text-4xl font-semibold lg:text-center text-brown-primary">
              ¿Buscas el regalo perfecto que combine estilo y funcionalidad?
            </h1>
            <p className="text-center text-lg lg:text-xl text-white mt-4">
              Nuestros productos personalizados no solo hacen que cada ocasión
              sea especial, sino que también resuelven el problema de encontrar
              regalos únicos y memorables. Desde mates y cuchillos hasta
              bombillas grabadas, ofrecemos artículos que pueden ser
              personalizados exactamente a tu gusto, haciendo que tu regalo sea
              inolvidable y verdaderamente personal.
            </p>
            <div className="w-full h-auto p-2 backdrop-blur-md bg-white/20 mt-12 lg:mt-[120px] flex flex-col justify-center items-center italic rounded-lg">
              <p className="text-white text-xl text-center lg:text-2xl xl:text-3xl">
                Ventas por{" "}
                <span className="text-brown-secundary font-semibold">
                  Mayor
                </span>{" "}
                y{" "}
                <span className="text-brown-secundary font-semibold">
                  Menor
                </span>{" "}
                a todo el pais!📦
              </p>
            </div>
            {/* Contenedor de tarjetas con scroll horizontal en móviles */}
            <div className="flex flex-col">
              <p className="text-white text-center mt-12 text-4xl">
                Productos 🛍️
              </p>
              <div className="flex flex-row overflow-x-auto gap-4 justify-start lg:gap-8 mt-8">
                {dataCards.map((card) => (
                  <div className="flex-shrink-0 max-w-full" key={card.id}>
                    <ThreeDCard
                      title={card.title}
                      description={card.description}
                      imageUrl={card.imageUrl}
                      price={card.price}
                      link={card.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
