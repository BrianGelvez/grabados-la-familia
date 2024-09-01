"use client";

import Image from "next/image";
import Swal from "sweetalert2";

const TELEGRAM_BOT_TOKEN = "6833395589:AAHz-q0uulXnw76VkjTct-bqzOo23nEaTTM";
const TELEGRAM_CHAT_ID = "1158769054";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default function Form() {
  async function fetchForm(data: any) {
    try {
      const text = `Nuevo mensaje:\nNombre: ${data.name}\nTeléfono: ${data.phone}\nMensaje: ${data.message}`;

      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      const result = await response.json();
      if (result.ok) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Recibimos con exito su mensaje",
        });
      } else {
        alert("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    fetchForm(data);
  };

  return (
    <div
      id="contacto"
      className="relative w-full flex flex-col lg:justify-center lg:items-center gap-7 bg-gradient-to-b from-black/60 px-4 pb-7"
    >
      <Image
        src="/fondoizquierdo.webp"
        alt="Fondo de la página de Diego Bustos, abogado penalista"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 z-[-1]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[-1]" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-[-1]" />
      <div className="lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="flex flex-col gap-5 justify-start items-start">
          <h2 className="text-xl gradient-text font-extrabold">
            ¡Estamos Listos para Hacer Tu Idea Realidad!
          </h2>
          <p className="text-slate-200">
            Completa el formulario y cuéntanos cómo podemos ayudarte a
            personalizar tu producto, o a comprar productos personalizados.
          </p>
          <p className="text-brown-text font-semibold">
            ¡Estamos aquí para transformar tus ideas en una realidad única!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4 py-5"
        >
          <label
            htmlFor="name"
            className="font-semibold underline text-slate-300"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-[1px] p-2 shadow-full border-[#596363]  backdrop-blur-sm bg-black/50 rounded-lg text-slate-400"
          />
          <label
            htmlFor="phone"
            className="font-semibold underline text-slate-300"
          >
            Celular:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="border-[1px] p-2 shadow-full border-[#596363] backdrop-blur-sm bg-black/50 rounded-lg text-slate-400"
          />
          <label
            htmlFor="message"
            className="font-semibold underline text-slate-300"
          >
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border-[1px] p-2 shadow-full border-[#596363] backdrop-blur-sm bg-black/50 rounded-lg h-32 resize-none text-slate-400"
          />

          <button
            type="submit"
            className="text-center lg:text-2xl lg:flex justify-center items-center w-full text-slate-200 border-2 bg-brown-secundary bg-gradient-to-tl via-brown-primary from-brown-try
       border-brown-primary rounded-lg lg:rounded-xl p-1  shadow-lg shadow-yellow-700/50 cursor-pointer"
          >
            ¡Empezar Mi Proyecto!
          </button>
        </form>
      </div>
    </div>
  );
}
}