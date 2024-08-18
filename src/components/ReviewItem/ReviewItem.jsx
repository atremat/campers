import css from './ReviewItem.module.css';
import Icon from '../Icon/Icon';

export const ReviewItem = ({ review }) => {
  const RATING_MAX = 5;
  const rating = review['reviewer_rating'];
  const emptyStars = RATING_MAX - rating;
  return (
    <li className={css.item}>
      <div className={css.userInfo}>
        <div className={css.circle}>{review['reviewer_name'][0]}</div>

        <div className={css.nameWrapper}>
          <h5 className={css.title}>{review['reviewer_name']}</h5>
          <ul className={css.stars}>
            {Array(rating)
              .fill(0)
              .map((_, idx) => (
                <li key={idx}>
                  <Icon
                    id="star-empty"
                    width={16}
                    height={16}
                    fillColor={'#ffc531'}
                  />
                </li>
              ))}
            {Array(emptyStars)
              .fill(0)
              .map((_, idx) => (
                <li key={idx}>
                  <Icon
                    key={idx}
                    id="star-empty"
                    width={16}
                    height={16}
                    fillColor={'#f2f4f7'}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className={css.text}>{review.comment}</p>
    </li>
  );
};
