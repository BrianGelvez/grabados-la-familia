import { ThreeDCard } from "@/components/card3d/threeDCard";
import Image from "next/image";

export default function Products() {
  return (
    <div className="relative flex flex-col h-[1600px] lg:h-[1000px]">
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
        <div className="absolute inset-0 bg-black/50 lg:bg-black/70 flex flex-col gap-8 px-4 lg:py-12">
          <h1 className="text-center text-4xl font-semibold lg:text-center text-brown-secundary">productos 🖼️</h1>
          <ThreeDCard/>
        </div>
      </div>
    </div>
  );
}
