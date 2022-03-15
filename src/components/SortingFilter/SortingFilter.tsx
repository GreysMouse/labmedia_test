import { USERS_SORTING_FILTER } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ICompareDirection } from '../../types/methods';
import { setSorting } from '../../utils/slices/filters';
import styles from './sortingFilter.module.scss';

export const SortingFilter = (): JSX.Element => {
  const sorting = useAppSelector(state => state.filters.sorting);

  const dispatch = useAppDispatch();

  const handleRegDateSorting = () => {
    let newDirection = 'desc' as ICompareDirection;

    if (sorting.type === 'registrationDate' && sorting.direction === 'desc') {
      newDirection = 'asc';
    }
    dispatch(setSorting({ type: 'registrationDate', direction: newDirection }));
  };

  const handleRatingSorting = () => {
    let newDirection = 'desc' as ICompareDirection;

    if (sorting.type === 'rating' && sorting.direction === 'desc') {
      newDirection = 'asc';
    }
    dispatch(setSorting({ type: 'rating', direction: newDirection }));
  };

  return (
    <div className={ styles.sortingFilter }>
      <p className={ styles.heading }>{ USERS_SORTING_FILTER.CAPTION }</p>
      <label className={ styles.radioBtnLabel + (sorting.type === 'registrationDate' ? ' ' + styles.radioBtnLabel_checked : '') }>
        <input
          className={ styles.radioBtn }
          type='radio'
          name='sortFilter'
          onClick={ handleRegDateSorting }
        />
        { USERS_SORTING_FILTER.OPTION_1 }
      </label>
      <label className={ styles.radioBtnLabel + (sorting.type === 'rating' ? ' ' + styles.radioBtnLabel_checked : '') }>
        <input
          className={ styles.radioBtn }
          type='radio'
          name='sortFilter'
          onClick={ handleRatingSorting }
        />
        { USERS_SORTING_FILTER.OPTION_2 }
      </label>
    </div >
  );
};
