import Activity from './Activity';

export default interface Subject {
  /**
   * @example "41025_AUT_U_1_S"
   */
  subject_code: string;
  /**
   * @example "41025"
   */
  callista_code: string;
  /**
   * @example "Introduction to Software Development"
   */
  description: string;
  /**
   * @example "-"
   */
  manager: string;
  /**
   * @example "-"
   */
  email_address: string;
  /**
   * @example "D"
   */
  faculty: string;
  /**
   * @example "AUT"
   */
  semester: string;
  /**
   * @example "U"
   */
  campus: string;
  /**
   * @example 89
   */
  show_on_timetable: number;
  /**
   * @example 10
   */
  activity_count: number;
  /**
   * @example []
   */
  children: Array<unknown>;
  activities: Record<string, Activity>;
}
