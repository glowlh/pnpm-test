module.exports = {
    env: {
        cjs: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            browsers: '> 0.25%, not dead',
                        },
                        modules: 'cjs',
                    },
                ],
            ],
        },
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                        modules: 'cjs',
                        useBuiltIns: false,
                    },
                ],
                '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
    },
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: 'last 2 versions, not IE <= 11',
                },
                modules: false,
                useBuiltIns: false,
                loose: true,
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@linaria',
    ],
    plugins: [
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: false,
                helpers: false,
                useESModules: true,
            },
        ],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-react-constant-elements'
    ],
};