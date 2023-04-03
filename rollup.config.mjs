import vue from 'rollup-plugin-vue'
import commonjs from "@rollup/plugin-commonjs"
// import json from '@rollup/plugin-json'
import scss from 'rollup-plugin-scss'
// import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import postcssNamespace from 'postcss-selector-namespace';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
// import css from 'rollup-plugin-css-only';
// import babel from 'rollup-plugin-babel';
import { babel as babelCore } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image';
import url from 'rollup-plugin-url';
export default {
    input:'src/lib.ts',
    // input:'src/main.js',
    output: {
        format: 'umd',
        file: 'dist/lib.js',
        name: 'CustomComponent',
        exports:'named',
        globals: {
            vue: 'Vue'
        }
    },
    plugins: [
        babelCore({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false
                    }
                ]
            ],
            plugins: ['@babel/plugin-transform-runtime']
        }),
        nodeResolve(),
        vue(
            {
                css: false,
                // 컴포넌트를 단일 파일 컴포넌트로 변환하기 위한 옵션
                template: {
                    isProduction: true
                }
            }
        ),
        commonjs(),
        terser(),
        scss({ fileName: 'lib.css' }),
        postcss({
            extract: true,
            plugins: [
                postcssNamespace({
                    namespace(css) {
                        return '[data-testcomponent] ' + css.trim();
                    },
                }),
            ],
            extensions: ['.css', '.scss']
        }),
        image(),
        url({
            limit: 0,
            include: ['**/*.png'] // 이곳에서 다른 파일 확장자를 지정해주세요.
        })
        // scss({ fileName: 'lib.css' }),
        // sass({ output: 'lib.css' })
    ],
    external: ['vue'],
}
