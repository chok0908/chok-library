module.exports = {
	root: true,
	env: {
		node: true,
		'vue/setup-compiler-macros': true,
	},

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],

	parserOptions: {
		// ecmaVersion: 2020,
    // project: "tsconfig.json",
    // tsconfigRootDir: __dirname,
    // sourceType: "module",

    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
	},

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'off',
		'vue/multi-word-component-names': 0,
		'@typescript-eslint/no-unused-vars': ['error'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 130,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
				semi: false,
				singleAttributePerLine: true,
				spaceBeforeFunctionParen: 'never',
			},
		],
	},
}
