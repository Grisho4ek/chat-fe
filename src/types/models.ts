/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ClaimsDto
 */
export interface ClaimsDto {
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    sub: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    given_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    family_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    gender?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    birthdate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimsDto
     */
    picture?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    auth_id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    family_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    gender?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    birthdate?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updated_at: string;
}
