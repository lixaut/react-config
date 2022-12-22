
## 初始化配置

1. 绝对路径配置：根目录下 `jsconfig.js`
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

2. scss 样式预处理配置：
```bash
npm install sass
```

3. 取消 Eslint 语法检查配置：`package.json`
```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "rules": {
      "no-undef": "off",
      "no-restricted-globals": "off",
      "no-unused-vars": "off"
    }
  },
}
```