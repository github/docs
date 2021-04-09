---
title: 删除容器映像
intro: '您可以使用 GraphQL 或在 {% data variables.product.prodname_dotcom %} 上删除私有容器映像的版本。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### 关于包删除

您可以在 {% data variables.product.prodname_dotcom %} 上删除整个容器映像或特定版本。 要删除容器映像，必须使用 UI。 目前不支持使用 GraphQL 来删除容器映像。

要删除容器映像，您必须具有容器映像的管理员权限。

删除公共包时，请注意，您可能会破坏依赖于包的项目。

### 删除 {% data variables.product.prodname_dotcom %} 上用户拥有的容器映像版本

{% data reusables.package_registry.package-settings-from-user-level %}
5. 在左侧单击 **Manage versions（管理版本）**。
5. 在要删除的版本的右侧，单击 **Delete（删除）**。 ![删除包按钮](/assets/images/help/package-registry/delete-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-package-deletion.png)

### 删除 {% data variables.product.prodname_dotcom %} 上组织拥有的容器映像版本

{% data reusables.package_registry.package-settings-from-org-level %}
5. 在左侧单击 **Manage versions（管理版本）**。
5. 在要删除的版本的右侧，单击 **Delete（删除）**。 ![删除包按钮](/assets/images/help/package-registry/delete-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-package-deletion.png)
