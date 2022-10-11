---
title: 为您的仓库和代码空间组织管理加密的密钥
shortTitle: 管理仓库和组织的密钥
intro: '加密密钥允许您将敏感信息存储在您的组织、仓库或 {% data variables.product.prodname_codespaces %} 中。'
permissions: 'To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### 关于密钥

密钥是您在组织或仓库中创建的加密环境变量。 您创建的密钥可用于 {% data variables.product.prodname_codespaces %}。 GitHub 在密钥到达 GitHub 之前使用 [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) 对其加密，并且仅当您在代码空间中使用它们时才予以解密。

组织级密钥允许在多个仓库之间共享密钥，从而减少创建重复密钥的需要。 您可以使用访问策略来控制哪些仓库可以使用组织密钥。

{% data reusables.codespaces.secrets-on-start %}

#### 命名密钥

{% data reusables.codespaces.secrets-naming %} 例如，在仓库级别创建的密钥必须在该仓库中具有唯一的名称， 而在组织级创建的密钥必须在该级别有独特的名称。

  {% data reusables.codespaces.secret-precedence %}

#### 密码的限制

每个组织最多可存储 100 个密钥，每个仓库最多可存储 100 个密钥。

密码大小限于 64 KB。

### 为仓库添加密钥

要为组织仓库创建密码，您必须具有管理员访问权限。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 向下滚动页面并在 **Secrets（密钥）**下选择 **Codespaces**。 ![侧栏中的代码空间选项](/assets/images/help/codespaces/codespaces-option-secrets.png)
1. 在页面顶部，单击 **New repository secret（新仓库密钥）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的值。
1. 单击 **Add secret（添加密码）**。

### 为组织添加密钥

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 向下滚动页面并在 **Secrets（密钥）**下选择 **Codespaces**。 ![侧栏中的代码空间选项](/assets/images/help/codespaces/codespaces-option-secrets-org.png)
1. 在页面顶部，单击 **New organization secret（新组织密钥）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。 ![已选定私有仓库的仓库访问列表](/assets/images/help/codespaces/secret-repository-access.png)
1. 单击 **Add secret（添加密码）**。

### 审查对组织级别密码的访问权限

您可以检查哪些访问策略应用于组织中的密钥。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 密码列表包括任何已配置的权限和策略。 例如： ![密码列表](/assets/images/help/settings/actions-org-secrets-list.png)
1. 有关已为每个密码配置的权限的更多信息，请单击 **Update（更新）**。
