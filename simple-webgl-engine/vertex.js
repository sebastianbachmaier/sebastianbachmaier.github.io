export class Vertex2D {
    constructor(points, color) {
        this.points = points;
        if (typeof color[0] === 'number') {
            this.color = [color, color, color];
        }
        else {
            this.color = color;
        }
    }
    get positions() {
        return this.points.flat();
    }
    /**
     * get the centroid of the triangle
     */
    get centroid() {
        const x = (this.points[0][0] + this.points[1][0] + this.points[2][0]) / 3;
        const y = (this.points[0][1] + this.points[1][1] + this.points[2][1]) / 3;
        return [x, y];
    }
    /**
     * rotate triangle around its centroid
     * @param angle in radians
     */
    rotate(angle, centroid = this.centroid) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        this.points = this.points.map((point) => {
            const x = point[0] - centroid[0];
            const y = point[1] - centroid[1];
            return [
                x * cos - y * sin + centroid[0],
                x * sin + y * cos + centroid[1],
            ];
        });
    }
}
export class Object2D {
    constructor(vertices, colors) {
        this.vertices = vertices.map((vertex, index) => {
            const color = colors[index % colors.length];
            return new Vertex2D(vertex, color);
        });
    }
    get positions() {
        return this.vertices.map((vertex) => vertex.positions).flat();
    }
    get colors() {
        return this.vertices.map((vertex) => vertex.color.flat()).flat();
    }
    /**
     * get the centroid of the object
     * @returns centroid of the object
     */
    get centroid() {
        const x = this.vertices.reduce((acc, vertex) => acc + vertex.centroid[0], 0) /
            this.vertices.length;
        const y = this.vertices.reduce((acc, vertex) => acc + vertex.centroid[1], 0) /
            this.vertices.length;
        return [x, y];
    }
    /**
     * rotate object around its centroid
     * @param angle in radians
     */
    rotate(angle) {
        const centroid = this.centroid;
        this.vertices = this.vertices.map((vertex) => {
            vertex.rotate(angle, centroid);
            return vertex;
        });
    }
}
//# sourceMappingURL=vertex.js.map