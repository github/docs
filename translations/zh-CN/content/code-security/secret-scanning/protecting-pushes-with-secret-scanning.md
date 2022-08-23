---
title: 通过机密扫描保护推送
intro: '您可以使用 {% data variables.product.prodname_secret_scanning %}，通过启用推送保护来防止将支持的机密推送到您的组织或存储库中。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## 关于机密的推送保护

到目前为止，{% data variables.product.prodname_secret_scanning_GHAS %} 在推送_后_检查机密，并向用户提醒暴露的机密。 {% data reusables.secret-scanning.push-protection-overview %}

If a contributor bypasses a push protection block for a secret, {% data variables.product.prodname_dotcom %}:
- generates an alert.
- creates an alert in the "Security" tab of the repository.
- adds the bypass event to the audit log.{% ifversion secret-scanning-push-protection-email %}
- sends an email alert to organization owners, security managers, and repository administrators, with a link to the related secret and the reason why it was allowed.{% endif %}

For information on the secrets and service providers supported for push protection, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)."

## 启用 {% data variables.product.prodname_secret_scanning %} 作为推送保护

要将 {% data variables.product.prodname_secret_scanning %} 用作推送保护，组织或存储库需要同时启用 {% data variables.product.prodname_GH_advanced_security %} 和 {% data variables.product.prodname_secret_scanning %}。 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”、“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”和“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。

组织所有者、安全管理员和存储库管理员可以通过 UI 和 API 为 {% data variables.product.prodname_secret_scanning %} 启用推送保护。 更多信息请参阅“[存储库](/rest/reference/repos#update-a-repository)”，并展开 REST API 文档中的“`security_and_analysis` 对象的属性”部分。

### 启用 {% data variables.product.prodname_secret_scanning %} 作为组织的推送保护

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### 启用 {% data variables.product.prodname_secret_scanning %} 作为存储库的推送保护

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Using secret scanning as a push protection from the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

在命令行上一次最多会显示五个检测到的机密。 如果已在存储库中检测到特定机密，并且警报已存在，{% data variables.product.prodname_dotcom %} 不会阻止该机密。

![显示当用户尝试将密钥推送到存储库时推送被阻止的屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。 例如，您可以撤销密钥，并从存储库的提交历史记录中删除密钥。 Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. 更多信息请参阅“[从仓库中删除敏感数据](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”。

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### 允许推送被阻止的机密

如果 {% data variables.product.prodname_dotcom %} 阻止了您认为可以安全推送的机密，则可以允许该机密并说明应允许该机密的原因。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. 访问 {% data variables.product.prodname_dotcom %} 在推送被阻止时返回的 URL。 ![显示包含用于取消阻止密钥推送的选项的表单屏幕截图](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. 单击 **Allow me to push this secret（允许我推送此机密）**。
2. 在三小时内重新尝试在命令行上推送。 如果您在三小时内没有推送，则需要重复此过程。

{% ifversion secret-scanning-push-protection-web-ui %}
## 使用密钥扫描作为 Web UI 的推送保护

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} 将在 Web UI 中一次仅显示一个检测到的机密。 如果已在存储库中检测到特定机密，并且警报已存在，{% data variables.product.prodname_dotcom %} 不会阻止该机密。

可以使用 Web UI 从文件中删除机密。 删除机密后，页面顶部的横幅将更改，并告诉您现在可以提交更改。

  ![显示密钥修复后允许在 Web UI 中提交的屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### 绕过密钥的推送保护

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)."

如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。 更多信息请参阅“[从仓库中删除敏感数据](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”。

如果 {% data variables.product.prodname_dotcom %} 阻止了您认为可以安全推送的机密，则可以允许该机密并说明应允许该机密的原因。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。

1. 在 {% data variables.product.prodname_dotcom %} 阻止提交时显示在页面顶部的横幅中，单击 **Bypass protection（绕过保护）**。
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![显示包含用于取消阻止密钥推送的选项的表单屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. 单击 **Allow secret（允许密钥）**。

{% endif %}
