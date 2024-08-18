import { BookForm } from '../BookForm/BookForm';
import css from './PopUpReviews.module.css';

export const PopUpReviews = () => {
  return (
    <section className={css.section}>
      <div className={css.container}></div>

      <BookForm />
    </section>
  );
};
