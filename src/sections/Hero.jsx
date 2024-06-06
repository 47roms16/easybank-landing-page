import { useMediaQuery } from "@uidotdev/usehooks";

import { BackgroundDesktop, BackgroundMobile } from "../components/svg";

import { heroSection } from "../constants";
import { imgMockups } from "../assets";

import CtaButton from "../components/CtaButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const isLargerDevices = useMediaQuery("only screen and (min-width: 1024px)");

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h1", { duration: 1.25, x: -200, opacity: 0 })
      .from(".hero__description", { duration: 1, x: 200, opacity: 0 }, ".5")
      .from("#hero-img", { duration: 1, scale: 0.75, opacity: 0 }, "<");
  });

  return (
    <div className="max-container | relative lg:pt-[10.65rem]">
      {isLargerDevices ? (
        <div className="absolute -right-[28.5rem] -top-[16.285rem] max-xl:-right-0 max-xl:w-[659px]">
          <BackgroundDesktop />
        </div>
      ) : (
        <div className="max-h-[24rem] max-md:-mt-16">
          <BackgroundMobile />
        </div>
      )}
      <div className="padding-x-container | grid font-public-sans max-lg:text-center  lg:grid-cols-2">
        <div className="place-self-center max-lg:order-1">
          <h1 className="mb-6 font-light leading-[1.14] -tracking-[.018em] text-dark-blue max-md:mb-[1.125rem] max-md:leading-[1.2] max-2xs:text-4xl lg:max-w-[16ch]">
            {heroSection.title}
          </h1>
          <p className="hero__description | mb-[2.475rem] text-lg leading-normal -tracking-[.02em] text-grayish-blue max-lg:text-balance max-md:mb-[2.1rem]  max-md:text-[.9375rem] lg:pr-32">
            {heroSection.description}
          </p>
          <div className="max-lg:flex max-lg:justify-center">
            <CtaButton />
          </div>
        </div>
        <div className="hero-img | absolute -top-[7.625rem] z-10 min-w-[21.25rem] ">
          <img
            id="hero-img"
            src={imgMockups}
            alt="Four mobile phones displaying UI examples of the Easybank app"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
