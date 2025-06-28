import { Node } from './Node';

/**
 * A class representing the authentication information for GSI.
 */
export class Auth extends Node {
    /**
     * The auth token sent by this GSI.
     */
    token: string;

    constructor(parsedData: any = null) {
        super(parsedData);
        this.token = this.getString("token");
    }
} 