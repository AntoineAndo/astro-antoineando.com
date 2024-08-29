import {
  Card as CardNext,
  CardBody,
  CardFooter,
  Divider,
  Link,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageFallback?: string;
  children: any;
  classList?: string;
  detail?: any;
  translation?: any;
}

export default function CardComponent({
  title,
  subtitle,
  imageUrl,
  imageFallback,
  children,
  classList,
  detail,
  translation,
}: CardProps) {
  const [showOriginal, setShowOriginal] = useState(!translation ? true : false);

  const toggleTranslation = () => {
    setShowOriginal(!showOriginal);
  };

  return (
    <CardNext
      className={
        "w-11/12 md:w-full md:min-w-[400px] md:max-w-[800px] flex-shrink-0 h-fit p-3" +
        classList
      }
      isBlurred
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
      <CardBody className="gap-3">
        <p className="text-justify text-medium md:text-xl">
          {showOriginal ? children : translation}
        </p>
        {translation && (
          <div className="flex justify-end">
            <Link
              className="text-sm text-default-500 cursor-pointer"
              onPress={toggleTranslation}
            >
              {showOriginal ? "Show Translation" : "Show Original"}
            </Link>
          </div>
        )}
      </CardBody>
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
