import { USERS_PAGINATION_STEP } from '../../config';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentPage } from '../../utils/slices/pages';
import styles from './pageNavigator.module.scss';

export const PageNavigator = (): JSX.Element => {
  const currentPage = useAppSelector(state => state.pages.currentPage);
  const usersCount = useAppSelector(state => state.users.foundUsers.length);

  const pagesCount = Math.ceil(usersCount / USERS_PAGINATION_STEP);
  const pagesArray = Array.from(Array(pagesCount), (_, i) => i + 1);

  const dispatch = useAppDispatch();

  const handlePageButtonClick = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className={ styles.pageNavigator }>
      {
        pagesArray.map(num => <input
          key={ num }
          className={ styles.pageButton }
          type='radio'
          name='pageNavigator'
          checked={ num === currentPage }
          onChange={ () => handlePageButtonClick(num) }
        />)
      }
    </div>
  );
};
