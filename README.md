# nodejs-learn

// 路径查找流程：
内置模块（fs、path等等）=> 检查当前目录中的node_modules => 上级目录中的node_modules => 转化为绝对路径 => 加载模块

### 关于后缀名
可以不写后缀名
- 按照：.js .json node mjs的顺序查找

### 关于文件名
自动查找这个文件夹中的index（按照：.js .json node mjs的顺序查找）文件