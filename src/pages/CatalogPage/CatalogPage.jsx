import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import css from './CatalogPage.module.css';
import { SideBar } from '../../components/SideBar/SideBar';
import { CatalogList } from '../../components/CatalogList/CatalogList';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <SideBar />
      <CatalogList />
    </main>
  );
};
