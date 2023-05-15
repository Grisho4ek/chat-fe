/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    email_verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone_number?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    phone_verified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    _id?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updated_at?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    identities?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    app_metadata?: object;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    user_metadata?: object;
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
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    nickname?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    multifactor?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_ip?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_login?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_password_reset?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    logins_count?: number;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    blocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    given_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    family_name?: string;
}
