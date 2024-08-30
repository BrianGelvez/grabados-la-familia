import Image from "next/image";

export default function AboutMe() {
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
        objectFit=""
        className="block lg:hidden"
      />
      <Image
        src="/blackdesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit=""
        className="hidden lg:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t bg-black/30 via-transparent to-transparent">
        <div className="absolute flex flex-col lg:flex-row  px-4 lg:py-12 xl:justify-center">
          <div className="w-full xl:w-container flex flex-col lg:flex-row gap-8 justify-center">
            <div
              className="w-full lg:w-[50%] h-auto flex flex-col gap-2 lg:gap-8 border-[1px]
                      shadow-full border-[#343434] backdrop-blur-sm p-4 rounded-lg"
            >
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  ¡Hola! Somos <span className="text-brown-primary">Luis</span>{" "}
                  y <span className="text-brown-primary">José</span>, de
                  Cosquín, Córdoba.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  Somos un emprendimiento familiar enfocado en crear{" "}
                  <span className="text-brown-primary">productos únicos</span> a
                  través de grabados láser.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  Con mucha dedicación y entusiasmo, estamos dando nuestros
                  primeros pasos para ofrecerte artículos personalizados con
                  <span className="text-brown-primary">
                    {" "}
                    calidad y creatividad
                  </span>
                  .
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center">
                  Creemos en el valor de lo hecho a mano, la cercanía con
                  nuestros clientes y en{" "}
                  <span className="text-brown-primary">crecer juntos</span>, un
                  grabado a la vez.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 text-center">
                  Nuestro objetivo es brindarte <span className="text-brown-primary">productos personalizados</span> que
                  reflejen tus gustos y emociones, creando algo especial para
                  cada ocasión.
                </p>
              </div>

              <div className="w-auto flex flex-row justify-center gap-14 md:gap20 lg:gap-36 items-center">
                <Image
                  src="/firma.webp"
                  alt="Firma de Luis y José"
                  width={100}
                  height={100}
                />
                <Image
                  src="/firma.webp"
                  alt="Logo del emprendimiento de grabados láser"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] h-auto">
              <div className="mt-8 flex flex-col">
                <div className="flex flex-col">
                  <span className="flex flex-row justify-center items-center gap-2">
                    <p className="gradient-text text-[13px] lg:text-lg">
                      Producto más vendido
                    </p>
                    <Image
                      src="/estrellas.webp"
                      alt="Icono de tres estrellas"
                      width={40}
                      height={40}
                    />
                  </span>
                  <a
                    href="/#contacto"
                    className="text-center lg:text-2xl py-2 px-4 lg:py-2 bg-brown-secundary bg-gradient-to-tl via-brown-primary from-brown-try text-white lg:rounded-xl rounded-md"
                  >
                    Mates Personalizados 🧉
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col gap-5 my-12">
                <a
                  href="/aboutMe"
                  className="text-center lg:text-xl mt-2 w-full font-extralight text-slate-200 border-2 border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-lg shadow-yellow-700/50"
                >
                  Conoce más productos 🖼️
                </a>
                <a
                  href="/services"
                  className="text-center lg:text-xl mt-2 w-full font-extralight text-slate-200 border-2 border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-lg shadow-yellow-700/50"
                >
                  Testimonios 💬
                </a>
              </div>
              <div className="">
                <h1 className="text-2xl text-brown-text">
                  Estamos ubicados en..
                </h1>
                <p className="text-1xl mb-7 text-brown-text">
                  Colinas del Rey 493. Ciudad de Cosquin, provincia de Cordoba.
                </p>
                <div className="w-full h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.4383650345203!2d-64.46792298730378!3d-31.20858237425136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7964e313273d%3A0x27e486893596a353!2sColinas%20del%20Rey%20493%2C%20X5166%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1724703394622!5m2!1ses!2sar"
                    className="w-full h-96 rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
