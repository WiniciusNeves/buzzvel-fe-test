import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/media";

type AvatarStackProps = {
  avatars: readonly ImageAsset[];
  size: number;
  ringClassName?: string;
  className?: string;
};

export function AvatarStack({
  avatars,
  size,
  ringClassName = "ring-cream",
  className,
}: AvatarStackProps) {
  return (
    <ul className={cn("flex -space-x-2", className)}>
      {avatars.map((avatar) => (
        <li key={avatar.src}>
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size}
            height={size}
            unoptimized
            className={cn("rounded-full object-cover ring-2", ringClassName)}
            style={{ width: size, height: size }}
          />
        </li>
      ))}
    </ul>
  );
}
