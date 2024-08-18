import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { SideBar } from '../../components/SideBar/SideBar';
import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavoritesId } from '../../redux/campers/selectors';

export const FavoritePage = () => {
  const favoriteIds = useSelector(selectFavoritesId);

  return (
    <main className={css.main}>
      <SideBar />
      <FavoriteList favoriteIds={favoriteIds} />
    </main>
  );
};
