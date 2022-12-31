---
title: 使用 GitHub Actions 发布和安装包
intro: '您可以配置 {% data variables.product.prodname_actions %} 中的工作流程以自动发布或安装 {% data variables.product.prodname_registry %} 的包。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193120'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 关于 {% data variables.product.prodname_registry %} 与 {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)”。

您可以通过在工作流程中发布或安装包来扩展仓库的 CI 和 CD 功能。

{% ifversion packages-registries-v2 %}
### 使用精细权限对包注册表进行身份验证

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### 使用存储库范围的权限对包注册表进行身份验证

{% endif %}

{% ifversion packages-registries-v2 %}某些 {% data variables.product.prodname_registry %} 注册表仅支持存储库范围的权限，不支持精细权限。 有关这些注册表的列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)”。

如果要让工作流访问不支持精细权限的 {% data variables.product.prodname_registry %} 注册表，则{% else %}要对 {% data variables.product.product_name %} 上的包注册表进行身份验证，{% endif %}我们建议使用 {% data variables.product.product_name %} 在你启用 {% data variables.product.prodname_actions %} 时自动为注册表创建的 `GITHUB_TOKEN`。 应在工作流文件中设置此访问令牌的权限，以授予 `contents` 范围的读取访问权限，并授予 `packages` 范围的写入访问权限。 对于分支，向 `GITHUB_TOKEN` 授予了对父存储库的读取访问权限。 有关详细信息，请参阅“[使用 GITHUB_TOKEN 进行身份验证](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

可使用 {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} 上下文在工作流文件中引用 `GITHUB_TOKEN`。 有关详细信息，请参阅“[使用 GITHUB_TOKEN 进行身份验证](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。

## 关于权限和包访问

{% ifversion packages-registries-v2 %}

### 范围限定为用户或组织的包

支持精细权限的注册表允许用户在组织级别将包作为独立资源来创建和管理。 包可以归组织或个人帐户所有，你可以自定义与存储库权限分开的每个包访问权限。

访问支持精细权限的注册表的所有工作流都应使用 `GITHUB_TOKEN` 而不是 {% data variables.product.pat_generic %}。 有关安全最佳做法的详细信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”。

### 范围限定为存储库的包

{% endif %}

启用 GitHub 操作后，GitHub 会在您的仓库中安装 GitHub 应用程序。 `GITHUB_TOKEN` 机密是 GitHub 应用安装访问令牌。 您可以使用安装访问令牌代表仓库中安装的 GitHub 应用程序进行身份验证。 令牌的权限仅限于包含您的工作流程的仓库。 有关详细信息，请参阅“[GITHUB_TOKEN 的权限](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)”。

使用 {% data variables.product.prodname_registry %} 能通过可用于 {% data variables.product.prodname_actions %} 工作流的 `GITHUB_TOKEN` 推送和拉取包。

{% ifversion packages-registries-v2 %}

## 通过工作流程修改的容器的默认权限和访问设置

当您通过工作流程创建、安装、修改或删除容器时，有一些默认权限和访问设置用于确保管理员能够访问工作流程。 您也可以调整这些访问设置。

例如，默认情况下，如果工作流使用 `GITHUB_TOKEN` 创建容器，则：
- 容器继承运行工作流程的仓库的可见性和权限模型。
- 在创建容器后，工作流程运行的仓库管理员将成为容器的管理员。

以下是管理包的工作流程的默认权限如何运作的更多示例。

| {% data variables.product.prodname_actions %} 工作流程任务 | 默认权限和访问权限 |
|----|----|
| 下载现有容器 | - 如果容器是公开的，则任何仓库中运行的任何工作流程都可以下载容器。 <br> - 如果容器是内部的，则在企业帐户拥有的任何存储库中运行的所有工作流都可以下载容器。 对于企业拥有的组织，你可以读取企业中的任何存储库 <br> - 如果容器是专用的，则只有在存储库中运行且具有对该容器的读取权限的工作流才可下载容器。 <br>
| 上传新版本到现有容器 | - 如果容器是私有、内部或公共的，则只有在该容器上获得写入权限的仓库中运行的工作流程才可将新版本上传到容器中。
| 删除容器或容器版本 | - 如果容器是私有、内部或公共的，则只有在该容器上获得删除权限的仓库中运行的工作流程才可删除容器的现有版本。

您还可以使用更精细的方式调整对容器的访问，或调整一些默认权限行为。 有关详细信息，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。

{% endif %}

## 使用操作发布包

您可以使用 {% data variables.product.prodname_actions %} 在持续集成 (CI) 流程中自动发布包。 如果代码符合您的质量标准，可使用这种持续部署 (CD) 方法自动创建新的包版本。 例如，您可以创建一个每当开发者向特定分支推送代码时运行 CI 测试的工作流程。 如果测试通过，则工作流程可以将新的包版本发布到 {% data variables.product.prodname_registry %}。

{% data reusables.package_registry.actions-configuration %}

下面的示例演示如何使用 {% data variables.product.prodname_actions %} 构建{% ifversion not fpt or ghec %}和测试{% endif %}应用程序，然后自动创建 Docker 映像并将其发布到 {% data variables.product.prodname_registry %}：

在存储库中创建新的工作流文件（例如 `.github/workflows/deploy-image.yml`），并添加以下 YAML：

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
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
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
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
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

下表介绍了相关设置： 有关工作流中每个元素的完整详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions)”。

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
配置 <code>Create and publish a Docker image</code> 工作流，以便在每次向名为 <code>release</code> 的分支推送更改时运行。
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  为工作流程定义两个自定义环境变量。 这些是用于 {% data variables.product.prodname_container_registry %} 域以及此工作流程生成的 Docker 映像的名称。
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  此工作流程中有单个作业。 它已配置为运行最新版本的 Ubuntu。
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  此作业会安装 NPM 并使用它来构建应用程序。
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
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

</td>
<td>
此作业使用 <code>npm test</code> 来测试代码。 <code>needs: run-npm-build</code> 命令使此作业依赖于 <code>run-npm-build</code> 作业。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
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

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
为此作业中的操作设置授予 <code>GITHUB_TOKEN</code> 的权限。
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
创建一个名为 <code>Log in to the {% data variables.product.prodname_container_registry %}</code> 的步骤，以使用将发布包的帐户和密码登录到注册表。 发布后，包归此处定义的帐户所有。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
此步骤使用 <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> 提取将应用于指定映像的标记和标签。 <code>id</code>“meta”使此步骤的输出可在随后的步骤中被引用。 <code>images</code> 值提供标记和标签的基本名称。
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
新建一个名为 <code>Log in to GitHub Docker Registry</code> 的步骤，以使用将发布包的帐户和密码登录到注册表。 发布后，包归此处定义的帐户所有。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
新建一个名为 <code>Build and push Docker image</code> 的步骤。 此步骤在 <code>build-and-push-image</code> 作业中运行。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
使用 Docker <code>build-push-action</code> 操作生成基于存储库的 <code>Dockerfile</code> 的映像。 如果构建成功，它会将映像推送到 {% data variables.product.prodname_registry %}。
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
将所需的参数发送到 <code>build-push-action</code> 操作。 这些将在后面的行中定义。
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
将构建的上下文定义为位于指定路径中的文件集。 有关详细信息，请参阅“<a href="https://github.com/docker/build-push-action#usage">用法</a>”。
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
此映像如已成功构建，则推送至注册表。
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  添加在 "meta" 步骤中提取的标记和标签。
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
使用触发工作流程的提交的 SHA 标记映像。
</td>
</tr>
{% endif %}

</table>

每次将更改推送到存储库中名为 `release` 的分支时，这个新工作流都会自动运行。 可在“操作”选项卡中查看进度。

工作流程完成几分钟后，新包将在您的仓库中可见。 要查找可用的包，请参阅“[查看存储库的包](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)”。

## 使用操作安装包

您可以使用 {% data variables.product.prodname_actions %} 将安装包作为
CI 流程的一部分。 例如，您可以配置一个工作流程：每当开发者向拉取请求推送代码时，该工作流程就会通过下载并安装 {% data variables.product.prodname_registry %} 托管的包来解析依赖项。 然后，该工作流程就可以运行需要这些依赖项的 CI 测试。

使用 `GITHUB_TOKEN` 时，通过 {% data variables.product.prodname_actions %} 安装 {% data variables.product.prodname_registry %} 托管的包只需极少的配置或额外身份验证。{% ifversion fpt or ghec %}使用操作安装包时，数据传输也是免费的。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## 升级使用 {% data variables.product.pat_generic %} 访问注册表的工作流

{% data variables.product.prodname_registry %} 支持用 `GITHUB_TOKEN` 在你的工作流中进行简单和安全的身份验证。 如果使用的是支持精细权限的注册表，且工作流使用 {% data variables.product.pat_generic %} 向注册表进行身份验证，则强烈建议更新工作流以使用 `GITHUB_TOKEN`。

有关 `GITHUB_TOKEN` 的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

使用 `GITHUB_TOKEN` 而不是 {% data variables.product.pat_v1 %}（包括 `repo` 范围），可提高存储库的安全性，因为无需使用长期 {% data variables.product.pat_generic %}，以免提供对运行工作流的存储库的不必要的访问权限。 有关安全最佳做法的详细信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)”。

1. 导航到包登陆页面。
1. 在左侧边栏中，单击“操作访问”。
  ![左侧菜单中的“操作访问”选项](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. 为了确保您的容器包能够访问您的工作流程，您必须添加仓库，其中工作流程存储到您的容器。 单击“添加存储库”并搜索要添加的存储库。
   ![“添加存储库”按钮](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  注意：通过“操作访问”菜单选项将存储库添加到容器不同于将容器连接到存储库 。 有关详细信息，请参阅“[确保工作流访问你的包](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)”和“[将存储库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。

  {% endnote %}
1. （可选）使用“role（角色）”下拉菜单，选择您希望仓库访问您的容器映像所必须拥有的默认访问权限。
  ![授予存储库的权限访问级别](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. 打开工作流程文件。 在登录注册表的行上，将 {% data variables.product.pat_generic %} 替换为 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}。

例如，此工作流将一个 Docker 映像发布到 {% data variables.product.prodname_container_registry %} 并使用 {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} 进行身份验证。

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
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
