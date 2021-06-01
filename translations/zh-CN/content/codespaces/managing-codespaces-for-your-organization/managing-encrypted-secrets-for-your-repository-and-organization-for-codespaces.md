---
title: Managing encrypted secrets for your repository and organization for Codespaces
shortTitle: Managing secrets for your repository and organization
intro: 'Encrypted secrets allow you to store sensitive information in your organization, repository, or {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### About secrets

Secrets are encrypted environment variables that you create in an organization or  repository. The secrets that you create are available to use in {% data variables.product.prodname_codespaces %}. GitHub uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before they reach GitHub and only decrypts them when you use them in a codespace.

Organization-level secrets let you share secrets between multiple repositories, which reduces the need to create duplicate secrets. You can use access policies to control which repositories can use organization secrets.

{% data reusables.codespaces.secrets-on-start %}

#### Naming secrets

{% data reusables.codespaces.secrets-naming %} For example, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  {% data reusables.codespaces.secret-precedence %}

#### 密码的限制

You can store up to 100 secrets per organization and 100 secrets per repository.

密码大小限于 64 KB。

### Adding secrets for a repository

To create secrets for an organization repository, you must have administrator access.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Scroll down the page and under **Secrets**, select **Codespaces**. ![Codespaces option in side bar](/assets/images/help/codespaces/codespaces-option-secrets.png)
1. At the top of the page, click **New repository secret**.
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的值。
1. 单击 **Add secret（添加密码）**。

### Adding secrets for an organization

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Scroll down the page and under **Secrets**, select **Codespaces**. ![Codespaces option in side bar](/assets/images/help/codespaces/codespaces-option-secrets-org.png)
1. At the top of the page, click **New organization secret**.
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。 ![Repository Access list with private repositories selected](/assets/images/help/codespaces/secret-repository-access.png)
1. 单击 **Add secret（添加密码）**。

### 审查对组织级别密码的访问权限

You can check which access policies are applied to a secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 密码列表包括任何已配置的权限和策略。 例如： ![密码列表](/assets/images/help/settings/actions-org-secrets-list.png)
1. 有关已为每个密码配置的权限的更多信息，请单击 **Update（更新）**。
