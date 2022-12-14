---
title: 删除和恢复包
intro: 了解如何删除或恢复包。
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193071'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}上的包删除和恢复支持

在 {% data variables.product.prodname_dotcom %} 上，如果您有必要的访问权限，您可以删除：
- 整个私有包
- 整个公共包（如果任何包版本不超过 5000 次下载）
- 私有包的特定版本
- 公共包的特定版本（如果包版本不超过 5,000 次下载）

{% note %}

**注意：**
- 如果任何版本的包下载量超过 5,000 次，则无法删除公共包。 在此方案中，请联系 [GitHub 支持](https://support.github.com/contact?tags=docs-packages)获取进一步帮助。
- 删除公共包时，请注意，您可能会破坏依赖于包的项目。

{% endnote %}

出现以下情况时，您也可以在 {% data variables.product.prodname_dotcom %} 上恢复整个包或包版本：
- 您在删除后 30 天内恢复包。
- 相同的包命名空间仍然可用，并且不用于新包。

## 包 API 支持

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

您可以使用 REST API 来管理您的包。 有关详细信息，请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## 删除或恢复包所需的权限

{% ifversion packages-registries-v2 %} 借助支持精细权限的注册表，可以选择允许将包的范围限定为用户或组织，或链接到存储库。

若要删除具有独立于存储库的精细权限的包，例如存储在 {% ifversion ghes %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME`{% else %}`https://ghcr.io/OWNER/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} 的容器映像或存储在 `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`{% endif %} 的包，必须具有对包的管理员访问权限。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”。

对于从存储库继承其访问权限的包，如果你对存储库拥有管理员权限，则可以删除包。

某些注册表仅支持存储库范围的包。 有关这些注册表的列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)”。

{% else %}

如果具有包发布目标存储库的管理员权限，则可以删除包。

{% endif %}

## 删除包版本

### 在 {% data variables.product.prodname_dotcom %} 上删除{% ifversion packages-registries-v2 %}存储库范围的{% endif %}包版本

若要删除{% ifversion packages-registries-v2 %}存储库范围的{% endif %}包版本，必须对拥有该包的存储库具有管理员权限。 有关详细信息，请参阅“[所需的权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击“管理版本”。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择“删除版本”。
  ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 若要确认删除，请键入包名称，并单击“我知道后果，请删除此版本”。
  ![确认包删除按钮](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### 使用 GraphQL 删除{% ifversion packages-registries-v2 %}存储库范围的{% endif %}包版本

{% data reusables.package_registry.about-graphql-support %}{% ifversion fpt or ghec %} 有关改用 REST API 的信息，请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。{% endif %}

在 GraphQL API 中使用 `deletePackageVersion` 突变。 必须使用具有 `read:packages`、`delete:packages` 和 `repo` 范围的 {% data variables.product.pat_v1 %}。 有关 {% data variables.product.pat_v1_plural %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)”。

下面的示例演示如何删除 `packageVersionId` 为 `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg` 的包版本。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

要查找已发布到 {% data variables.product.prodname_registry %} 的所有私有包以及包的版本 ID，你可以通过 `repository` 对象使用 `packages` 连接。 你将需要具有 `read:packages` 和 `repo` 范围的 {% data variables.product.pat_v1 %}。 有关详细信息，请参阅 [`packages`](/graphql/reference/objects#repository) 连接或 [`PackageOwner`](/graphql/reference/interfaces#packageowner) 接口。

有关 `deletePackageVersion` 突变的详细信息，请参阅“[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)”。

您不能直接使用 GraphQL 删除整个包，但如果您删除包的每个版本，该包将不再显示在 {% data variables.product.product_name %} 上。

{% endif %}

{% ifversion fpt or ghec %}
### 在 {% data variables.product.prodname_dotcom %} 上删除用户范围的包版本

要在 {% data variables.product.prodname_dotcom %} 上删除用户范围包的特定版本，例如 `ghcr.io` 上的 Docker 映像，请使用以下步骤。 若要删除整个范围，请参阅“[在 {% data variables.product.prodname_dotcom %} 上删除整个用户范围的包](#deleting-an-entire-user-scoped-package-on-github)

若要查看谁可以删除包版本，请参阅“[所需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击“管理版本”。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择“删除版本”。
  ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 若要确认删除，请键入包名称，并单击“我知道后果，请删除此版本”。
  ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### 在 {% data variables.product.prodname_dotcom %} 上删除组织范围的包版本

要在 {% data variables.product.prodname_dotcom %} 上删除组织范围包的特定版本，例如 `ghcr.io` 上的 Docker 映像，请使用以下步骤。
若要删除整个范围，请参阅“[在 {% data variables.product.prodname_dotcom %} 上删除整个组织范围的包](#deleting-an-entire-organization-scoped-package-on-github)。

要查看谁可以删除包版本，请参阅“[删除或还原包所需的权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击“管理版本”。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择“删除版本”。
  ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 若要确认删除，请键入包名称，并单击“我知道后果，请删除此版本”。
  ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## 删除整个包

### 在 {% data variables.product.prodname_dotcom %} 上删除整个仓库范围的包

要删除整个仓库范围的包，您必须对拥有该包的仓库具有管理员权限。 有关详细信息，请参阅“[所需的权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. 在“危险区域”下，单击“删除此包”。
5. 要确认，请查看确认消息，输入你的包名称，然后单击“我了解，删除此包”
  ![确认包删除按钮](/assets/images/help/package-registry/package-version-deletion-confirmation.png)。

{% ifversion fpt or ghec %}
### 在 {% data variables.product.prodname_dotcom %} 上删除整个用户范围的包

若要查看谁可以删除包，请参阅“[所需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击“选项”。
  ![“选项”菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“危险区域”下，单击“删除此包”。
  ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 若要确认删除，请键入包名称，并单击“我知道后果，请删除此包”。
  ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### 在 {% data variables.product.prodname_dotcom %} 上删除整个组织范围的包

若要查看谁可以删除包，请参阅“[所需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击“选项”。
  ![“选项”菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“危险区域”下，单击“删除此包”。
  ![删除包按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 若要确认删除，请键入包名称，并单击“我知道后果，请删除此包”。
  ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## 恢复包

您在以下情况下可以恢复已删除的包或版本：
- 您在删除后 30 天内恢复包。
- 相同的包名称空间和版本仍然可用，并且不重复用于新包。

例如，如果你有一个范围已限定为 `octo-repo-owner/octo-repo` 的名为 `octo-package` 的已删除 RubyGems 存储库，则仅当包命名空间 `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` 仍然可用且尚未过 30 天时，才能还原该包。

{% ifversion fpt or ghec %} 若要还原已删除的包，你还必须满足以下权限要求之一：
  - 对于存储库范围的包：你必须对拥有已删除的包的存储库具有管理员权限。{% ifversion fpt or ghec %}
  - 对于用户帐户范围的包：你的个人帐户拥有已删除的包。
  - 对于组织范围的包：你对拥有包的组织中已删除的包具有管理员权限。{% endif %} {% endif %}

{% ifversion ghae or ghes %} 若要删除包，还必须对拥有已删除的包的存储库具有管理员权限。
{% endif %}

有关详细信息，请参阅“[所需的权限](#required-permissions-to-delete-or-restore-a-package)”。

在包恢复后，包将使用与以前相同的名称空间。 如果相同的包名称空间不可用，您将无法恢复包。 在这种情况下，要恢复已删除的包，您必须先删除使用已删除包名称空间的新包。

### 恢复组织中的包

 您可以通过组织帐户设置恢复已删除的包，只要该包位于 organizaton{% ifversion fpt or ghec %} 拥有的仓库中，或者具有粒度权限，并且范围限定在您的组织帐户{% endif %}。

若要查看谁可以在组织中还原包，请参阅“[所需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. 在左侧，单击“包”。
4. 在“已删除的包”下要还原的包旁边，单击“还原”。
  ![“还原”按钮](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 若要确认，请输入包名称，然后单击我明白后果，恢复此包”。
  ![恢复包确认按钮](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### 恢复用户帐户范围的包

如果包位于你的一个存储库中或范围限定为你的个人帐户，则可以通过个人帐户设置还原已删除的包。 有关详细信息，请参阅“[所需的权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.user-settings.access_settings %}
2. 在左侧，单击“包”。
4. 在“已删除的包”下要还原的包旁边，单击“还原”。
  ![“还原”按钮](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 若要确认，请输入包名称，然后单击我明白后果，恢复此包”。
  ![恢复包确认按钮](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### 恢复包版本

您可以从包的登录页面恢复包版本。 若要查看谁可以还原包，请参阅“[所需权限](#required-permissions-to-delete-or-restore-a-package)”。

1. 导航到包的登录页。
2. 在右侧，单击“包设置”。
2. 在左侧，单击“管理版本”。
3. 在右上角，使用“版本”下拉菜单并选择“已删除”。
  ![显示已删除选项的版本下拉菜单](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 在要还原的已删除包版本旁边，单击“还原”。
  ![已删除的包版本旁边的恢复选项](/assets/images/help/package-registry/restore-package-version.png)
5. 若要确认，请单击“我了解后果”，还原此版本”
  ![确认包版本还原](/assets/images/help/package-registry/confirm-package-version-restoration.png)。
