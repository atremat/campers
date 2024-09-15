import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import css from './CatalogPage.module.css';
import { SideBar } from '../../components/SideBar/SideBar';
import { CatalogList } from '../../components/CatalogList/CatalogList';
import {
  selectLoading,
  selectPage,
  selectPerPage,
  selectSortBy,
  selectSortOrder,
} from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';

export const CatalogPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);
  const filter = {};
  const params = { page, perPage, sortBy, sortOrder, filter };

  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch, page, perPage, sortBy, sortOrder]);

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
