import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Hero, CompanyFeatures, LatestArticles, Footer } from "./sections";

import Nav from "./components/Nav";
const App = () => {
  const { contextSafe } = useGSAP();

  // Logo animations
  const handleOnHoverLogo = contextSafe((isMouseEnter, containerClassName) => {
    const timeline = gsap.timeline();
    timeline
      .to(`.${containerClassName} .bar`, {
        y: isMouseEnter && -5,
        stagger: 0.1,
        ease: "back.out",
      })
      .to(
        `.${containerClassName} .company-name`,
        { y: 0, ease: "back.in", stagger: 0.1 },
        "-=75%",
      );

    gsap.to(`.${containerClassName} .company-name`, {
      duration: 1,
      stroke: isMouseEnter ? "white" : "none",
      ease: "back.out",
    });
  });

  return (
    <>
      <Nav handleOnHoverLogo={handleOnHoverLogo} />
      <main className="mt-20 max-lg:mt-[4.125rem] max-md:mt-16">
        <section className="section__hero | bg-very-light-gray pb-[13.075rem] max-lg:pb-[5.575rem]">
          <Hero />
        </section>
        <section className="bg-light-grayish-blue pb-[6.35rem] pt-[6.5rem] max-lg:pb-16 max-lg:pt-[3.875rem]">
          <CompanyFeatures />
        </section>
        <section className="bg-very-light-gray pb-20 pt-[5.1rem]">
          <LatestArticles />
        </section>
      </main>
      <Footer handleOnHoverLogo={handleOnHoverLogo} />
    </>
  );
};

export default App;
