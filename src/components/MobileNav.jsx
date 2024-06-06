import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import NavLink from "./NavLink";

const MobileNav = ({ navLinks }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".mobile-menu", {
      duration: 0.25,
      opacity: 1,
      scaleY: 1,
      ease: "expoScale",
    }).to(".mobile-link", {
      duration: 0.25,
      opacity: 1,
      stagger: 0.05,
    });
  });

  return (
    <menu className="mobile-menu | right-0 w-full max-w-[37rem] scale-y-0 gap-4 rounded-[4px] bg-white py-5 text-center opacity-0">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          url={link.url}
          label={link.label}
          className="mobile-link | block py-2 hover:bg-slate-200 active:bg-slate-200"
        />
      ))}
    </menu>
  );
};

export default MobileNav;
