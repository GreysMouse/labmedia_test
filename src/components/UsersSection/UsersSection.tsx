import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUsers, setOnPageUsers } from '../../utils/slices/users';
import { PageNavigator } from '../PageNavigator/PageNavigator';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortingFilter } from '../SortingFilter/SortingFilter';
import { Table } from '../Table/Table';
import styles from './usersSection.module.scss';

export const UsersSection = (): JSX.Element => {
  const isUsersListUploaded = useAppSelector(state => {
    return state.users.uploadedUsers.length !== 0;
  });

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  React.useEffect(() => {
    dispatch(setOnPageUsers({
      pageNumber: 1,
      sorting: {
        type: 'none',
        direction: 'asc'
      },
      searchQuery: ''
    }));
  }, [ isUsersListUploaded ]);

  return (
    <section>
      <h1 className={ styles.heading }>
        Список пользователей
      </h1>
      <SearchBar />
      <SortingFilter />
      <Table />
      <PageNavigator />
    </section>
  );
};
