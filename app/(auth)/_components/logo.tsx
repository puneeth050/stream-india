import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
        <div className="bg-white rounded-full p-1">
            <Image 
                src="/spooky.svg"
                height="40"
                width="40"
                alt="Stream India"
            />
        </div>
        <h1 className={cn("text-xl text-white font-semibold tracking-wide", font.className)}>StreamIndia</h1>
        </div>
  )
}

