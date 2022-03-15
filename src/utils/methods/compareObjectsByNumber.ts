import { ICompareDirection } from '../../types/methods';

export const compareObjectsByNumber = (
  obj1: any,
  obj2: any,
  comparedKey: string,
  direction: ICompareDirection
): number => {
  switch (direction) {
    case 'asc': return obj1[ comparedKey ] - obj2[ comparedKey ];
    case 'desc': return obj2[ comparedKey ] - obj1[ comparedKey ];
  }
};
