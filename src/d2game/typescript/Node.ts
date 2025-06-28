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

    protected getJToken(propertyName: string): any {
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

    protected getJObject(propertyName: string): any {
        const jtoken = this.getJToken(propertyName);
        if (jtoken && typeof jtoken === 'object' && !Array.isArray(jtoken)) {
            return jtoken;
        }
        return null;
    }

    protected getJArray(propertyName: string): any[] {
        const jtoken = this.getJToken(propertyName);
        if (jtoken && Array.isArray(jtoken)) {
            return jtoken;
        }
        return [];
    }

    protected getString(propertyName: string): string {
        const value = this.getJToken(propertyName);
        if (value !== null && value !== undefined) {
            return value.toString();
        }
        return '';
    }

    protected getInt(propertyName: string): number {
        const value = this.getJToken(propertyName);
        if (value !== null && value !== undefined) {
            return parseInt(value.toString());
        }
        return -1;
    }

    protected getFloat(propertyName: string): number {
        const value = this.getJToken(propertyName);
        if (value !== null && value !== undefined) {
            return parseFloat(value.toString());
        }
        return -1;
    }

    protected getEnum<T>(propertyName: string, enumType: any): T {
        const stringValue = this.getString(propertyName);
        return this.toEnum<T>(stringValue, enumType);
    }

    protected getBool(name: string): boolean {
        const value = this.getJToken(name);
        if (value !== null && value !== undefined) {
            return Boolean(value);
        }
        return false;
    }

    protected getArray(name: string): any[] {
        const value = this.getJToken(name);
        if (value && Array.isArray(value)) {
            return value;
        }
        return [];
    }

    toString(): string {
        return `[Node]`;
    }

    isValid(): boolean {
        return this._successfullyRetrievedAnyValue;
    }
}
