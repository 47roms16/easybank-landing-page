const CtaButton = () => {
  return (
    <div className="max-h-fit max-w-fit rounded-full bg-white">
      <div className="cta-wrap | rounded-full p-[2px] transition-opacity duration-300 hover:opacity-50 focus:opacity-50 active:opacity-70">
        <a
          href="cta"
          className="cta-btn | rounded-full bg-gradient-to-r from-lime-green to-bright-cyan px-8 pb-[10.5px] pt-[9px] text-sm font-bold text-white"
        >
          Request Invite
        </a>
      </div>
    </div>
  );
};

export default CtaButton;
