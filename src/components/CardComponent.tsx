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
  content: any;
  classList?: string;
  detail?: any;
  translation?: any;
}

export default function CardComponent({
  title,
  subtitle,
  imageUrl,
  imageFallback,
  content,
  classList,
  detail,
  translation,
}: CardProps) {
  const LIMIT = 300;

  const [showOriginal, setShowOriginal] = useState(!translation ? true : false);
  const [showMore, setShowMore] = useState(false);
  const [isTooLong, setIsTooLong] = useState(translation?.length > LIMIT);

  const toggleTranslation = () => {
    setShowOriginal(!showOriginal);
  };

  const getCardContent = () => {
    let text = showOriginal ? content : translation;

    if (isTooLong) {
      return text.slice(0, LIMIT) + (showMore ? text.slice(LIMIT) : "...");
    } else {
      return text;
    }
  };

  return (
    <CardNext
      className={
        "w-full md:min-w-[400px] md:max-w-[800px] flex-shrink-0 h-fit p-3" +
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
        <p className="text-justify text-medium md:text-xl whitespace-pre-line">
          {getCardContent()}
        </p>

        {/* Show more */}
        {isTooLong && (
          <span
            className={`text-sm text-default-500 cursor-pointer text-center stroke-text ${showMore ? "rotate-180" : ""} flex justify-center`}
            onClick={() => setShowMore(!showMore)}
          >
            <ChevronDown />
          </span>
        )}

        {translation && (
          <div className="flex justify-end">
            <span
              className="text-sm text-default-500 cursor-pointer"
              onClick={toggleTranslation}
            >
              {showOriginal ? "Show Translation" : "Show Original"}
            </span>
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
