# 基本项目结构
## 快速创建项目
**通过 ```npm create vite@latest``` 命令创建基本的项目：**

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea48c7838e8041d7819d8f419d03fefc~tplv-k3u1fbpfcp-watermark.image?)

**目录结构：**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/808ae5610b39474f8a1a8223b97c3ffd~tplv-k3u1fbpfcp-watermark.image?)

**默认启动页面：**

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f8fe5bafa3447e49bfbfb391d0ecaf2~tplv-k3u1fbpfcp-watermark.image?)

现在，我们已经拥有了一个最基本项目结构了，接下来我们只需要为其 "添砖加瓦" 即可。 

# 代码规范
## 配置 editorconfig
目的是为了保证不同开发人员在 **不同操作系统** 上拥有一致的编码风格，例如同样是换行符，在不同系统上表现是不一样的，又或者是不同人员在不同的编辑器上使用的缩进方式不同等，都很容易导致代码风格不统一的问题。

- 配置 [**`editorconfig`**](https://editorconfig.org/) 文件，可参考 [**Vue2.x**](https://github.com/vuejs/vue/tree/master) 中的配置
- 如果使用的是 **VScode** 编辑器，需要安装插件：[**EditorConfig for VScode**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- 如果使用的是 **WebStorm** 编辑器，不需要安装 **EditorConfig** 插件，因为其内部已经默认集成了，所以只需要开启支持即可。

测试效果如下，其中是通过 **Tab** 键产生的缩进：

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecd9a77fe67049998ee87096e46a92bc~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

## 配置 eslink
[**`ESLint`**](https://eslint.org/docs/user-guide/getting-started) 能够帮助开发者在编码过程中及时给予不符合代码规范的提示，它和下面的 **`prettier`** 作用的时机是不一样的。
- 安装依赖 **`npm install eslint --save-dev`**
- 可通过 **`npm init @eslint/config`** 命令设置配置文件

    <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fcb75216c9c40eb97a4f3f66fdcd060~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
 - 上一步操作完成后会得到 **`.eslintrc.js`** 文件，可通过此文件修改配置
 - 配置 **scripts** 脚本命令： `"lint": "eslint --fix --ext .ts,.vue src"` 提供自动修复功能
 - 通过 [**`eslint-plugin-vue`**](https://eslint.vuejs.org/user-guide/) 解决 **eslint** 认为 **defineProps** 未定义错误，如下：
 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e686de3f0d474be88c519b00c623a483~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
 
 - 修改 `.eslintrc.js` 配置文件，如下：
     ```js
     env: {
         ...
        'vue/setup-compiler-macros': true,
      }
     ```
 
 配置完成后 **eslint** 生效，以下原因是没有在每行语句结束处添加 **;**
 
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86da25e899474b7b8a1c0fe42c14fbd7~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b5d91b32f8a4d4dad8d1c38ead611e5~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

## 配置 prettier
目的是为了统一代码的格式化方式，若使用的是 **VScode** 编辑器，可以直接使用它的插件 [**`Prettier - Code formatter`**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，但这种方式依赖于 **VScode** 插件机制实现的格式化，但是一旦开发人员编辑器不统一，或者是想通过 script 脚本命令直接格式化所有包含文件，那么就不得不需要单独安装这个 [**`prettier`**](https://prettier.io/docs/en/install.html) 包。
- 安装依赖 ```npm install --save-dev --save-exact prettier```
- 创建 [`.prettierrc`](https://prettier.io/docs/en/configuration.html) 文件进行配置，可参考 [**Vue3.x**](https://github.com/vuejs/core) 的配置
- 创建 [`.prettiterignore`](https://prettier.io/docs/en/ignore.html)文件配置忽略文件
- 创建 **script** 脚本 `prettier --write .` —— 目的是支持通过脚本一次性执行多个文件的格式化
- 通过 [**`eslint-config-prettier`**](https://github.com/prettier/eslint-config-prettier#installation) 和 [**`eslint-plugin-prettier`**](https://www.npmjs.com/package/eslint-plugin-prettier) 避免 **prettier** 和 **eslink** 配置上的冲突
    - 安装依赖 `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
    - 在 `.eslintrc.js` 文件中添加 `plugin:prettier/recommended` 进行扩展，例如：
        ```js
          extends: [
            'plugin:vue/vue3-essential',
            '@vue/airbnb',
            '@vue/typescript/recommended',
          ],
        ```

通过脚本实现格式化效果如下：

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9d2373d896c4b67a124498a26f44e62~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

## 配置 husky
虽然前面我们已经使用了 **eslink** 规范化代码，但是仍无法保证开发人员是否对所有 **eslink** 暴露的问题进行了处理，此时如果开发人员选择将问题忽略，直接将代码进行提交，必然导致仓库中的代码也是不规范的，因此，在不符合规范的条件下拦截开发人员的提交动作是有必要的。

- [**husky 文档**](https://typicode.github.io/husky/#/?id=usage) 推荐使用 `npx husky-init && npm install` 命令自动化设置

    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5696b4f203d94e31a26ea0f624d1a083~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
- 安装 `npm install --save-dev commitizen` 目的是规范化提交信息
    - 使用 [**`commitizen`**](https://www.npmjs.com/package/commitizen) 提交时，系统会提示开发者在提交时填写所有必需的提交字段
- 通过 `npx commitizen init cz-conventional-changelog --save-dev --save-exact` 命令初始化项目，便后续使用 **cz** 时能有更友好的记录

  <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c0db0a5a210487f92ba70b609166d1c~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
  
- 后续进行提交操作时，通过 `npx cz` 代替 `git add .` 之类的命令，如：
    - 可以在 **package.json** 添加脚本  ```"scripts": { "commit": "cz" }```，并使用 `npm run commit` 代替 `npx cz` 命令

     <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65bf31abb0c54d31bc71b6bb950f431f~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
- 安装 `npm install --save-dev @commitlint/config-conventional @commitlint/cli`
    - 目的是通过 [**`@commitlint/config-conventional`**](https://www.npmjs.com/package/@commitlint/config-conventional) 拦截开发人员不合理的提交信息
- 在根目录创建 `commit.config.js` 文件进行 **commit message** 配置，如：
    ```js
        module.exports = {
            extends: ['@commitlint/config-conventional']
        };
    ```
- [使用 `husky` 生成的 `commit-msg` 文件](https://commitlint.js.org/#/guides-local-setup?id=install-husky)，验证提交信息: `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'`

以下是规范化后提交格式：

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1945a83269941c69987db1053744f57~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

# 环境变量
通常项目会处于很多不同环境，其中包含三个最基本的环境：
- **开发环境**
- **测试环境**
- **生产环境**
若你想了解更多关于 **vite** 具体如何配置环境变量，[**可点此查看**](https://vitejs.cn/guide/env-and-mode.html)

> **注意：`.env` 文件只能放在根目录下，否则 vite 无法读取 `.env` 文件内容**

在本文中作为示例只创建这三种基本的环境：
- 为不同的环境创建 **`.env`** 文件，如下：
 
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/575786c019504bdb9a99de976cdb7b39~tplv-k3u1fbpfcp-watermark.image?)
    
- 在 `package.json` 修改对应的命令，如下：

     <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d993fde213348cb9d572660b25443cb~tplv-k3u1fbpfcp-watermark.image?" width="100%" />
     
- 为了支持对 **自定义环境编变量** 的友好提示，需要在 **`env.d.ts`** 文件中添加对应的 **ImportMeta** 接口
    ```js
     interface ImportMetaEnv {
       readonly VITE_API_ENV: string
     }

     // eslint-disable-next-line no-unused-vars
     interface ImportMeta {
       readonly env: ImportMetaEnv
     }
    ```

通过在 **App.vue** 中进行测试，`import.meta.env.VITE_API_ENV` 进行获取环境变量的值，结果如下：
  <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0db3d09c8e1f481387ec8c339e1a539a~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

# 集成 vue-router
具体实现请看源码配置，以下是简述：
- 通过 `npm install vue-router@4` 安装符合 **Vue3** 版本的 [**Vue Router**](https://router.vuejs.org/zh/)
- 创建 **router** 文件夹，其中 **index.ts** 为统一的入口文件，**routes** 目录存放不同的模块路由
- 创建 **pages** 文件夹，存放页面相关的内容，可引入到 **routes** 中充当展示组件
- 定义基本路由，如配置 **Home 页的重定向、NotFound 页面** 等

测试效果如下：

  <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ced67d69a994a70b3d3ff0a2e477721~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

# 集成 pinia
具体实现请看源码配置，以下是简述：
- 通过 `npm install pinia` 安装 [**pinia**](https://pinia.vuejs.org/introduction.html)
- 在 `src` 目录下创建 `store` 目录用来存放 **state、actions、gette** 等模块

    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f25218db88c40e88cde439ba17e5739~tplv-k3u1fbpfcp-watermark.image?)
    
- 创建一个 **pinia**（根存储）并将其传递给应用程序，如：
    ```js
    import { createPinia } from 'pinia'
    app.use(createPinia())
    ```

测试效果如下：

  <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73e4e3eca2514819875928c8495047ea~tplv-k3u1fbpfcp-watermark.image?" width="100%" />

# 封装 axios
关于 [**axios**](https://axios-http.com/docs/intro) 的 **class** 封装已经有很多的文章都讲得很细了，这里使用 **函数式** 进行二次封装，具体实现请看源码配置，以下是简述：
- 通过 `npm i axios` 安装 [**axios**](https://axios-http.com/docs/intro)
- 在 `src` 目录下创建 `utils` 目录用于提供自定义工具模块方法，同时在其目录下请求模块创建 `request` 目录存放二次封装的 `axios`
    
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f8aab0807764bfdb7f56ba7ad8bfebc~tplv-k3u1fbpfcp-watermark.image?)
- `request` 目录下封装常用的方法包含 **`get、post、upload、download`** 等

    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05367d5c9c1141e28a6e7c449cfc16f4~tplv-k3u1fbpfcp-watermark.image?)
    
如下是使用 [**apifox**](https://www.apifox.cn/) 模拟接口，得到的测试结果：

<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a05df7b3847d40c4a98499bb11173805~tplv-k3u1fbpfcp-watermark.image?" width="100%" />