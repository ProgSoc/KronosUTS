import Campus from './Campus';
import Days from './Days';
import Faculty from './Faculty';
import Semester from './Semester';
import Type from './Type';

type SearchParams = {
  /**
   * @example "41025"
   */
  'search-term': `${number}`;
  semester: Semester;
  campus: Campus;
  faculty: Faculty;
  type: Type;
  days: Days;
  /**
   * @example "00:00"
   */
  'start-time': string;
  /**
   * @example "23:00"
   */
  'end-time': string;
};

export default SearchParams;
