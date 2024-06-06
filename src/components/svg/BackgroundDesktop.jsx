import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DesktopBackground = () => {
  const gradientBg = useRef();
  const darkBg = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline

      .to(gradientBg.current, {
        duration: 3,
        y: 50,
        repeat: -1,
        transformOrigin: "center",
        yoyo: true,
        ease: "power1.inOut",
      })
      .to(
        darkBg.current,
        {
          duration: 3,
          y: -35,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
        "-=50%",
      );
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1271}
      height={1034}
    >
      <defs>
        <linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%">
          <stop offset="0%" stopColor="#33D35E" />
          <stop offset="100%" stopColor="#2AB6D9" />
        </linearGradient>
        <filter
          id="a"
          width="104.9%"
          height="135.9%"
          x="-4.8%"
          y="-17.6%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={38.5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0"
          />
        </filter>
        <path
          ref={darkBg}
          id="b"
          d="M69.445 572.84 203.73 707.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.41 81.41 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.8 30.8 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.8 30.8 0 0 0-9.025-21.788L855.85 430.11a100 100 0 0 0-70.708-29.287H550.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.52 57.52 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.68 40.68 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.68 40.68 0 0 0 11.915 28.764z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(15)">
        <use xlinkHref="#b" fill="#000" filter="url(#a)" />
        <use xlinkHref="#b" fill="#2D314D" />
        <path
          ref={gradientBg}
          fill="url(#c)"
          d="M207.445 265.84 341.73 400.112a100 100 0 0 0 70.708 29.286h70.693a100 100 0 0 1 70.708 29.287l161.04 161.027A100 100 0 0 0 785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.41 81.41 0 0 0-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.8 30.8 0 0 1 21.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.8 30.8 0 0 0-9.025-21.788L993.85 123.11a100 100 0 0 0-70.708-29.287H688.7a100 100 0 0 1-70.708-29.287l-35.253-35.25A100 100 0 0 0 512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.52 57.52 0 0 0 16.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.68 40.68 0 0 1-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.68 40.68 0 0 0 11.915 28.764z"
        />
      </g>
    </svg>
  );
};

export default DesktopBackground;
