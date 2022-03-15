import React from 'react';
import { shallowEqual } from 'react-redux';
import { USERS_TABLE_HEADINGS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setOnPageUsers } from '../../utils/slices/users';
import { TableRow } from '../TableRow/TableRow';
import styles from './table.module.scss';

export const Table = (): JSX.Element => {
  const usersCount = useAppSelector(state => state.users.uploadedUsers.length);
  const currentPage = useAppSelector(state => state.pages.currentPage);
  const currentSorting = useAppSelector(state => state.filters.sorting);
  const currentSearchQuery = useAppSelector(state => state.filters.searchQuery);

  const usersIds = useAppSelector(state => {
    return state.users.onPageUsers.map(user => user.id);
  }, shallowEqual);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setOnPageUsers({
      pageNumber: currentPage,
      sorting: currentSorting,
      searchQuery: currentSearchQuery
    }));
  }, [ usersCount, currentPage, currentSorting, currentSearchQuery ]);

  return (
    <div className={ styles.container }>
      <table className={ styles.table }>
        <caption className={ styles.caption }>
          { USERS_TABLE_HEADINGS.CAPTION }
        </caption>
        <thead>
          <tr>
            <th className={ styles.headCell } scope='col'>{ USERS_TABLE_HEADINGS.COL_1 }</th>
            <th className={ styles.headCell } scope='col'>{ USERS_TABLE_HEADINGS.COL_2 }</th>
            <th className={ styles.headCell } scope='col'>{ USERS_TABLE_HEADINGS.COL_3 }</th>
            <th className={ styles.headCell } scope='col'>{ USERS_TABLE_HEADINGS.COL_4 }</th>
          </tr>
        </thead>
        <tbody>
          {
            usersIds.map(id => <TableRow key={ id } userId={ id } />)
          }
        </tbody>
      </table>
    </div>
  );
};
