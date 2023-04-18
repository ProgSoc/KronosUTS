/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalSubjectDto } from '../models/MinimalSubjectDto';
import type { PublicActivityDto } from '../models/PublicActivityDto';
import type { Semester } from '../models/Semester';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubjectsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a list of subjects for a given semester
     * @param semester Semester to filter subjects by
     * @returns MinimalSubjectDto
     * @throws ApiError
     */
    public getSubjectList(
        semester: Semester,
    ): CancelablePromise<Array<MinimalSubjectDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/subjects/list',
            query: {
                'semester': semester,
            },
        });
    }

    /**
     * Get the details of a subject for a given semester
     * @param semester Semester to filter subjects by
     * @param code
     * @returns MinimalSubjectDto
     * @throws ApiError
     */
    public getSubjectDetails(
        semester: Semester,
        code: string,
    ): CancelablePromise<MinimalSubjectDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/subjects/{code}',
            path: {
                'code': code,
            },
            query: {
                'semester': semester,
            },
        });
    }

    /**
     * Get a subject's activities for a given semester
     * @param semester Semester to filter subjects by
     * @param code
     * @returns PublicActivityDto
     * @throws ApiError
     */
    public getSubjectActivities(
        semester: Semester,
        code: string,
    ): CancelablePromise<Array<PublicActivityDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/subjects/{code}/activities',
            path: {
                'code': code,
            },
            query: {
                'semester': semester,
            },
        });
    }

}
