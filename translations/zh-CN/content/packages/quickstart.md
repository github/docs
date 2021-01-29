---
title: GitHub Packages 快速入门
intro: '使用 {% data variables.product.prodname_actions %} 在 5 分钟内发布到 {% data variables.product.prodname_registry %}。'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### 简介

您只需要一个现有的 {% data variables.product.prodname_dotcom %} 仓库将包发布到到 {% data variables.product.prodname_registry %}。 在本指南中，您将创建 {% data variables.product.prodname_actions %} 工作流程来测试代码，然后将其发布到 {% data variables.product.prodname_registry %}。 随意为此快速入门创建新仓库。 您可以使用它来测试当前和未来的 {% data variables.product.prodname_actions %} 工作流程。

### 发布包

1. 在 {% data variables.product.prodname_dotcom %} 上创建新仓库，为节点添加 `.gitignore`。 如果稍后要删除此包，请创建私有仓库，公共包无法删除。 更多信息请参阅“[创建新仓库](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)”。
2. 将仓库克隆到本机。
    {% raw %}
    ```shell
    $ git clone https://github.com/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
    {% endraw %}
3. 创建 `index.js` 文件，并添加基本警报说 "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. 初始化 npm 包。 在包初始化向导中，输入包名称：_`@YOUR-USERNAME/YOUR-REPOSITORY`_，如果您没有任何测试，请将测试脚本设置为 `exit 0`。 提交更改并推送以
{% data variables.product.prodname_dotcom %} 上的站点。
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...

    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
    {% endraw %}
5. 从 {% data variables.product.prodname_dotcom %} 上的仓库，在 `.github/workflow` 目录中创建一个名为 `release-package.yml` 的新文件。 更多信息请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
6. 将以下 YAML 内容复制到 `release-package.yml` 文件中。
    {% raw %}
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: https://npm.pkg.github.com/
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    ```
    {% endraw %}
7. 滚动到页面底部，然后选择 **Create a new branch for this commit and start a pull request（为此提交创建一个新分支并开始拉取请求）**。 然后，若要创建拉取请求，请单击 **Propose new file（提议新文件）**。
8. **合并**拉取请求。
9. 导航到 **Code（代码）**选项卡，并创建一个新版本来测试工作流程。 更多信息请参阅“[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)”。

在仓库中创建新版本将触发生成和测试代码的工作流程。 如果测试通过，则包将发布到 {% data variables.product.prodname_registry %}。

### 查看已发布的包

包在仓库级别发布。 您可以查看仓库中的所有包，也可以搜索特定的包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### 安装已发布的包

现在，您已发布包，您需要使用它作为项目之间的依赖项。 更多信息请参阅"[配置 npm 用于 {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)"。

### 后续步骤

您刚刚添加的基本工作流程在仓库中创建新版本时运行。 但是，这只是您可以对 {% data variables.product.prodname_registry %} 执行操作的开始。 您可以使用单个工作流和将包发布到多个注册表，触发工作流程以在发生不同事件（如合并拉取请求、管理容器等）时运行。

合并 {% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_actions %} 可以帮助您实现应用程序开发过程几乎每个方面的自动化。 准备好开始了吗？ 以下是一些有用的资源，可用于执行 {% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_actions %} 的后续步骤：

- “[了解 {% data variables.product.prodname_registry %}](/packages/learn-github-packages)”，以获取 GitHub Packages 的深入教程
- “[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”，以获取 GitHub Actions 的深入教程
- “[指南](/packages/guides)”，以获取特定用例和示例
