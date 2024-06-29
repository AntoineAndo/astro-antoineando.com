import {
  Card as CardNext,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
  CardHeader,
  Avatar,
} from "@nextui-org/react";

interface CardProps {
  name: string;
  company: string;
  imageUrl?: string;
  imageFallback?: string;
  children: any;
  classList?: string;
  detail?: any;
}

export default function ReviewCard({
  name,
  company,
  imageUrl,
  imageFallback,
  children,
  classList,
  detail,
}: CardProps) {
  return (
    <CardNext
      className={
        "w-11/12 md:w-full md:min-w-[400px] md:max-w-[800px] flex-shrink-0 h-fit p-3" +
        classList
      }
      isBlurred
    >
      <CardHeader className="flex gap-3">
        <Avatar
          isBordered
          showFallback
          src={imageUrl}
          fallback={<span className="text-xl">{imageFallback}</span>}
        />
        <div className="flex flex-col">
          <p className="text-medium font-semibold">{name}</p>
          <p className="text-sm text-default-500 text-left">{company}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-justify text-medium md:text-xl">{children}</p>
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
