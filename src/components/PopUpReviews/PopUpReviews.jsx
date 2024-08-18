import { BookForm } from '../BookForm/BookForm';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import css from './PopUpReviews.module.css';

export const PopUpReviews = ({ item }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {item.reviews.length > 0 ? (
          <ul className={css.list}>
            {item.reviews.map((review, idx) => (
              <ReviewItem key={idx} review={review} />
            ))}
          </ul>
        ) : (
          <p>No revies yet.</p>
        )}
      </div>

      <BookForm />
    </section>
  );
};
