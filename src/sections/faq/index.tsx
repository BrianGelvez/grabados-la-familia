import Image from "next/image";
import { faqData } from "./index.data";
import { BsChatText } from "react-icons/bs";

export default function Faq() {
  return (
    <div
      className="relative w-full flex flex-col h-[1270px] min1:h-[970px] 
                  min2:h-[950px] min4:h-[900px] sm:h-[1450px] md:h-[800px] 
                  lg:h-[850px]"
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
          <div className="w-full xl:w-container flex flex-col justify-center">
            <div className="mt-8">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-brown-primary">
                  Preguntas Frecuentes
                </h2>
              </div>
              <div className="border py-4 border-x-black border-brown-secundary">
                <h2 className="text-center text-lg text-slate-300">
                  Conoce las preguntas más frecuentes
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-[70%] lg:mx-auto flex flex-col gap-5 justify-center items-center my-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="w-full h-auto border flex flex-col rounded-xl backdrop-blur-sm bg-black/70"
                >
                  <label htmlFor={`faq-${index}`}>
                    <div className="flex flex-row justify-start items-center gap-2 p-2 rounded-xl">
                      <span>
                        <BsChatText className="text-brown-try" size={30} />
                      </span>
                      <p className="text-brown-text text-xl">{faq.questions}</p>
                    </div>
                  </label>
                  <input
                    id={`faq-${index}`}
                    name={`faq-${index}`}
                    type="checkbox"
                    placeholder="faq"
                    className="peer/faq hidden"
                  />
                  <div
                    className="w-full max-h-0 rounded-5 z-10 peer-checked/faq:py-2 peer-checked/faq:max-h-96
                   transition-all duration-300 pl-5 pr-2
                   overflow-hidden"
                  >
                    <p className="text-slate-300">{faq.answers}</p>
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
