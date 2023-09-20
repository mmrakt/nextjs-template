import next from "../../../../public/next.svg";
import { twMerge } from "tailwind-merge";

const icons = { next };

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  size?: number;
  fillColor?: string;
  className?: string;
};

const DEFAULT_SIZE = 16;

export function SvgIcon({
  name,
  size = DEFAULT_SIZE,
  className,
  fillColor,
}: Props) {
  const Svg = icons[name];

  return (
    <Svg
      className={twMerge("", className)}
      width={size}
      height={size}
      fill={fillColor ?? "none"}
    />
  );
}
