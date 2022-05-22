---
title: 从 Docker 注册表迁移到容器注册表
intro: '先前存储在 Docker 注册表中的 Docker 映像将自动迁移到 {% data variables.product.prodname_container_registry %}。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: 迁移到容器注册表
---

{% data variables.product.prodname_dotcom %} 的 Docker 注册表已被 {% data variables.product.prodname_container_registry %} 取代。 如果您已将 Docker 映像存储在 Docker 注册表中，它们将自动移动到 {% data variables.product.prodname_container_registry %}。 您不需要任何操作。 使用 Docker 注册表 (`docker.pkg.github.com`) 名称空间的任何脚本或 {% data variables.product.prodname_actions %} 工作流程在迁移到 {% data variables.product.prodname_container_registry %} (`ghcr.io`)后将继续运行。

迁移逐步进行，而不是一次性完成。 如果您的映像尚未移动，请抓紧，我们很快就会收到它们。

## 如何判断您的映像是否已迁移？

在 Docker 映像迁移到 {% data variables.product.prodname_container_registry %} 后，您将在包的详细信息页面上看到以下更改：

* 图标现在是 {% data variables.product.prodname_container_registry %} 徽标，之前是 Docker 徽标。
* 拉取 URL 中的域名现在是 `ghcr.io`，以前是 `docker.pkg.github.com`。

![{% data variables.product.prodname_container_registry %} 详细信息页面](/assets/images/help/package-registry/container-registry-details-page.png)

## {% data variables.product.prodname_container_registry %} 与 Docker 注册表之间的主要差异

{% data variables.product.prodname_container_registry %} 进行了优化，以支持容器的一些独特需求。

通过 {% data variables.product.prodname_container_registry %}，您可以：
- 将容器映像存储在组织和用户帐户中，或连接到仓库。
- 选择是从仓库继承权限，还是独立于仓库设置粒度权限。
- 匿名访问公共容器映像。

### Docker 映像详细信息的 API 查询

迁移后，您将无法再使用 GraphQL API 来查询`包类型` "DOCKER"。 相反，您可以使用 REST API 来查询有 `package_type` "container" 的软件包。 更多信息请参阅 REST API 文章“[包](/rest/reference/packages)”。

## 计费

有关 {% data variables.product.prodname_container_registry %} 计费的更多信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。
