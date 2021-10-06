---
title: GitHub Packages 快速入门
intro: '通过 {% data variables.product.prodname_actions %} 发布到 {% data variables.product.prodname_registry %}。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: 快速入门
---

{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

## 简介

在本指南中，您将创建 {% data variables.product.prodname_actions %} 工作流程来测试代码，然后将其发布到 {% data variables.product.prodname_registry %}。

## 发布包

1. 在 {% data variables.product.prodname_dotcom %} 上创建新仓库，为节点添加 `.gitignore`。 {% ifversion ghes < 3.1 %} 如果您希望以后删除这个软件包，请创建私有仓库，公共软件包不能删除。{% endif %} 更多信息请参阅“[创建新仓库](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)”。
2. 将仓库克隆到本机。
    ```shell
    $ git clone https://{% ifversion ghae %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. 创建 `index.js` 文件，并添加基本警报说 "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. 使用 `npm init` 初始化 npm 包。 在包初始化向导中，输入包名称：_`@YOUR-USERNAME/YOUR-REPOSITORY`_，将测试脚本设置为 `exit 0`。 这将生成一个 `package.json` 文件，其中包含关于您的包的信息。
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}
5. 运行 `npm install` 来生成 `package-lock.json` 文件，然后提交并将更改推送到 {% data variables.product.prodname_dotcom %}。
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. 创建 `.github/workflow` 目录。 在该目录中，创建一个名为 `release-package.yml` 的文件。
7. 将以下 YAML 内容复制到 `release-package.yml` 文件{% ifversion ghae %}，将 `YOUR-HOSTNAME` 替换为企业的名称{% endif %}。
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
          - uses: actions/setup-node@v2
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
        permissions:
          packages: write
          contents: read{% endif %}
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: 12
              registry-url: {% ifversion ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. 告诉 NPM 使用以下方法之一发布包的范围和注册表：
   - 在根目录中创建包含以下内容的 `.npmrc` 文件，为仓库添加 NPM 配置文件：
      {% raw %}
      ```shell
      <em>@YOUR-USERNAME</em>:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - 编辑 `package.json` 文件，并指定 `publishConfig` 密钥：
      {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. 提交并推送更改到 {% data variables.product.prodname_dotcom %}。
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add <em>.npmrc or package.json</em>
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  只要您的仓库中创建新版本，您创建的工作流程就会运行。 如果测试通过，则包将发布到 {% data variables.product.prodname_registry %}。

    要测试这一点，请导航到仓库中的 **Code（代码）**选项卡，并创建新版本。 更多信息请参阅“[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)”。

## 查看已发布的包

您可以查看您发布的所有软件包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


## 安装已发布的包

现在，您已发布包，您需要使用它作为项目之间的依赖项。 更多信息请参阅“[使用 npm 注册表](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)”。

## 后续步骤

您刚刚添加的基本工作流程在仓库中创建新版本时运行。 但是，这只是您可以对 {% data variables.product.prodname_registry %} 执行操作的开始。 您可以使用单个工作流和将包发布到多个注册表，触发工作流程以在发生不同事件（如合并拉取请求、管理容器等）时运行。

合并 {% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_actions %} 可以帮助您实现应用程序开发过程几乎每个方面的自动化。 准备好开始了吗？ 以下是一些有用的资源，可用于执行 {% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_actions %} 的后续步骤：

- “[了解 {% data variables.product.prodname_registry %}](/packages/learn-github-packages)”，以获取 GitHub Packages 的深入教程
- “[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”，以获取 GitHub Actions 的深入教程
- 特定用例和示例的“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)”
