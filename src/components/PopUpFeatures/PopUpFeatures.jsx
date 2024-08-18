import { BookForm } from '../BookForm/BookForm';
import { FeaturesOptions } from '../FeaturesOptions/FeaturesOptions';
import css from './PopUpFeatures.module.css';

const PopUpFeatures = ({ item }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <FeaturesOptions item={item} />

        <h4 className={css.title}>Vehicle details</h4>

        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <span>Form</span>
            <span>{item.form}</span>
          </li>

          <li className={css.detailsItem}>
            <span>Length</span>
            <span>{item.length}</span>
          </li>

          <li className={css.detailsItem}>
            <span>Width</span>
            <span>{item.width}</span>
          </li>

          <li className={css.detailsItem}>
            <span>Height</span>
            <span>{item.height}</span>
          </li>

          <li className={css.detailsItem}>
            <span>Tank</span>
            <span>{item.tank}</span>
          </li>

          <li className={css.detailsItem}>
            <span>Consumption</span>
            <span>{item.consumption}</span>
          </li>
        </ul>
      </div>

      <BookForm />
    </section>
  );
};

export default PopUpFeatures;
