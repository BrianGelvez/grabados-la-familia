"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../mouseEnterContext";
import Link from "next/link";

interface ThreeDCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  link: string;
}

export function ThreeDCard({
  title,
  description,
  imageUrl,
  price,
  link,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-900/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-76 h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          <div className="w-full flex flex-row min1:gap-12 lg:gap-28 items-center">
            <p className="gradient-text w-[250px]">{title}</p>
            <div>
              <Image src="/estrella.webp" width={80} height={80} alt="firma" />
            </div>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
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
            href={link}
            target="__blank"
            className="rounded-xl text-lg font-normal dark:text-white"
          >
            {price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="backdrop-blur-sm bg-brown-primary/30 shadow-md border-[1px] p-1 px-2 border-brown-secundary rounded-lg text-slate-300"
          >
            quiero mi mate 🧉
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
