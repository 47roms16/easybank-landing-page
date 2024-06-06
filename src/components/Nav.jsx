import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

import CompanyLogo from "./svg/CompanyLogo";
import CtaButton from "./CtaButton";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

import { iconHamburger, iconClose } from "../assets";
import { headerNavLinks } from "../constants";

const Nav = ({ handleOnHoverLogo }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [isNavVisible]);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.from(".header__cta", { duration: 1, y: 10 });
  });

  const className = "header__logo";

  const handleClickToggle = contextSafe(() => {
    setIsNavVisible(!isNavVisible);
  });

  const handleClickOutside = () => {
    setIsNavVisible(false);
  };
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="padding-x-container | bg-white py-[1.125rem] max-lg:pt-7 max-md:py-[1.375rem]">
        <nav className="max-container | flex items-center justify-between font-public-sans">
          <a
            className="fill-dark-blue"
            href="/"
            onFocus={() => handleOnHoverLogo(true, className)}
            onBlur={() => handleOnHoverLogo(false, className)}
            onMouseEnter={() => handleOnHoverLogo(true, className)}
            onMouseLeave={() => handleOnHoverLogo(false, className)}
          >
            <CompanyLogo
              className={className}
              fillColor="#2D314D"
              header={true}
            />
          </a>
          <menu className="flex items-center gap-[1.875rem] text-sm max-lg:hidden">
            {headerNavLinks.map((link) => (
              <li
                key={link.id}
                className="relative list-item text-grayish-blue"
              >
                <NavLink
                  url={link.url}
                  label={link.label}
                  className="header__menu-link"
                />
              </li>
            ))}
          </menu>
          <div className="header__cta | max-lg:hidden">
            <CtaButton />
          </div>
          <button className="lg:hidden" onClick={handleClickToggle}>
            {isNavVisible ? (
              <svg className="size-6 fill-dark-blue" width="24" height="11">
                <use href={iconClose}></use>
              </svg>
            ) : (
              <svg className="size-6 fill-dark-blue" width="24" height="11">
                <use href={iconHamburger}></use>
              </svg>
            )}
          </button>
          {isNavVisible && (
            <div
              className="mobile__nav-wrapper | fixed inset-0 -z-10 overflow-hidden px-6 pt-[5.5rem] lg:hidden"
              onClick={handleClickOutside}
            >
              <div className="flex justify-center">
                <MobileNav navLinks={headerNavLinks} />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
