const Card = ({ Icon, image, title, description, attribution }) => {
  return (
    <>
      <div className="illustration">
        {Icon && <Icon />}
        {image && (
          <div className="">
            <img
              className="lazy-image | max-h-64 min-h-[12.5rem] w-full rounded-t-md"
              src={image.src}
              alt={image.altText}
              width={image.width}
              height={image.height}
            />
          </div>
        )}
      </div>
      <div className="card-content">
        {attribution && (
          <p className="mb-2 text-[.625rem] text-grayish-blue">{attribution}</p>
        )}
        <h3 className="h3 | text-dark-blue">{title}</h3>
        <p className="section__description">{description}</p>
      </div>
    </>
  );
};

export default Card;
