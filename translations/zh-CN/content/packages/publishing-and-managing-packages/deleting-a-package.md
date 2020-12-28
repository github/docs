---
title: 删除包
intro: '您可以使用 GraphQL 或在 {% data variables.product.product_name %} 上删除私有包的版本。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% if currentVersion == "free-pro-team@latest" %}
### 关于私有包删除

在特殊情况下，例如出于法律原因或为了满足 GDPR 标准，您可以使用[我们的联系表](https://github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Package%20Registry)要求 {% data variables.contact.github_support %} 为您删除公共包。

{% endif %}

### 关于私有包删除

只能在 {% data variables.product.product_name %} 上或使用 GraphQL API 删除私有包的特定版本。 要删除 {% data variables.product.product_name %} 上出现的整个私有包，必须先删除该包的每个版本。

{% if currentVersion == "free-pro-team@latest" %}
### 关于公共包删除

为避免中断可能依赖于包的项目，您不能删除整个公共包或公共包的特定版本。

在特殊情况下，例如出于法律原因或为了满足 GDPR 标准，您可以使用[我们的联系表](https://github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Package%20Registry)要求 {% data variables.contact.github_support %} 为您删除公共包。

{% else %}

目前，{% data variables.product.prodname_registry %} on {% data variables.product.product_location %} 不支持删除公共包。

{% endif %}

### 在 {% data variables.product.product_name %} 上删除私有包的版本

要删除私有包版本，您必须具有仓库的管理员权限。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. 单击要删除的包的名称。 ![包名称](/assets/images/help/package-registry/select-pkg-cloud.png)
4. 在右侧使用 **Edit package（编辑包）**下拉菜单，然后选择“Manage versions（管理版本）”。 ![包名称](/assets/images/help/package-registry/manage-versions.png)
5. 在要删除的版本的右侧，单击 **Delete（删除）**。 ![删除包按钮](/assets/images/help/package-registry/delete-package-button.png)
6. 要确认删除，请输入包名称，然后单击 **I understand the consequences, delete this version（我明白后果，删除此版本）**。 ![确认包删除按钮](/assets/images/help/package-registry/confirm-package-deletion.png)

### 使用 GraphQL 删除私有包的版本

在 GraphQL API 中使用 `deletePackageVersion` 突变。 必须使用具有 `read:packages`、`delete:packages` 和 `repo` 作用域的令牌。 有关令牌的更多信息，请参阅“[关于 {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)”。

以下是使用个人访问令牌，通过 cURL 命令删除包版本的示例，包版本 ID 为 `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`。

{% if currentVersion == "free-pro-team@latest" %}
```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
https://api.github.com/graphql
```

{% else %}

```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% endif %}

要查找已发布到 {% data variables.product.prodname_registry %} 的所有私有包以及包的版本 ID，您可以使用 `registryPackagesForQuery` 连接。 您需要具有 `read:packages` 和 `repo` 作用域的令牌。 更多信息请参阅“[`registryPackagesForQuery`](/v4/object/registrypackageconnection/)”。

有关 `deletePackageVersion` 突变的更多信息，请参阅“[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)”。

您不能删除整个包，但如果您删除包的每个版本，该包将不再显示在 {% data variables.product.product_name %} 上。
