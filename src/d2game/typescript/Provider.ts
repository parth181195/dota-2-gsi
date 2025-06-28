import { Node } from './Node';

/**
 * Information about the provider of this GameState.
 */
export class Provider extends Node {
    /**
     * Game name.
     */
    name: string;

    /**
     * Game's Steam AppID.
     */
    appID: number;

    /**
     * Game's version.
     */
    version: number;

    /**
     * Current timestamp.
     */
    timeStamp: string;

    constructor(parsedData: any = null) {
        super(parsedData);
        this.name = this.getString("name");
        this.appID = this.getInt("appid");
        this.version = this.getInt("version");
        this.timeStamp = this.getString("timestamp");
    }

    toString(): string {
        return `[Provider Name: ${this.name}, AppID: ${this.appID}, Version: ${this.version}, TimeStamp: ${this.timeStamp}]`;
    }
} 