import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

import Card from "../components/Card";

import { featuredSection, featuredContents } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const CompanyFeatures = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-features",
        start: "top 75%",
      },
    });

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-cards",
        start: "top 85%",
      },
    });

    tl.from("#features__heading", {
      duration: 1.25,
      x: -200,
      opacity: 0,
    }).from(
      "#features__description",
      {
        duration: 1,
        x: 100,
        opacity: 0,
      },
      "<",
    );

    cardTl
      .from(
        ".company-feature svg",
        {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
        },
        ".25",
      )
      .from(
        ".company-feature h3",
        {
          duration: 1,
          y: 25,
          opacity: 0,
          stagger: 0.1,
        },
        ".5",
      )
      .from(
        ".company-feature .section__description",
        {
          duration: 1,
          x: 25,
          opacity: 0,
          stagger: 0.1,
        },
        ".75",
      );
  });

  return (
    <div className="max-container padding-x-container company-features | font-public-sans">
      <div className="mb-[4.5rem] max-lg:text-center max-md:mb-14">
        <h2
          id="features__heading"
          className="mb-5 text-[2.5rem] font-light leading-[1.16] -tracking-[.045rem] text-dark-blue max-md:text-[2rem]"
        >
          {featuredSection.title}
        </h2>
        <p
          id="features__description"
          className="section__description | text-grayish-blue max-xs:text-wrap lg:pr-44"
        >
          {featuredSection.description}
        </p>
      </div>
      <div>
        <ul
          id="features-cards"
          className="max-md: grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-lg:text-center max-md:grid-cols-1 max-md:gap-8"
        >
          {featuredContents.map((feature) => (
            <li className="max-lg:place-self-center" key={feature.id}>
              <div className="company-feature">
                <Card
                  Icon={feature.Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyFeatures;
