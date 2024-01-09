import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from 'next/link';
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
    <div className="flex items-center gap-x-2 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
            <Image 
                src="/spooky.svg"
                height="35"
                width="35"
                alt="Stream India"
            />
        </div>
        <h1 className={cn("hidden lg:block text-xl text-white font-semibold tracking-wide", font.className)}>StreamIndia</h1>
    </div>
    </Link>
  )
}

