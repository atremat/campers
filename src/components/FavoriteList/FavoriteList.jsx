import { useSelector } from 'react-redux';
import css from './FavoriteList.module.css';
import { selectFavoritesList } from '../../redux/campers/selectors';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useEffect, useState } from 'react';

const PER_PAGE = 4;

export const FavoriteList = ({ favoriteIds }) => {
  const campersList = useSelector(selectFavoritesList);

  const [page, setPage] = useState(1);
  const [visibleCampersList, setVisibleCampersList] = useState(
    campersList.slice(0, page * PER_PAGE)
  );

  useEffect(() => {
    setVisibleCampersList(campersList.slice(0, page * PER_PAGE));
  }, [campersList, page]);

  const isVisible = !(page * PER_PAGE > visibleCampersList.length);

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section className={css.section}>
      {favoriteIds.length > 0 ? (
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
        <p className={css.noFavorites}>No favorites added.</p>
      )}
    </section>
  );
};
