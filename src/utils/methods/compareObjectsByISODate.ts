import { ICompareDirection } from '../../types/methods';

export const compareObjectsByISODate = (
  obj1: any,
  obj2: any,
  comparedKey: string,
  direction: ICompareDirection
): number => {
  const date1 = new Date(obj1[ comparedKey ]);
  const date2 = new Date(obj2[ comparedKey ]);

  switch (direction) {
    case 'asc': return date1 < date2 ? -1 : 1;
    case 'desc': return date1 > date2 ? -1 : 1;
  }
};
