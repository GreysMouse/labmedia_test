import React from 'react';
import resetBtnImg from '../../images/filters-reset-button.svg';
import searchBtnImg from '../../images/input-search-button.svg';
import { useAppDispatch } from '../../store/hooks';
import { setSearchQuery } from '../../utils/slices/filters';
import styles from './searchBar.module.scss';

export const SearchBar = (): JSX.Element => {
  const [ query, setQuery ] = React.useState('');

  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    console.log('wdwd');
  };

  const handleQueryInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(setSearchQuery(query));
  };

  return (
    <div className={ styles.container }>
      <form className={ styles.form } onSubmit={ handleSearchSubmit }>
        <button className={ styles.searchBtn } type='submit'>
          <img className={ styles.searchBtnImg } src={ searchBtnImg } alt='Поиск' />
        </button>
        <input
          className={ styles.input }
          placeholder={ 'Поиск по имени или e-mail' }
          value={ query }
          onInput={ handleQueryInput }
        />
      </form>
      <label className={ styles.resetBtnLabel }>
        <input
          className={ styles.resetBtn }
          type='image' src={ resetBtnImg }
          alt=''
          onClick={ handleResetClick }
        />
        { 'Очистить фильтр' }
      </label>
    </div>
  );
};
