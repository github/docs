---
title: 管理 Dependabot 的加密密码
intro: 您可以将敏感信息（如密码和访问令牌）存储为加密密码，然后在 {% data variables.product.prodname_dependabot %} 配置文件中引用它们。
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_dependabot %} 的加密密码

{% data variables.product.prodname_dependabot %} 密码是您在组织级别或仓库级别创建的加密凭据。
当您在组织级别添加密码时，可以指定哪些仓库可以访问该密码。 您可以使用密码允许 {% data variables.product.prodname_dependabot %} 更新位于私人包注册表中的依赖项。 添加密码时，它会在到达 {% data variables.product.prodname_dotcom %} 之前进行加密，并且保持加密到 {% data variables.product.prodname_dependabot %} 用于访问私有包注册表。

添加 {% data variables.product.prodname_dependabot %} 密码后，您可以在 _dependabot.yml_ 配置文件中引用它，如： {% raw %}`${{secrets.NAME}}`{% endraw %}，其中 "NAME" 是您为密码选择的名称。 例如：

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)。”

#### 命名您的密码

{% data variables.product.prodname_dependabot %} 密码的名称：
* 只能包含字母数字字符（`[A-Z]`、`[0-9]`）或下划线 (`_`)。 不允许空格。 如果您输入小写字母，这些字母将更改为大写字母。
* 不能以 `GITHUB_` 前缀开头。
* 不能以数字开头。

### 为 {% data variables.product.prodname_dependabot %} 添加仓库密码

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. 单击 **New repository secret（新仓库机密）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的值。
1. 单击 **Add secret（添加密码）**。

   密码名称列在 Dependabot 密码页面上。 您可以单击 **Update（更新）**来更改密码值。 您可以单击**Remove（删除）**来删除密码。

   ![更新或删除仓库密码](/assets/images/help/dependabot/update-remove-repo-secret.png)

### 将组织机密添加到 {% data variables.product.prodname_dependabot %}

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
{% data reusables.dependabot.dependabot-secrets-button %}
1. 单击 **New organization secret（新组织机密）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。
1. 如果选择了 **Selected repositories（所选仓库）**：

   * 单击 {% octicon "gear" aria-label="The Gear icon" %}。
   * 选择可以访问此机密的仓库。 ![选择此机密的仓库](/assets/images/help/dependabot/secret-repository-access.png)
   * 单击 **Update selection（更新选择）**。

1. 单击 **Add secret（添加密码）**。

   密码名称列在 Dependabot 密码页面上。 您可以单击 **Update（更新）**来更改机密值或其访问策略。 您可以单击**Remove（删除）**来删除密码。

   ![更新或删除组织机密](/assets/images/help/dependabot/update-remove-repo-secret.png)
