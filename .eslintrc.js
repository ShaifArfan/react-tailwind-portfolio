module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'react-hooks'],
	rules: {
		// prettier
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'es5',
				useTabs: true,
				jsxSingleQuote: false,
				tabWidth: 2,
				arrowParens: 'avoid',
				singleQuote: true,
				printWidth: 80,
				endOfLine: 'auto',
			},
		],
		// react
		'react/prop-types': 0,
		'no-unused-vars': 1,
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				aspects: ['invalidHref'],
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		// react-hooks
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
