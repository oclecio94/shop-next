"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div className="w-[500px] h-[500px]">
          <Image
            priority
            className="object-cover object-center block"
            src="/bf.jpg"
            alt="black friday"
            fill
          />
        </div>
        <div className="w-[500px] h-[500px]">
          <Image
            className="object-cover object-center"
            src="/fone.jpg"
            alt="fone"
            fill
          />
        </div>
        <div className="w-[500px] h-[500px]">
          <Image
            className="object-cover object-center"
            src="/img.jpg"
            alt="banner"
            fill
          />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
