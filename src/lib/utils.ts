import clsx from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...input: any[]) {
  return twMerge(clsx(input));
}
