/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalSubjectDto } from '../models/MinimalSubjectDto';
import type { PublicActivityDto } from '../models/PublicActivityDto';
import type { Semester } from '../models/Semester';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any
     * @throws ApiError
     */
    public appControllerGetHello(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @param semester Semester to filter subjects by
     * @returns MinimalSubjectDto
     * @throws ApiError
     */
    public subjectsControllerGetSubjectList(
        semester: Semester,
    ): CancelablePromise<Array<MinimalSubjectDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subjects/list',
            query: {
                'semester': semester,
            },
        });
    }

    /**
     * @param semester Semester to filter subjects by
     * @param code
     * @returns MinimalSubjectDto
     * @throws ApiError
     */
    public subjectsControllerGetSubject(
        semester: Semester,
        code: string,
    ): CancelablePromise<MinimalSubjectDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subjects/{code}',
            path: {
                'code': code,
            },
            query: {
                'semester': semester,
            },
        });
    }

    /**
     * @param semester Semester to filter subjects by
     * @param code
     * @returns PublicActivityDto
     * @throws ApiError
     */
    public subjectsControllerGetSubjectActivities(
        semester: Semester,
        code: string,
    ): CancelablePromise<Array<PublicActivityDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/subjects/{code}/activities',
            path: {
                'code': code,
            },
            query: {
                'semester': semester,
            },
        });
    }

}
