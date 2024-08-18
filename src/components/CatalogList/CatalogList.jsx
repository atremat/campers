import { useSelector } from 'react-redux';
import css from './CatalogList.module.css';
import { selectCampersList } from '../../redux/campers/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useState } from 'react';

const PER_PAGE = 4;

export const CatalogList = () => {
  const campersList = useSelector(selectCampersList);

  const [page, setPage] = useState(1);
  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, page * PER_PAGE)
  );

  const isVisible = page * PER_PAGE < campersList.length;

  const handleShowMore = () => {
    setVisibleCampersList(campersList.slice(0, (page + 1) * PER_PAGE));
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {visibleCampersList.map(item => (
          <CatalogItem key={item._id} item={item} />
        ))}
      </ul>

      {isVisible && (
        <button className={css.more} type="button" onClick={handleShowMore}>
          Load more
        </button>
      )}
    </section>
  );
};
