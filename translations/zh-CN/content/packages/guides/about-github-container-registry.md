---
title: 关于 GitHub Container Registration
intro: '您可以使用 {% data variables.product.prodname_github_container_registry %} 在 {% data variables.product.prodname_dotcom %} 上的组织或个人用户帐户中无缝托管和管理 Docker 容器映像。 {% data variables.product.prodname_github_container_registry %} 允许您配置谁可以使用细粒度权限管理和访问包。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
versions:
  free-pro-team: '*'
---

{% note %}

**注：**{% data variables.product.prodname_github_container_registry %} 目前处于公测阶段，可能会更改。 在测试阶段，存储和带宽是免费的。 要使用 {% data variables.product.prodname_github_container_registry %}，您必须为您的帐户启用该功能。 更多信息请参阅“[启用改进的容器支持](/packages/guides/enabling-improved-container-support)”。

{% endnote %}

### 关于 {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-feature-highlights %}

要共享有关包使用的上下文，可以将仓库链接到 {% data variables.product.prodname_dotcom %} 上的容器映像。 更多信息请参阅“[将仓库连接到容器映像](/packages/guides/connecting-a-repository-to-a-container-image)”。

{% data variables.product.prodname_github_container_registry %} 与其他包注册表具有不同的托管位置、权限和可见性。

|      | 包注册表                                                                                                                                                                                                    | {% data variables.product.prodname_github_container_registry %}
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 托管位置 | 您可以在一个仓库中托管多个包。                                                                                                                                                                                         | 您可以在一个组织或用户帐户中托管多个容器映像。                                           |
| 权限   | {% data reusables.package_registry.public-or-private-packages %} 您可以使用 {% data variables.product.prodname_dotcom %} 角色和团队来限制谁可以安装或发布每个包，因为包会继承仓库的权限。 对仓库有读取权限的任何人都可以将包安装为项目中的依赖项，有写入权限的任何人都可以发布新的包版本。 | 对于每个容器映像，您可以选择其他人具有的访问权限级别。 容器映像访问的权限与组织和仓库权限不同。                  |
 可见性 | {% data reusables.package_registry.public-or-private-packages %} | 您可以设置每个容器映像的可见性。 私有容器映像仅对组织内被授予访问权限的人员或团队可见。 公共容器映像对任何人都可见。 | 匿名访问 | N/A| 您可以匿名访问公共容器映像。

更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %} 的范围和权限](#about-scopes-and-permissions-for-github-container-registry)”。

### 支持的格式

{% data variables.product.prodname_container_registry %} 目前支持以下容器映像格式：

* [Docker 映像清单 V2，架构 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) 规格](https://github.com/opencontainers/image-spec)

{% data variables.product.prodname_github_container_registry %} 在 `ghcr.io/OWNER/IMAGE-NAME` 托管容器。

| 包客户端   | 语言  | 包格式          | 描述     |
| ------ | --- | ------------ | ------ |
| docker | 不适用 | `Dockerfile` | 节点包管理器 |


#### 清单列表/映像索引

{% data variables.product.prodname_github_container_registry %} 也支持 Docker V2、Schema 2 和 OCI 映像规格中定义的 [Docker 清单列表](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list)/[OCI 映像索引](https://github.com/opencontainers/image-spec/blob/79b036d80240ae530a8de15e1d21c7ab9292c693/image-index.md)格式。

### 容器映像的可见性和访问权限

如果您对容器映像具有管理员权限，可以将容器映像设置为私有或公有。 公有映像允许匿名访问，无需身份验证或通过 CLI 登录即可进行拉取。

作为管理员，您还可以授予容器映像的访问权限，该权限与在组织和仓库级别设置的权限不同。

对于由用户帐户发布和拥有的容器映像，您可以向任何人授予访问角色。 对于组织发布和拥有的容器映像，您可以为组织中的任何人或团队授予访问角色。

| 权限角色 | 访问描述                                                         |
| ---- | ------------------------------------------------------------ |
| 读取   | 可以下载包。 <br> 可以读取包元数据。                                  |
| 写入   | 可以上传和下载此包。 <br> 可以读取和写入包元数据。                           |
| 管理员  | 可以上传、下载、删除和管理此包。 <br> 可以读取和写入包元数据。 <br> 可以授予包权限。 |

更多信息请参阅“[配置容器映像的访问控制和可见性](/packages/guides/configuring-access-control-and-visibility-for-container-images)”。

### 关于令牌

要安装或发布包，您必须使用具有适当作用域的令牌，并且您的用户帐户必须对该仓库具有适当的权限。

| 作用域               | 描述                                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | 从 {% data variables.product.prodname_github_container_registry %} 下载和安装容器映像                                                                         |
| `write:packages`  | 上传和发布容器映像到 {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | 从 {% data variables.product.prodname_github_container_registry %} 删除私有或公共容器映像的特定版本。 更多信息请参阅“[删除容器映像](/packages/guides/deleting-a-container-image)”。 |

要了解容器映像的可用范围和权限，请参阅“[配置容器映像的访问控制和可见性](/packages/guides/configuring-access-control-and-visibility-for-container-images)”。

更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token/)”和“[可用作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)”。

### 关于 {% data variables.product.prodname_github_container_registry %} 的计费

{% data reusables.package_registry.billing-for-container-registry %}

### 联系支持

如果您对 {% data variables.product.prodname_github_container_registry %} 有反馈或功能请求，请使用[反馈表](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages)。

如果在 {% data variables.product.prodname_github_container_registry %} 方面遇到以下问题，请使用[我们的联系表](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情.
* 遇到模糊或不清楚的错误.
* 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息.
