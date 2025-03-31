export declare class Vertex2D {
    points: t_Vertex2D;
    color: t_VertexColor;
    constructor(points: t_Vertex2D, color: t_Color | t_VertexColor);
    get positions(): number[];
    /**
     * get the centroid of the triangle
     */
    get centroid(): t_Point2D;
    /**
     * rotate triangle around its centroid
     * @param angle in radians
     */
    rotate(angle: number, centroid?: t_Point2D): void;
}
export declare class Object2D {
    vertices: Vertex2D[];
    constructor(vertices: t_Vertex2D[], colors: (t_Color | t_VertexColor)[]);
    get positions(): number[];
    get colors(): number[];
    /**
     * get the centroid of the object
     * @returns centroid of the object
     */
    get centroid(): t_Point2D;
    /**
     * rotate object around its centroid
     * @param angle in radians
     */
    rotate(angle: number): void;
}
