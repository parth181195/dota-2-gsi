import { Node } from '../node';
import { ProviderI } from './provider.type';

export class Provider extends Node implements ProviderI{
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
    this.name = this.getString('name');
    this.appID = this.getInt('appid');
    this.version = this.getInt('version');
    this.timeStamp = this.getString('timestamp');
  }
}