/**
 * The base Node for GSI states.
 */
export abstract class Node {
  /**
   * The JSON data for this Node.
   */
  protected _parsedData: any;

  /**
   * Has this node been used to successfully read a value from JSON?
   */
  private _successfullyRetrievedAnyValue: boolean = false;

  protected constructor(parsedData: any = null) {
    this._parsedData = parsedData;
  }

  protected toEnum<T>(str: string, enumType: any): T {
    if (str && str.trim()) {
      try {
        return enumType[str.toUpperCase()] as T;
      } catch {
        // Fall through to undefined
      }
    }
    return enumType['UNDEFINED'] as T;
  }

  getToken(propertyName: string): any {
    if (this._parsedData) {
      const value = this._parsedData[propertyName];
      if (value !== undefined) {
        // Successfully retrieved a property, this must be a valid node.
        this._successfullyRetrievedAnyValue = true;
        return value;
      }
    }
    return null;
  }

  getString(propertyName: string): string {
    const value = this.getToken(propertyName);
    if (value !== null && value !== undefined) {
      this._successfullyRetrievedAnyValue = true;
      return String(value);
    }
    return '';
  }

  protected getObject(propertyName: string): any {
    const token = this.getToken(propertyName);
    if (token && typeof token === 'object' && !Array.isArray(token)) {
      return token;
    }
    return null;
  }

  protected getInt(propertyName: string): number {
    const value = this.getToken(propertyName);
    if (value !== null && value !== undefined) {
      return parseInt(value.toString());
    }
    return -1;
  }
   protected getFloat(propertyName: string): number {
    const value = this.getToken(propertyName);
    if (value !== null && value !== undefined) {
      return parseFloat(value.toString());
    }
    return -1;
  }


  protected getBool(name: string): boolean {
    const value = this.getToken(name);
    if (value !== null && value !== undefined) {
      return Boolean(value);
    }
    return false;
  }

  protected getArray(propertyName: string): any[] {
    const token = this.getToken(propertyName);
    if (token && Array.isArray(token)) {
      return token;
    }
    return [];
  }
  get data() {
    return this._parsedData;
  }

  protected getMatchingKeys(data: any, regex: RegExp) {
    if (!data) {
      return;
    }
    const matches: any[] = [];
    for (const [propertyName, propertyValue] of Object.entries(data)) {
      if (regex.test(propertyName)) {
        const match = propertyName.match(regex);
        if (match) {
          matches.push(match[0]);
        }
      }
    }
    return matches;
  }
  isValid(): boolean {
    return this._successfullyRetrievedAnyValue;
  }

}
