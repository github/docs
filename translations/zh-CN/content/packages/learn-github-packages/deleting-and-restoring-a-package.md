---
title: 删除和恢复包
intro: '了解如何删除或恢复包。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}上的包删除和恢复支持

在 {% data variables.product.prodname_dotcom %} 上，如果您有必要的访问权限，您可以删除：
- 整个私有包
- 整个公共包（如果任何包版本不超过 25 次下载）
- 私有包的特定版本
- 公共包的特定版本（如果包版本不超过 25 次下载）

{% note %}

**注:**
- 如果任何版本的包下载量超过 25 次，则无法删除公共包。 在这种情况下，请联系 [GitHub 支持](https://support.github.com/contact) 获取更多帮助。
- 删除公共包时，请注意，您可能会破坏依赖于包的项目。

{% endnote %}

出现以下情况时，您也可以在 {% data variables.product.prodname_dotcom %} 上恢复整个包或包版本：
- 您在删除后 30 天内恢复包。
- 相同的包名称空间仍然可用，并且不用于新包。

## 包 API 支持

{% if currentVersion == "free-pro-team@latest" %}

您可以使用 REST API 来管理您的包。 更多信息请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。

{% endif %}

对于继承其权限和从仓库访问权限的包，您可以使用 GraphQL 来删除特定的包。{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_registry %} GraphQL API 不支持使用包命名空间 `https://ghcr.io/OWNER/PACKAGE-NAME` 的容器或 Docker 映像。 有关 GraphQL 支持的更多信息，请参阅“[使用 GraphQL 删除仓库范围包的版本](#deleting-a-version-of-a-repository-scoped-package-with-graphql)”。

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

## 删除或恢复包所需的权限

对于从仓库继承其访问权限的包，如果您拥有仓库管理权限，则可以删除包。

{% data variables.product.prodname_registry %} 上仓库范围的包中包括以下包：
- npm
- RubyGems
- maven
- Gradle
- NuGet
- `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` 上的 Docker 映像

{% if currentVersion == "free-pro-team@latest" %}

要删除与仓库分开的具有粒度权限的软件包，例如存储在 `https://ghcr.io/OWNER/PACKAGE-NAME` 上的容器或 Docker 映像，您必须对该包具有管理员访问权限。
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% data reusables.package_registry.container-registry-beta %}

{% endif %}


## 使用 {% data variables.product.prodname_actions %} 自动删除软件包版本

您可以使用 {% data variables.product.company_short %} 创建的官方操作自动删除软件包。 此操作可在操作仓库或 {% data variables.product.prodname_marketplace %} 上使用，只适用于仓库范围的软件包。 更多信息请参阅 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/delete-package-versions) 上或[操作仓库](https://github.com/actions/delete-package-versions)中的“删除包版本”操作。

## 删除包版本

### 在 {% data variables.product.prodname_dotcom %} 上删除仓库范围的包版本

要删除仓库范围包的版本，您必须对拥有该包的仓库具有管理员权限。 更多信息请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. 在左侧单击 **Manage versions（管理版本）**。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Delete version（删除版本）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

### 使用 GraphQL 删除仓库范围包的版本

对于从仓库继承其许可和访问权限的包，您可以使用 GraphQL 删除特定的包版本。

{% if currentVersion == "free-pro-team@latest" %}
`ghcr.io` 上的容器或 Docker 映像不支持 GraphQL。
{% endif %}<!--PLACEHOLDER for when API link is live:  For full support, use the REST API. For more information, see the "\[{% data variables.product.prodname_registry %} API\](/rest/reference/packages)." -->在 GraphQL API 中使用 `deletePackageVersion` 突变。 必须使用具有 `read:packages`、`delete:packages` 和 `repo` 作用域的令牌。 有关令牌的更多信息，请参阅“[关于 {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)”。

下面的示例演示如何使用 `packageVersionId` of `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg` 删除包版本。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

要查找已发布到 {% data variables.product.prodname_registry %} 的所有私有包以及包的版本 ID，您可以使用 `registryPackagesForQuery` 连接。 您需要具有 `read:packages` 和 `repo` 作用域的令牌。 更多信息请参阅“[`registryPackagesForQuery`](/v4/object/registrypackageconnection/)”。

有关 `deletePackageVersion` 突变的更多信息，请参阅“[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)”。

您不能直接使用 GraphQL 删除整个包，但如果您删除包的每个版本，该包将不再显示在 {% data variables.product.product_name %} 上。

{% if currentVersion == "free-pro-team@latest" %}
### 在 {% data variables.product.prodname_dotcom %} 上删除用户范围的包版本

要在 {% data variables.product.prodname_dotcom %} 上删除用户范围包的特定版本，例如 `ghcr.io` 上的 Docker 映像，请使用以下步骤。 要删除整个包，请参阅“[删除 {% data variables.product.prodname_dotcom %} 上整个用户范围的包](#deleting-an-entire-user-scoped-package-on-github)”。

{% data reusables.package_registry.container-registry-beta %}

要查看谁可以删除包版本，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. 在左侧单击 **Manage versions（管理版本）**。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Delete version（删除版本）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### 在 GitHub 上删除组织范围包版本

要在 {% data variables.product.prodname_dotcom %} 上删除组织范围包的特定版本，例如 `ghcr.io` 上的 Docker 映像，请使用以下步骤。 要删除整个包，请参阅“[删除 {% data variables.product.prodname_dotcom %} 上整个组织范围的包](#deleting-an-entire-organization-scoped-package-on-github)”。

{% data reusables.package_registry.container-registry-beta %}

要查看谁可以删除包版本，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. 在左侧单击 **Manage versions（管理版本）**。
5. 在要删除的版本的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Delete version（删除版本）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-version.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## 删除整个包

### 在 {% data variables.product.prodname_dotcom %} 上删除整个仓库范围的包

要删除整个仓库范围的包，您必须对拥有该包的仓库具有管理员权限。 更多信息请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. 在“Danger Zone（危险区域）”下，单击**Delete this package（删除此包）**。
5. 要确认，请查看确认消息，输入您的包名称，然后单击 **I understand, delete this package（我了解，删除此包）**。 ![确认包删除按钮](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}
### 在 {% data variables.product.prodname_dotcom %} 上删除整个用户范围的包

要查看谁可以删除包，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击 **Options（选项）**。 !["选项"菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“Danger Zone（危险区域）”下，单击**Delete this package（删除此包）**。 ![删除包版本按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this package（我明白后果，删除此包）**。 ![确认包版本删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### 在 {% data variables.product.prodname_dotcom %} 上删除整个组织范围的包

要查看谁可以删除包，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. 在左侧，单击 **Options（选项）**。 !["选项"菜单选项](/assets/images/help/package-registry/options-for-container-settings.png)
6. 在“Danger Zone（危险区域）”下，单击**Delete this package（删除此包）**。 ![删除包按钮](/assets/images/help/package-registry/delete-container-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this package（我明白后果，删除此包）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## 恢复包

您在以下情况下可以恢复已删除的包或版本：
- 您在删除后 30 天内恢复包。
- 相同的包名称空间和版本仍然可用，并且不重复用于新包。

例如，如果您删除了名为 `octo-package` 且范围为 repo `octo-repo-owner/octo-repo` 的 rubygem 包，则您仅在包名称空间 `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` 仍然可用且 30 天未过时才可恢复包。

您还必须满足这些权限要求之一：
  - 对于仓库范围的包：您必须对拥有删除的包的仓库具有管理员权限。
  - 对于用户帐户范围的包：您的用户帐户拥有已删除的包。
  - 对于组织范围的包：您对拥有包的组织中删除的包具有管理员权限。

更多信息请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

在包恢复后，包将使用与以前相同的名称空间。 如果相同的包名称空间不可用，您将无法恢复包。 在这种情况下，要恢复已删除的包，您必须先删除使用已删除包名称空间的新包。

### 恢复组织中的包

您可以通过组织帐户设置恢复已删除的包，只要该包位于您的一个仓库中或具有粒度权限，并且范围限于您的组织帐户。

要查看谁可以恢复组织中的包，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. 在左侧，单击 **Packages（包）**。
4. 在“Deleted Packages（已删除的包）”下要恢复的包旁边，单击 **Restore（恢复）**。 ![恢复按钮](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 要确认，请输入包名称，然后单击**I understand the consequences, restore this package（我明白后果，恢复此包）**。 ![恢复包确认按钮](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### 恢复用户帐户范围的包

如果包在您的一个仓库中或范围限于您的用户帐，则您可以通过用户帐户设置恢复已删除的包。 更多信息请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

{% data reusables.user_settings.access_settings %}
2. 在左侧，单击 **Packages（包）**。
4. 在“Deleted Packages（已删除的包）”下要恢复的包旁边，单击 **Restore（恢复）**。 ![恢复按钮](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 要确认，请输入包名称，然后单击**I understand the consequences, restore this package（我明白后果，恢复此包）**。 ![恢复包确认按钮](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### 恢复包版本

您可以从包的登录页面恢复包版本。 要查看谁可以恢复包，请参阅“[必需权限](#required-permissions-to-delete-or-restore-a-package)”。

1. 导航到包的登录页。
2. 在右侧单击 **Package settings（包设置）**。
2. 在左侧单击 **Manage versions（管理版本）**。
3. 在右上角，使用“Versions（版本）”下拉菜单选择 **Deleted（已删除）**。 ![显示已删除选项的版本下拉菜单](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 在您要恢复的已删除包版本旁边，单击 **Restore（恢复）**。 ![已删除的包版本旁边的恢复选项](/assets/images/help/package-registry/restore-package-version.png)
5. 要确认，请单击 **I understand the consequences, restore this version（我明白后果，恢复此版本）**。 ![确认包版本恢复](/assets/images/help/package-registry/confirm-package-version-restoration.png)
