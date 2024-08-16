import { useSelector } from 'react-redux';
import css from './CatalogList.module.css';
import { selectCampersList } from '../../redux/campers/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useState } from 'react';

export const CatalogList = () => {
  const [isMoreVisible, setIsMoreVisible] = useState(true);
  const campersList = useSelector(selectCampersList);

  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, 4)
  );

  const handleShowMore = () => {
    setIsMoreVisible(false);
    setVisibleCampersList(campersList);
  };

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {visibleCampersList.map(item => (
          <CatalogItem key={item._id} item={item} />
        ))}
      </ul>

      {isMoreVisible && (
        <button className={css.more} type="button" onClick={handleShowMore}>
          Load more
        </button>
      )}
    </section>
  );
};
