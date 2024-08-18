import { useSelector } from 'react-redux';
import css from './CatalogList.module.css';
// import { selectCampersList } from '../../redux/campers/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { selectFilteredCampers } from '../../redux/filters/selectors';
import { useEffect, useState } from 'react';

const PER_PAGE = 4;

export const CatalogList = () => {
  const campersList = useSelector(selectFilteredCampers);

  const [page, setPage] = useState(1);
  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, page * PER_PAGE)
  );

  useEffect(() => {
    setVisibleCampersList(campersList.slice(0, page * PER_PAGE));
  }, [campersList, page]);

  const isVisible = page * PER_PAGE < campersList.length;

  const handleShowMore = () => {
    setVisibleCampersList(campersList.slice(0, (page + 1) * PER_PAGE));
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      {campersList.length > 0 ? (
        <>
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
        </>
      ) : (
        <p className={css.noFound}>Not campers found.</p>
      )}
    </section>
  );
};
