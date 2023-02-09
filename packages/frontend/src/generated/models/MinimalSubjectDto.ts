/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MinimalSubjectDto = {
    callista_code: string;
    description: string;
    semester: MinimalSubjectDto.semester;
};

export namespace MinimalSubjectDto {

    export enum semester {
        ALL = 'ALL',
        APR = 'APR',
        AUB = 'AUB',
        AUC = 'AUC',
        AUD = 'AUD',
        AUG = 'AUG',
        AUT = 'AUT',
        DEC = 'DEC',
        FEB = 'FEB',
        JAN = 'JAN',
        JUL = 'JUL',
        JUN = 'JUN',
        MAR = 'MAR',
        MAY = 'MAY',
        NOV = 'NOV',
        OCT = 'OCT',
        SE1 = 'SE1',
        SE2 = 'SE2',
        SE3 = 'SE3',
        SE4 = 'SE4',
        SE5 = 'SE5',
        SE6 = 'SE6',
        SEP = 'SEP',
        SPB = 'SPB',
        SPC = 'SPC',
        SPD = 'SPD',
        SPR = 'SPR',
        SUM = 'SUM',
    }


}

