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
shortTitle: 推送保护
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## 关于机密的推送保护

到目前为止，{% data variables.product.prodname_secret_scanning_GHAS %} 在推送_后_检查机密，并向用户提醒暴露的机密。 {% data reusables.secret-scanning.push-protection-overview %}

{% data variables.product.prodname_secret_scanning_caps %} 作为推送保护，当前会扫描存储库中查找由以下服务提供商颁发的机密。

{% data reusables.secret-scanning.secret-list-private-push-protection %}

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


## 从命令行使用 {% data variables.product.prodname_secret_scanning %} 作为推送保护

当您尝试将受支持的密钥推送到启用了 {% data variables.product.prodname_secret_scanning %} 作为推送保护的存储库或组织时，{% data variables.product.prodname_dotcom %} 将阻止推送。 您可以从提交中删除机密，也可以按照提供的 URL 进行推送。

在命令行上一次最多会显示五个检测到的机密。 如果已在存储库中检测到特定机密，并且警报已存在，{% data variables.product.prodname_dotcom %} 不会阻止该机密。

![显示当用户尝试将密钥推送到存储库时推送被阻止的屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

如果需要从正在推送的分支上的最新提交（即 `HEAD`）以及包含该机密的任何早期提交中删除机密，您可以从 `HEAD` 中删除机密，然后在引入提交和已删除机密的 `HEAD` 的第一个版本之间压缩提交。

{% note %}

**注意**：

* 如果您的 git 配置支持推送到多个分支，而不仅仅是到默认分支，则您的推送可能会由于推送了其他和意外的引用而被阻止。 更多信息请参阅 Git 文档中的 [`push.default` 选项](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)。
* 如果在推送时 {% data variables.product.prodname_secret_scanning %} 超时，{% data variables.product.prodname_dotcom %} 仍将在推送后运行扫描。

{% endnote %}

### 允许推送被阻止的机密

如果 {% data variables.product.prodname_dotcom %} 阻止了您认为可以安全推送的机密，则可以允许该机密并说明应允许该机密的原因。

如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。 例如，您可以撤销密钥，并从存储库的提交历史记录中删除密钥。 更多信息请参阅“[从仓库中删除敏感数据](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

1. 访问 {% data variables.product.prodname_dotcom %} 在推送被阻止时返回的 URL。 ![显示包含用于取消阻止密钥推送的选项的表单屏幕截图](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. 单击 **Allow me to push this secret（允许我推送此机密）**。
2. 在三小时内重新尝试在命令行上推送。 如果您在三小时内没有推送，则需要重复此过程。

{% if secret-scanning-push-protection-web-ui %}
## Using secret scanning as a push protection from the web UI

When you use the web UI to attempt to commit a supported secret to a repository or organization with secret scanning as a push protection enabled, {% data variables.product.prodname_dotcom %} will block the commit. You will see a banner at the top of the page with information about the secret's location, and the secret will also be underlined in the file so you can easily find it.

  ![Screenshot showing commit in web ui blocked because of secret scanning push protection](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. 如果已在存储库中检测到特定机密，并且警报已存在，{% data variables.product.prodname_dotcom %} 不会阻止该机密。

You can remove the secret from the file using the web UI. Once you remove the secret, the banner at the top of the page will change and tell you that you can now commit your changes.

  ![Screenshot showing commit in web ui allowed after secret fixed](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Bypassing push protection for a secret

如果 {% data variables.product.prodname_dotcom %} 阻止了您认为可以安全推送的机密，则可以允许该机密并说明应允许该机密的原因。 如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

如果确认某个机密是真实的，并且打算稍后修复它，则应尽快修复。

1. In the banner that appeared at the top of the page when {% data variables.product.prodname_dotcom %} blocked your commit, click **Bypass protection**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![显示包含用于取消阻止密钥推送的选项的表单屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Click **Allow secret**.

{% endif %}
