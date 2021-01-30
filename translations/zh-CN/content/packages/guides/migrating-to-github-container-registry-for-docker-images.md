---
title: 迁移到 Docker 映像的 GitHub Container Registry
intro: '如果您已经使用 GitHub Packages Docker 注册表来存储 Docker 映像，可以迁移到新的 {% data variables.product.prodname_container_registry %}。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_github_container_registry %} 与 Docker 软件包注册表之间的主要差异

{% data reusables.package_registry.container-registry-beta %}

{% data variables.product.prodname_github_container_registry %} 取代原有的Packages Docker 注册表，并且做了优化，可支持容器的一些独特需求。

{% data reusables.package_registry.container-registry-feature-highlights %}

更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”。

### 计费更改

{% data reusables.package_registry.billing-for-container-registry %}

### 域更改

{% data variables.product.prodname_container_registry %} 的域是 `ghcr.io`。

| 注册表                                                               | 示例 URL                                              |
| ----------------------------------------------------------------- | --------------------------------------------------- |
| {% data variables.product.prodname_registry %} Docker 注册表         | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_github_container_registry %} | `ghcr.io/OWNER/IMAGE_NAME`                          |

### 使用容器注册表进行身份验证

{% data reusables.package_registry.feature-preview-for-container-registry %}

您需要使用基本 URL `ghcr.io` 向 {% data variables.product.prodname_container_registry %} 验证。 我们建议创建新的访问令牌以使用 {% data variables.product.prodname_container_registry %}。

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### 使用 Docker CLI 迁移 Docker 映像

要移动您在 {% data variables.product.prodname_registry %} Docker 注册表上托管的 Docker 映像，您必须将映像重新发布到 {% data variables.product.prodname_container_registry %}。 我们建议在本地计算机上使用命令行重新发布现有的 Docker 映像。

1. 使用作用域至少为 `read:packages` 的临时 PAT 登录到 Docker 注册表。 此 PAT 将仅用于登录到 Docker 注册表以下拉映像，然后可以删除。
  {% raw %}
  ```shell
  $ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
  ```
  {% endraw %}
2. 下拉要迁移的映像，将 OWNER 替换为拥有仓库的用户或组织帐户的名称，将 REPOSITORY 替换为包含项目的仓库，将 IMAGE_NAME 替换为包或映像的名称，将 VERSION 替换为要安装的映像的标记。 例如，`docker ull docker.pkg.github.com/octo-org/octoshift/octoshift:latest` 拉取 octo-org 组织中 `octoshift/octoshift` 映像的最新标记。
  ```shell
  $ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```

3. 使用新域和新映像名称重新标记映像。 更多信息请参阅 Docker 文档中的“[Docker 标记](https://docs.docker.com/engine/reference/commandline/tag/)”。 使用在上一步中用于 SOURCE URL 同一个URL。 将 TARGET_OWNER 替换为要将容器映像迁移到其中的用户或组织，将 TARGET_IMAGE_NAME 替换为新 {% data variables.product.prodname_container_registry %} 映像名称。
  ```shell
  $ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
  ```

4. 登录到新的

{% data variables.product.prodname_container_registry %}. 我们建议创建限于 `read:packages` 和 `write:packages` 范围的新 PAT，因为您不再需要 `repo` 范围，并且您之前的 PAT 不能具有 `write:packages` 范围。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  ```
  {% endraw %}
5. 将重新标记的映像推送到 {% data variables.product.prodname_container_registry %}。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
  ```

### 更新 {% data variables.product.prodname_actions %} 工作流程

{% data reusables.package_registry.feature-preview-for-container-registry %}

如果您有 {% data variables.product.prodname_actions %} 工作流程使用来自 {% data variables.product.prodname_registry %} Docker 注册表的 Docker 映像，则可能需要将工作流程更新到 {% data variables.product.prodname_container_registry %}，以允许匿名访问公共容器映像、更细致的访问权限以及更好的容器存储和带宽兼容性。

1. 将 Docker 映像迁移到 `ghcr.io` 上的新 {% data variables.product.prodname_container_registry %}。 例如，请参阅“[使用 Docker CLI 迁移 Docker 映像](#migrating-a-docker-image-using-the-docker-cli)”。

2. 在 {% data variables.product.prodname_actions %} 工作流程文件中，将包 url 从 `https://docker.pkg.github.com` 更新到 `ghcr.io`。

3. 将新的 {% data variables.product.prodname_container_registry %} 身份验证个人访问令牌 (PAT) 添加为 GitHub ACtions 密码。 {% data variables.product.prodname_github_container_registry %} 不支持对 PAT 使用 `GITHUB_TOKEN`，因此您必须使用不同的自定义变量，例如 `CR_PAT`。 更多信息请参阅“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

4. 在 {% data variables.product.prodname_actions %} 工作流程文件中更新身份验证 PAT，将 Docker 注册表 PAT ({% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}) 替换为 {% data variables.product.prodname_container_registry %} PAT 的新变量，例如 {% raw %}`${{ secrets.CR_PAT }}`{% endraw %}。

#### 更新的工作流程示例

如果工作流程的一部分访问由 Docker 注册表托管的 Docker 映像，如：

{% raw %}
```yaml
echo ${{ secrets.GITHUB_TOKEN }} | docker login https://docker.pkg.github.com -u $GITHUB_ACTOR --password-stdin
docker pull docker.pkg.github.com/github/octoshift/octoshift:latest
docker build . --tag docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA --cache-from docker.pkg.github.com/github/octoshift/octoshift:latest
docker push docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA
```
{% endraw %}

然后，您需要使用新的 URL 和 PAT {% data variables.product.prodname_container_registry %} 更新工作流程，如：

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.CR_PAT }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
