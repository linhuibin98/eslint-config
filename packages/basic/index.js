/**
 * @link https://eslint.bootcss.com/docs/user-guide/configuring
 */
module.exports = {
    env: {
        es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        browser: true, // 浏览器环境中的全局变量
        node: true, // Node.js 全局变量和 Node.js 作用域
    },
    reportUnusedDisableDirectives: true, // 报告未使用的 eslint-disable 评论
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs'] },
        },
    },
    extends: [
        'plugin:import/recommended'
    ],
    plugins: [],
    ignorePatterns: [
        '*.min.*',
        '*.d.ts',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'coverage',
        'public',
        'temp',
        'packages-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vitepress',
        '!.vscode',
    ],
    overrides: [],
    rules: {}
};