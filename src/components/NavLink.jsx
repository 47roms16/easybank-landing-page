const NavLink = ({ url, label, className }) => {
  return (
    <a className={className} href={url}>
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
