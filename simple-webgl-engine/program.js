var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { e_AttributeType, setupBuffer } from './buffer.js';
import { createProgram, createShader, loadShaderText } from './shader.js';
export function setup(gl, positions, colors) {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * setup shaders
         */
        const vertexShaderSource = yield loadShaderText('./vertex-shader-2d.glsl');
        const fragmentShaderSource = yield loadShaderText('./fragment-shader-2d.glsl');
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program)
            throw new Error('Unable to create program');
        /**
         * setup size and background color
         */
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        /**
         * set up variables
         *
         * uniform: a variable that is the same for all vertices
         * attribute: a variable that is different for each vertex
         * varying: a variable that is different for each pixel
         */
        /** resolution */
        const u_resolution = gl.getUniformLocation(program, 'u_resolution');
        if (u_resolution === -1)
            throw 'Unable to get uniform location';
        gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);
        /**
         * setup positions
         */
        setupBuffer(gl, 'a_position', e_AttributeType.vec2, positions);
        console.log(colors);
        /**
         * seting up colors
         */
        setupBuffer(gl, 'a_color', e_AttributeType.vec4, colors);
    });
}
//# sourceMappingURL=program.js.map