import {
  Card as CardNext,
  CardBody,
  CardFooter,
  Divider,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { ChevronDown } from "./icons/ChevronDown";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageFallback?: string;
  children: any;
  classList?: string;
  detail?: any;
}

export default function ProjectCardComponent({
  title,
  subtitle,
  imageUrl,
  imageFallback,
  children,
  classList,
  detail,
}: CardProps) {
  return (
    <CardNext
      className={
        "w-11/12 md:w-full md:min-w-[400px] md:max-w-[800px] flex-shrink-0 h-fit p-3 hover:scale-105 " +
        classList
      }
      // isBlurred
    >
      <CardHeader className="flex gap-3">
        {(imageUrl || imageFallback) && (
          <Avatar
            isBordered
            showFallback
            src={imageUrl}
            fallback={<span className="text-xl">{imageFallback}</span>}
          />
        )}
        <div className="flex flex-col">
          <p className="text-medium font-semibold">{title}</p>
          <p className="text-sm text-default-500 text-left">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
      {detail && (
        <>
          <Divider />
          <CardFooter className="text-medium text-default-500">
            {detail}
          </CardFooter>
        </>
      )}
    </CardNext>
  );
}
