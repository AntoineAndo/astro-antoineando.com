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
}

export default function ReviewCard({
  name,
  company,
  imageUrl,
  imageFallback,
  children,
}: CardProps) {
  return (
    <CardNext className="w-[400px] flex-shrink-0" isBlurred>
      <CardHeader className="flex gap-3">
        <Avatar
          isBordered
          showFallback
          src={imageUrl}
          fallback={<span className="text-xl">{imageFallback}</span>}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{name}</p>
          <p className="text-small text-default-500">{company}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-justify">{children}</p>
      </CardBody>
    </CardNext>
  );
}
