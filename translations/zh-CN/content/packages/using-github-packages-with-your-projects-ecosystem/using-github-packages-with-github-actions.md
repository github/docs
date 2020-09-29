---
title: 将 GitHub 包用于 GitHub 操作
intro: '您可以配置 {% data variables.product.prodname_actions %} 中的工作流程以自动发布或安装 {% data variables.product.prodname_registry %} 的包。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于 {% data variables.product.prodname_registry %} 与 {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)”。

您可以通过在工作流程中发布或安装包来扩展仓库的 CI 和 CD 功能。

{% if currentVersion == "free-pro-team@latest" %}
#### 向 {% data variables.product.prodname_github_container_registry %} 验证

{% data reusables.package_registry.container-registry-beta %}

不使用个人访问令牌向 {% data variables.product.prodname_registry %} 验证，而使用在您启用 {% data variables.product.prodname_actions %} 时 {% data variables.product.prodname_dotcom %} 自动为您的仓库创建的 `GITHUB_TOKEN`。 For an authentication example, see "[Authenticating with the {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)."

{% endif %}

#### Authenticating to package registries on {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}If you want your workflow to authenticate to {% data variables.product.prodname_registry %} to access a package registry other than the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %} instead of a personal access token for authentication. `GITHUB_TOKEN` 具有对仓前仓库的 `read:packages` 和 `write:packages` 作用域。 对于复刻，该令牌还具有对父仓库的 `read:packages` 作用域。

您还可以使用 {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} 上下文在工作流程文件中引用 `GITHUB_TOKEN`。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。

### 使用操作发布包

您可以使用 {% data variables.product.prodname_actions %} 将发布包作为持续集成 (CI) 流程的一部分。 For example, you could configure a workflow so that anytime a developer pushes code to the default branch, the workflow runs CI tests. 如果这些测试通过，该工作流程就会将新的包版本发布到 {% data variables.product.prodname_registry %}。 仅当代码符合您的质量标准时，该工作流程才会自动创建新的包版本。

{% data reusables.package_registry.actions-configuration %}

### 使用操作安装包

您可以使用 {% data variables.product.prodname_actions %} 将安装包作为 CI 流程的一部分。 例如，您可以配置一个工作流程：每当开发者向拉取请求推送代码时，该工作流程就会通过下载并安装 {% data variables.product.prodname_registry %} 托管的包来解析依赖项。 然后，该工作流程就可以运行需要这些依赖项的 CI 测试。

使用 `GITHUB_TOKEN`，可通过 {% data variables.product.prodname_actions %} 安装 {% data variables.product.prodname_registry %} 托管的包，只需极少的配置或额外身份验证。 使用操作安装包时，数据传输也是免费的。 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN` 无法从操作运行所在仓库之外的任何私有仓库安装包。  You cannot currently use `GITHUB_TOKEN` to authenticate to {% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
