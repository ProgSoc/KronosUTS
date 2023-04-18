/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
            url: '/api',
        });
    }

    /**
     * Get a subject's activities for a given semester
     * @param subjects
     * @param semester Semester to filter subjects by
     * @returns PublicActivityDto
     * @throws ApiError
     */
    public getSubjectActivities(
        subjects: Array<string>,
        semester: Semester,
    ): CancelablePromise<Array<PublicActivityDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/activities/{code}/activities',
            query: {
                'subjects': subjects,
                'semester': semester,
            },
        });
    }

}
