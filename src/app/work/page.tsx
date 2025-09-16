"use client";
import Sheng from "../components/Sheng";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <div className="grid relative h-[100%] w-[100%] font-[family-name:var(--font-geist-sans)]">
      <Sheng />
    </div>
  );
}
