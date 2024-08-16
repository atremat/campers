import css from './CatalogItem.module.css';

import { CamperItemOptions } from '../CamperItemOptions/CamperItemOptions';
import Icon from '../Icon/Icon';

export const CatalogItem = ({ item }) => {
  return (
    <li className={css.item}>
      <img src={item.gallery[0]} className={css.image} />
      <div className={css.container}>
        <div className={css.mainInfo}>
          <div className={css.nameWrapper}>
            <h3 className={css.name}>{item.name}</h3>
            <div className={css.priceWrapper}>
              <h3 className={css.price}>€ {item.price.toFixed(2)}</h3>
              <Icon
                id="like"
                className={css.like}
                width={24}
                height={24}
                fillColor="#101828"
              />
            </div>
          </div>

          <div className={css.ratingWrapper}>
            <Icon
              id="star-empty"
              className={css.star}
              width={16}
              height={16}
              fillColor="#ffc531"
            />

            <p
              className={css.rating}
            >{`${item.rating} (${item.reviews.length} Reviews)`}</p>
            <p className={location}>{item.location}</p>
          </div>
        </div>

        <p className={css.aboutText}>{item.description}</p>

        <CamperItemOptions item={item} />

        <button type="button" className={css.moreBtn}>
          Show more
        </button>
      </div>
    </li>
  );
};
