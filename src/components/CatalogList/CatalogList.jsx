import { useSelector } from 'react-redux';
import css from './CatalogList.module.css';
import { selectCampersList } from '../../redux/campers/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';

export const CatalogList = () => {
  const campersList = useSelector(selectCampersList);

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {campersList.map(item => (
          <CatalogItem key={item._id} item={item} />
        ))}
      </ul>
    </section>
  );
};
