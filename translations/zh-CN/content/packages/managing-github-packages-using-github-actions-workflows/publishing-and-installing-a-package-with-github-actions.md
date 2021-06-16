---
title: 使用 GitHub Actions 发布和安装包
intro: '您可以配置 {% data variables.product.prodname_actions %} 中的工作流程以自动发布或安装 {% data variables.product.prodname_registry %} 的包。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### 关于 {% data variables.product.prodname_registry %} 与 {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)”。

您可以通过在工作流程中发布或安装包来扩展仓库的 CI 和 CD 功能。

{% if currentVersion == "free-pro-team@latest" %}
#### 向 {% data variables.product.prodname_container_registry %} 验证

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

有关身份验证示例，请参阅“[向 {% data variables.product.prodname_container_registry %} 验证](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)”。

{% endif %}

#### 向 {% data variables.product.prodname_dotcom %} 上的软件包注册表验证

{% if currentVersion == "free-pro-team@latest" %}如果您希望工作流程向 {% data variables.product.prodname_registry %} 验证以访问 {% data variables.product.product_name %} 上 {% data variables.product.prodname_container_registry %} 以外的软件包注册表，则{% else %}要向 {% data variables.product.product_name %} 上的软件包注册表验证，{% endif %}我们建议使用 {% data variables.product.product_name %} 在您启用 {% data variables.product.prodname_actions %} 时自动为您的仓库创建的 `GITHUB_TOKEN` 来验证，而不是使用个人访问令牌来验证。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}您应该在工作流程文件中设置此访问令牌的权限，以授予 `contents` 范围的读取访问权限，并授予 `packages` 范围的写入访问权限。 {% else %}它对工作流程运行的仓库中的包具有读取和写入权限。 {% endif %}对于复刻，`GITHUB_TOKEN` 被授予对父仓库的读取访问权限。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

您还可以使用 {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} 上下文在工作流程文件中引用 `GITHUB_TOKEN`。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。

### 关于仓库拥有的包的权限和包访问权限

{% note %}

**注意：**仓库拥有的包包括 RubyGems、npm、Apache Maven、NuGet、Gradle 和 Docker 包，它们使用包命名空间 `docker.pkg.github.com`。

{% endnote %}

启用 GitHub 操作后，GitHub 会在您的仓库中安装 GitHub 应用程序。 `GITHUB_TOKEN` 密码是一种 GitHub 应用程序安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 GitHub 应用程序进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 更多信息请参阅“[GITHUB_TOKEN 的权限](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)”。

{% data variables.product.prodname_registry %} 允许您通过可用于 {% data variables.product.prodname_actions %} 工作流程的 `GITHUB_TOKEN` 推送和拉取包。

{% if currentVersion == "free-pro-team@latest" %}
### 关于 {% data variables.product.prodname_container_registry %} 的权限和包访问权限

{% data variables.product.prodname_container_registry %} (`ghcr.io`) 允许用户创建和管理容器，作为组织一级的独立资源。 容器可以归组织或个人用户帐户所有，您可以自定义与存储库权限分开的每个容器访问权限。

所有访问 {% data variables.product.prodname_container_registry %} 的工作流程都应该使用 `GITHUB_TOKEN` 而不是个人访问令牌。 有关安全最佳实践的更多信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”。

### 通过工作流程修改的容器的默认权限和访问设置

当您通过工作流程创建、安装、修改或删除容器时，有一些默认权限和访问设置用于确保管理员能够访问工作流程。 您也可以调整这些访问设置。

例如，默认情况下，如果工作流程使用 `GITHUB_TOKEN` 创建容器，则：
- 容器继承运行工作流程的仓库的可见性和权限模型。
- 在创建容器后，工作流程运行的仓库管理员将成为容器的管理员。

以下是管理包的工作流程的默认权限如何运作的更多示例。

| {% data variables.product.prodname_actions %} 工作流程任务 | 默认权限和访问                                                                                                                                                                             |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 下载现有容器                                               | - 如果容器是公开的，则任何仓库中运行的任何工作流程都可以下载容器。 <br> - 如果容器是内部容器，则在企业帐户拥有的任何仓库中运行的所有工作流程都可以下载容器。 对于企业拥有的组织，您可以阅读企业中的任何仓库 <br> - 如果容器是私有的，则只有在仓库中运行但在容器上获得读取权限的工作流程才可下载容器。 <br> |
| 上传新版本到现有容器                                           | - 如果容器是私有、内部或公共的，则只有在该容器上获得写入权限的仓库中运行的工作流程才可将新版本上传到容器中。                                                                                                                             |
| 删除容器或容器版本                                            | - 如果容器是私有、内部或公共的，则只有在该容器上获得删除权限的仓库中运行的工作流程才可删除容器的现有版本。                                                                                                                              |

您还可以使用更精细的方式调整对容器的访问，或调整一些默认权限行为。 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。

{% endif %}

### 使用操作发布包

您可以使用 {% data variables.product.prodname_actions %} 在持续集成 (CI) 流程中自动发布包。 如果代码符合您的质量标准，可使用这种持续部署 (CD) 方法自动创建新的包版本。 例如，您可以创建一个每当开发者向特定分支推送代码时运行 CI 测试的工作流程。 如果测试通过，则工作流程可以将新的包版本发布到 {% data variables.product.prodname_registry %}。

{% data reusables.package_registry.actions-configuration %}

下面的示例演示如何使用 {% data variables.product.prodname_actions %} 构建和测试应用程序，然后自动创建 Docker 映像并将其发布到 {% data variables.product.prodname_registry %}：

- 在仓库中创建新的工作流程文件（例如 `.github/workflows/deploy-image.yml`），并添加以下 YAML：
  ```yaml{:copy}
  name: Create and publish a package
  on:
    push:
      branches: ['release']
  jobs:
    run-npm-build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: npm install and build webpack
          run: |
            npm install
            npm run build
        - uses: actions/upload-artifact@main
          with:
            name: webpack artifacts
            path: public/

    run-npm-test:
      runs-on: ubuntu-latest
      needs: run-npm-build
      strategy:
        matrix:
          os: [ubuntu-latest]
          node-version: [12.x, 14.x]
      steps: {% raw %}
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}{% endraw %}
        - uses: actions/download-artifact@main
          with:
            name: webpack artifacts
            path: public
        - name: npm install, and test
          run: |
            npm install
            npm test
          env:
            CI: true

    build-and-push-image:
      runs-on: ubuntu-latest
      needs: run-npm-test {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions: 
        contents: read
        packages: write {% endif %}
      steps:
        - name: Checkout
          uses: actions/checkout@v2
        - name: Log in to GitHub Docker Registry
          uses: docker/login-action@v1
          with:
            registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
            username: {% raw %}${{ github.actor }}{% endraw %}
            password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        - name: Build container image
          uses: docker/build-push-action@v2
          with:
            push: true
            tags: |
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
              {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
  ```

  下表介绍了相关设置： <table>
  <tr>
  <td>

{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
  </td>
  <td>
    配置 <code>Create and publish a package</code> 工作流程，以在每次向名为 <code>release</code> 的分支推送更改时运行。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/
  ```
  {% endraw %}
  </td>
  <td>
    此作业会安装 NPM 并使用它来构建应用程序。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true
  ```
{% endraw %}
  </td>
  <td>
    此作业使用 <code>npm test</code> 测试代码。 <code>needs: run-npm-build</code> 命令使此作业依赖于 <code>run-npm-build</code> 作业。
  </td>
  </tr>
  
  <tr>
  <td>

{% raw %}
```yaml
  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test
```
{% endraw %}
  </td>
  <td>
    此作业将发布包。 <code>needs: run-npm-test</code> 命令使此作业依赖于 <code>run-npm-test</code> 作业。
  </td>
  </tr>

  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
  <tr>
  <td>

{% raw %}
  ```yaml
  permissions: 
    contents: read
    packages: write 
  ```
{% endraw %}
  </td>
  <td>
    为此作业中的操作设置授予 <code>GITHUB_TOKEN</code> 的权限。
  </td>
  </tr> {% endif %}
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Log in to GitHub Docker Registry
    uses: docker/login-action@v1
    with:
      registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
      username: ${{ github.actor }}
      password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    创建一个名为<code>登录到 GitHub Docker 注册表</code>的新步骤，以使用将发布包的帐户和密码登录到注册表。 发布后，包归此处定义的帐户所有。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    创建名为 <code>Build container image</code> 的新步骤。 此步骤在 <code>build-and-push-image</code> 作业中运行。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v2
  ```
{% endraw %}
  </td>
  <td>
    使用 Docker <code>build-push-action</code> 操作构建基于仓库的 <code>Dockerfile</code> 的映像。 如果构建成功，它会将映像推送到 {% data variables.product.prodname_registry %}。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
with:
  ```
{% endraw %}
  </td>
  <td>
    将所需参数发送到 <code>build-push-action</code> 操作。 这将在后面的行中定义。
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
push: true
  ```
{% endraw %}
  </td>
  <td>
    此映像如已成功构建，则推送至注册表。
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
tags: |
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
  {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
  ```
  </td>
  <td>
    使用 git ref 标记已发布的软件包（例如用于创建包的分支名称）以及提交 SHA 。
  </td>
  </tr>
  </table>

- 每次将更改推送至仓库中名为 `release` 的分支时，这个新工作流程都会自动运行。 您可以在 **Actions（操作）**选项卡中查看进度。
- 工作流程完成几分钟后，新包将在您的仓库中可见。 要查找可用的包，请参阅“[查看仓库的包](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)”。


### 使用操作安装包

您可以使用 {% data variables.product.prodname_actions %} 将安装包作为 CI 流程的一部分。 例如，您可以配置一个工作流程：每当开发者向拉取请求推送代码时，该工作流程就会通过下载并安装 {% data variables.product.prodname_registry %} 托管的包来解析依赖项。 然后，该工作流程就可以运行需要这些依赖项的 CI 测试。

使用 `GITHUB_TOKEN` 时，通过 {% data variables.product.prodname_actions %} 安装 {% data variables.product.prodname_registry %} 托管的包只需极少的配置或额外身份验证。{% if currentVersion == "free-pro-team@latest" %} 使用操作安装包时，数据传输也是免费的。 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### 升级访问 `ghcr.io`的工作流程

{% data reusables.package_registry.github-token-security-over-pat %}

使用 `GITHUB_TOKEN` 而不是 PAT（包括 `repo` 范围），可提高仓库的安全性，因为您不需要使用长期 PAT，以免对运行工作流程的仓库提供不必要的访问权限。 有关安全最佳实践的更多信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”。

1. 导航到包登陆页面。
1. 在左侧边栏中，单击 **Actions access（操作访问）**。 ![左侧菜单中的"Actions access（操作访问）"选项](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. 为了确保您的容器包能够访问您的工作流程，您必须添加仓库，其中工作流程存储到您的容器。 单击 **Add repository（添加仓库）**并搜索要添加的仓库。 !["添加仓库"按钮](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **注意：**通过 **Actions access（操作访问）**菜单选项将仓库添加到容器不同于将容器连接到仓库。 更多信息请参阅“[确保工作流程访问您的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”和“[将仓库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。

  {% endnote %}
3. （可选）使用“role（角色）”下拉菜单，选择您希望仓库访问您的容器映像所必须拥有的默认访问权限。 ![授予仓库的权限访问级别](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. 打开工作流程文件。 在您登录到 `ghcr.io` 的行上，将 PAT 替换为 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}。

例如，此工作流程发布使用 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} 进行身份验证的 Docker 容器。

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}

    {% raw %}steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log into registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION{% endraw %}
```

{% endif %}
