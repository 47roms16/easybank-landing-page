import NavLink from "../components/NavLink";
import CtaButton from "../components/CtaButton";

import { CompanyLogo } from "../components/svg";
import { socialLinks, footerNavLinks } from "../constants";

const Footer = ({ handleOnHoverLogo }) => {
  const className = "footer__logo";

  return (
    <footer className="bg-dark-blue pb-10 pt-12 font-public-sans max-lg:pb-11 max-lg:pt-10">
      <div className="max-container padding-x-container ">
        <nav className="flex items-center max-lg:flex-col">
          <div className="flex flex-1 gap-[8.25rem] max-lg:mb-[1.45rem] max-lg:flex-col  max-lg:gap-[1.6rem]">
            <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
              <a
                className="mb-[3.25rem] fill-white max-lg:mb-[1.6rem]"
                href="/"
                onFocus={() => handleOnHoverLogo(true, className)}
                onBlur={() => handleOnHoverLogo(false, className)}
                onMouseEnter={() => {
                  handleOnHoverLogo(true, className);
                }}
                onMouseLeave={() => handleOnHoverLogo(false, className)}
              >
                <CompanyLogo
                  className={className}
                  fillColor="#fff"
                  footer={true}
                />
              </a>
              <div>
                <ul className="flex gap-[.875rem]">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>
                        <svg className="size-5 fill-white transition-colors duration-300 hover:fill-soft-green">
                          <use xlinkHref={link.icon}></use>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <menu className="max-lg:text-center md:columns-2 lg:gap-[6.175rem]">
                {footerNavLinks.map((link) => (
                  <li
                    key={link.id}
                    className="mb-[.6875rem] text-[.9375rem] font-light tracking-tight text-very-light-gray transition-colors duration-300 hover:text-soft-green"
                  >
                    <NavLink
                      link={link}
                      url={link.url}
                      label={link.label}
                      className="footer__menu-link"
                    />
                  </li>
                ))}
              </menu>
            </div>
          </div>
          <div>
            <div className="mb-6 flex justify-end max-lg:justify-center">
              <CtaButton />
            </div>
            <p className="text-[.9375rem] tracking-tight text-grayish-blue">
              &#169; Easybank. All Rights Reserved
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
