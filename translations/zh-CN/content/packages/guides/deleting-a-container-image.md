---
title: 删除容器映像
intro: '您可以在 {% data variables.product.prodname_dotcom %} 中删除一个特定版本或所有版本的私有或公共容器映像。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/deleting-a-container-image
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### 关于包删除

您可以在 {% data variables.product.prodname_dotcom %} 上删除整个容器映像或特定版本。 要删除容器映像，必须使用 UI。 目前不支持使用 GraphQL 来删除容器映像。

要删除容器映像，您必须具有容器映像的管理员权限。

删除公共包时，请注意，您可能会破坏依赖于包的项目。

### 删除 {% data variables.product.prodname_dotcom %} 上用户拥有的容器映像版本

要只删除容器映像的特定版本，您可以使用以下步骤。 要删除整个包，请参阅“[删除 {% data variables.product.prodname_dotcom %} 上所有版本的用户自有容器映像](#deleting-all-versions-of-a-user-owned-container-image-on-github)”。

{% data reusables.package_registry.package-settings-from-user-level %}
5. 在左侧单击 **Manage versions（管理版本）**。
6. （可选）为确保看到您的软件包的所有版本，请使用“Type（类型）”下拉菜单并选择 **All（所有）**。 ![包版本类型下拉菜单显示列出所有版本的选项](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Delete version（删除版本）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### 删除 {% data variables.product.prodname_dotcom %} 上组织拥有的容器映像版本

要只删除您具有管理员权限的容器映像的特定版本，可以使用以下步骤。 要删除整个包，请参阅“[删除 {% data variables.product.prodname_dotcom %} 上所有版本的组织自有容器映像](#deleting-all-versions-of-an-organization-owned-container-image-on-github)”。

{% data reusables.package_registry.package-settings-from-org-level %}
5. 在左侧单击 **Manage versions（管理版本）**。
6. （可选）为确保看到您的软件包的所有版本，请使用“Type（类型）”下拉菜单并选择 **All（所有）**。 ![包版本类型下拉菜单显示列出所有版本的选项](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Delete version（删除版本）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### 删除 {% data variables.product.prodname_dotcom %} 上用户拥有的容器映像的所有版本

{% data reusables.package_registry.package-settings-from-user-level %}
5. 在左侧，单击 **Options（选项）**。 !["选项"菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“Danger Zone（危险区域）”下，单击**Delete this package（删除此包）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this package（我明白后果，删除此包）**。 ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### 删除 {% data variables.product.prodname_dotcom %} 上组织拥有的容器映像的所有版本

{% data reusables.package_registry.package-settings-from-org-level %}
5. 在左侧，单击 **Options（选项）**。 !["选项"菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“Danger Zone（危险区域）”下，单击**Delete this package（删除此包）**。 ![删除包按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this package（我明白后果，删除此包）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png)
