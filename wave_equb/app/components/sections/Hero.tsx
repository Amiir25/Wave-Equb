import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-800 leading-tight">
            Transforming Equb For The Digital Age
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl">
            Save together, access funds easily, and manage your Equb anytime, anywhere with Wave.
          </p>

          {/* Get the App Button */}
          <Link
            href="#download"
            className="inline-flex items-center gap-3 bg-[#1A5A45] hover:bg-[#144535] active:scale-95 text-white font-semibold text-base px-7 py-4
            rounded-xl transition-all duration-200"
          >
            Get the App
            <ArrowUpRight
                size={30}
                className="bg-white text-[#1A5A45] rounded"
            />
          </Link>

          {/* Hero Image */}
          <div className="w-64 sm:w-80 lg:w-[480px] xl:w-[540px] mt-4">
            <Image
              src="/images/hero.png"
              alt="Small business owner using MicroGrow app"
              width={800}
              height={800}
              priority
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}