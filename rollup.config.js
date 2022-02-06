import { babel } from '@rollup/plugin-babel';
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [{
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
    },
    plugins: [
        resolve({ extensions }),
        commonjs(),
        linaria({
            sourceMap: process.env.NODE_ENV !== 'production',
        }),
        css({
            output: 'styles.css',
        }),
        babel({
            extensions,
            exclude: 'node_modules/**',
        }),
    ],
}]
