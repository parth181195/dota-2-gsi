/**
 * Class representing 2D vectors.
 */
export class Vector2D {
    /**
     * The X component of the vector.
     */
    x: number;

    /**
     * The Y component of the vector.
     */
    y: number;

    /**
     * Default constructor with given X and Y coordinates.
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `[Vector2D X: ${this.x}, Y: ${this.y}]`;
    }
}