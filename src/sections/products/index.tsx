import { dataCards } from "@/components/card3d/dataCards";
import { ThreeDCard } from "@/components/card3d/threeDCard";
import Image from "next/image";

export default function Products() {
  return (
    <div className="relative flex flex-col h-[1600px] lg:h-[1200px]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent">
        <div className="absolute inset-0 bg-black/50 lg:bg-black/70 flex flex-col px-4">
          <h1 className="text-center text-4xl font-semibold lg:text-center text-brown-primary">
            ¿Buscas el regalo perfecto que combine estilo y funcionalidad?
          </h1>
          <p className="text-center text-lg lg:text-xl text-white mt-4">
            Nuestros productos personalizados no solo hacen que cada ocasión sea
            especial, sino que también resuelven el problema de encontrar
            regalos únicos y memorables. Desde mates y cuchillos hasta bombillas
            grabadas, ofrecemos artículos que pueden ser personalizados
            exactamente a tu gusto, haciendo que tu regalo sea inolvidable y
            verdaderamente personal.
          </p>
          <div className="w-full h-auto p-2 backdrop-blur-md bg-white/20 mt-12 lg:mt-[120px] flex flex-col justify-center items-center italic rounded-lg">
            <p className="text-white text-xl text-center lg:text-2xl xl:text-3xl">
              Ventas por{" "}
              <span className="text-brown-secundary font-semibold">Mayor</span>{" "}
              y{" "}
              <span className="text-brown-secundary font-semibold">Menor</span>{" "}
              a todo el pais!📦
            </p>
          </div>
          {/* Contenedor de tarjetas con scroll horizontal en móviles */}
          <div className="flex flex-col">
            <p className="text-white text-center mt-12 text-4xl">Productos 🛍️</p>
            <div className="flex flex-row overflow-x-auto gap-4 xl:justify-center lg:gap-8 mt-8">
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
  );
}
