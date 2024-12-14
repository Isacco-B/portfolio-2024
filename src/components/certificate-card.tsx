"use client"

import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";


type Props = {
  image: string;
  title: string;
  date: string;
};

export function CertificateCard({ image, title, date }: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full overflow-hidden object-cover"
      />
      <CardHeader className="p-2">
        <div className="inline-flex items-center gap-2">
          <CardTitle className="text-base">{title}</CardTitle>
          -
          <time className="font-sans text-xs">{date}</time>
        </div>
      </CardHeader>
    </Card>
  );
}
