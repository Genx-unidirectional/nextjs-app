import { billData, lastTransact } from "./data";
import clsx from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...input: any[]) {
  return twMerge(clsx(input));
}

export function fetchLastBills(): Promise<number[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(billData);
    }, 4000);
  });
}

export function fetchLastTransaction(): Promise<
  {
    name: string;
    invoice: number;
    paid: boolean;
    color: string;
  }[]
> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lastTransact);
    }, 6000);
  });
}
