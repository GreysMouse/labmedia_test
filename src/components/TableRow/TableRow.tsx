import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ITableRow } from '../../types/components';
import { getDateFromISO } from '../../utils/methods/getDateFromISO';
import { deleteUser } from '../../utils/slices/users';
import styles from './tableRow.module.scss';

export const TableRow = ({ userId }: ITableRow): JSX.Element => {
  const user = useAppSelector(state => {
    return state.users.onPageUsers.find(user => user.id === userId);
  });

  const registrationDate = getDateFromISO(user?.registrationDate || '');

  const dispatch = useAppDispatch();

  const handleUserDelete = () => {
    dispatch(deleteUser(userId));
  };

  return (
    <tr className={ styles.row }>
      <td className={ styles.cell + ' ' + styles.cell_firstCol }>{ user?.name }</td>
      <td className={ styles.cell }>{ user?.email }</td>
      <td className={ styles.cell }>{ registrationDate }</td>
      <td className={ styles.cell }>{ user?.rating }</td>
      <td className={ styles.cell }>
        <button className={ styles.delButton } onClick={ handleUserDelete } />
      </td>
    </tr>
  );
};
