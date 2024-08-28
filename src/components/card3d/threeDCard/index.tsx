"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../mouseEnterContext";
import Link from "next/link";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-yellow-900/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <div className="w-full flex flex-row  items-center">
            <p className="gradient-text">Mates 100% Personalizados 🎨</p>
            <div>
              <Image src="/estrella.webp" width={100} height={100} alt="firma" />
            </div>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Personaliza tu idea como más te guste, ideal para un regalo 🎁
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/mateslogo.webp"
            height="500"
            width="500"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="rounded-xl text-lg font-normal dark:text-white"
          >
            $6.550
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="backdrop-blur-sm bg-brown-primary/30 shadow-md border-[1px] p-1 border-brown-secundary rounded-lg text-slate-300"
          >
            quiero mi mate 🧉
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
