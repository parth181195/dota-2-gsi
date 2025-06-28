import { Node } from '../node';
import { AuthI } from './auth.type';

export class Auth extends Node implements AuthI {
  /**
   * The auth token sent by this GSI.
   */
  token: string;

  constructor(parsedData: any = null) {
    super(parsedData);
    this.token = this.getString('token');
  }
}