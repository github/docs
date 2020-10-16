---
title: 关于 GitHub Container Registration
intro: '{% data variables.product.prodname_github_container_registry %} 允许您在 {% data variables.product.prodname_dotcom %} 上的组织或个人用户帐户中无缝托管和管理 Docker 容器映像。 {% data variables.product.prodname_github_container_registry %} 允许您配置谁可以使用细粒度权限管理和访问包。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% note %}

**注：**{% data variables.product.prodname_github_container_registry %} 目前处于公测阶段，可能会更改。 目前，{% data variables.product.prodname_github_container_registry %} 只支持 Docker 映像格式。 在测试阶段，存储和带宽是免费的。

{% endnote %}


{% data reusables.package_registry.container-registry-feature-highlights %}

要共享有关包使用的上下文，可以将仓库链接到 {% data variables.product.prodname_dotcom %} 上的容器映像。 更多信息请参阅“[将仓库连接到容器映像](/packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image)”。

### 支持的格式

{% data variables.product.prodname_container_registry %} 目前只支持 Docker 映像。


### 容器映像的可见性和访问权限

如果您对容器映像具有管理员权限，可以将容器映像设置为私有或公有。 公有映像允许匿名访问，无需身份验证或通过 CLI 登录即可进行拉取。

作为管理员，您还可以授予容器映像的访问权限，该权限与在组织和仓库级别设置的权限不同。

对于由用户帐户发布和拥有的容器映像，您可以向任何人授予访问角色。 对于组织发布和拥有的容器映像，您可以为组织中的任何人或团队授予访问角色。

| 权限角色 | 访问描述                                                         |
| ---- | ------------------------------------------------------------ |
| 读取   | 可以下载包。 <br> 可以读取包元数据。                                  |
| 写入   | 可以上传和下载此包。 <br> 可以读取和写入包元数据。                           |
| 管理员  | 可以上传、下载、删除和管理此包。 <br> 可以读取和写入包元数据。 <br> 可以授予包权限。 |

更多信息请参阅“[配置容器映像的访问控制和可见性](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)”。

### 关于 {% data variables.product.prodname_github_container_registry %} 的计费

{% data reusables.package_registry.billing-for-container-registry %}

### 联系支持

如果您对 {% data variables.product.prodname_github_container_registry %} 有反馈或功能请求，请使用[反馈表](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages)。

如果在 {% data variables.product.prodname_github_container_registry %} 方面遇到以下问题，请使用[我们的联系表](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情.
* 遇到模糊或不清楚的错误.
* 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息.
