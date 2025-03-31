export declare function loadShaderText(url: string): Promise<string>;
export declare function createShader(gl: WebGLRenderingContext, type: GLenum, source: string): WebGLShader;
export declare function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram;
