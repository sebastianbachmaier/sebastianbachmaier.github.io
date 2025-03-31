export declare enum e_AttributeType {
    'vec2' = 2,
    'vec3' = 3,
    'vec4' = 4
}
/**
 *
 * @param gl WebGLRenderingContext
 * @param attrbuteName name used in the vertex shader
 * @param size type of the attribute
 * @param data nuber array
 * @returns attribute location
 */
export declare function setupBuffer(gl: WebGLRenderingContext, attrbuteName: string, size: e_AttributeType, data: number[]): number;
