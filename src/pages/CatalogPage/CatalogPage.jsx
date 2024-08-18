import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import css from './CatalogPage.module.css';
import { SideBar } from '../../components/SideBar/SideBar';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import { selectLoading } from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';

export const CatalogPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar />
          <CatalogList />
        </>
      )}
    </main>
  );
};
