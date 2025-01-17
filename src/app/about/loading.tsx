import Link from "next/link";
import Card from "~/_components/_primitives/card";

export default function Loading() {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-8 overflow-y-auto mobile:overflow-y-scroll mobile:px-8 mobile:pb-24 mobile:pt-24 desktop:p-8"></div>
  );
}
