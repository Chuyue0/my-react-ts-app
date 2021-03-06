module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // 指定eslint解析器
  plugins: [
    'react-hooks',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则检测
+   'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    serviceworker: true
  },
  rules: {
    '@typescript-eslint/indent': ['error', 24], //缩进为4个空格 
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true 
      // 只要求自定义的方法返回类型
    }],
    '@typescript-eslint/no-explicit-any': ['off'], // 关闭any类型时的警告
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [1], //
    'quotes': ['warn', 'single'], // 字符串以单引号包裹
    'no-console': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'indent': ['error', 4],
    'max-lines': ['warn', 400],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
