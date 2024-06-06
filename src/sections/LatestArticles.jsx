import Card from "../components/Card";

import { articleCards } from "../constants";

const LatestArticles = () => {
  const articleItems = articleCards.map((article) => {
    const imageProps = {
      src: article.image.src,
      altText: article.image.altText,
      width: article.image.width,
      height: article.image.height,
    };

    const cardProps = {
      image: imageProps,
      title: article.title,
      description: article.description,
      attribution: article.attribution,
    };

    return (
      <li key={article.id}>
        <a href="/">
          <article className="latest-article | max-h-[25.625rem]">
            <Card {...cardProps} />
          </article>
        </a>
      </li>
    );
  });

  return (
    <div className="max-container padding-x-container | font-public-sans  max-md:max-w-[31.25rem] max-md:text-center">
      <h2 className="mb-[2.625rem] text-[2.425rem] font-light text-dark-blue">
        Latest Articles
      </h2>
      <ul className="grid grid-cols-4 gap-[1.875rem] max-xl:gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        {articleItems}
      </ul>
    </div>
  );
};

export default LatestArticles;
