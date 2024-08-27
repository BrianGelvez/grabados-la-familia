import Image from "next/image";

export default function Products() {
    return (
<div className="relative flex flex-col h-[1600px] lg:h-[1000px]">
      <Image
        src="/fondoproductos.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
        className="block lg:hidden"
      />
            <Image
        src="/blackdesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit="cover"
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent">
        <div className="absolute inset-0 bg-black/50 lg:bg-black/70 flex flex-col lg:flex-row gap-8 px-4 lg:py-12">

        </div>
      </div>
    </div>
    )
}