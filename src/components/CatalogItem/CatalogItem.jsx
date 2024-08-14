import css from './CatalogItem.module.css';

export const CatalogItem = ({ item }) => {
  return (
    <li className={css.item}>
      <img src={item.gallery[0]} className={css.image} />
      <div className={css.container}>
        <div className={css.mainInfo}>
          <div className={css.nameWrapper}>
            <h3 className={css.name}>{item.name}</h3>
            <h3 className={css.price}>€ {item.price.toFixed(2)}</h3>
          </div>

          <div className={css.ratingWrapper}>
            <p
              className={css.rating}
            >{`${item.rating} (${item.reviews.length} Reviews)`}</p>
            <p className={location}>{item.location}</p>
          </div>
        </div>

        <p className={css.aboutText}>{item.description}</p>

        <div className={css.additionalInfo}></div>
      </div>
    </li>
  );
};
