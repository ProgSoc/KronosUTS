export default interface Activity {
  /**
   * @example "41025_AUT_U_1_S"
   */
  subject_code: string;
  /**
   * @example "Wrk1"
   */
  activity_group_code: string;
  /**
   * @example "01"
   */
  activity_code: string;
  /**
   * @example "U"
   */
  campus: string;
  /**
   * @example "Tue"
   */
  day_of_week: string;
  /**
   * @example "13:00"
   */
  start_time: string;
  /**
   * @example "CB11.03.400"
   */
  location: string;
  /**
   * @example "-"
   */
  staff: string;
  /**
   * @example "180"
   */
  duration: string;
  /**
   * @example "full"
   */
  selectable: string;
  /**
   * @example 0
   */
  availability: number;
  /**
   * @example "00000000111111101011110000000000000000000000000000000000000000000"
   */
  week_pattern: string;
  /**
   * @example "On-campus activity"
   */
  description: string;
  /**
   * @example "U"
   */
  zone: string;
  /**
   * @example "-"
   */
  department: string;
  /**
   * @example "AUT"
   */
  semester: string;
  /**
   * @example "Autumn"
   */
  semester_description: string;
  /**
   * @example "Workshop"
   */
  activity_type: string;
  /**
   * @example "26/12/2022"
   */
  start_date: string;
  /**
   * @example "#c29ae9"
   */
  color: string;
  /**
   * @example ""
   */
  cluster: string;
  /**
   * @example ["21/2/2023",
   *    "28/2/2023",
   *    "7/3/2023",
   *    "14/3/2023",
   *    "21/3/2023",
   *    "28/3/2023",
   *    "4/4/2023",
   *    "18/4/2023",
   *    "2/5/2023",
   *    "9/5/2023",
   *    "16/5/2023",
   *    "23/5/2023"
   *   ]
   */
  activitiesDays: string[];
}
