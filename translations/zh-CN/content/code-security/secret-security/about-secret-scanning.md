---
title: 关于密码扫描
intro: '{% data variables.product.product_name %} 扫描仓库查找已知的密码类型，以防止欺诈性使用意外提交的密码。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

如果项目与外部服务通信，您可能使用令牌或私钥进行身份验证。 令牌和私钥是服务提供商可以签发的典型密码。 如果将密码检入仓库，则对仓库具有读取权限的任何人都可以使用该密码以您的权限访问外部服务。 建议将密码存储在项目仓库外部专用的安全位置。

{% data variables.product.prodname_secret_scanning_caps %} 将在 {% data variables.product.prodname_dotcom %} 仓库中存在的所有分支上扫描整个 Git 历史记录，以查找任何密钥。 服务提供商可与 {% data variables.product.company_short %} 合作提供其用于扫描的密码格式。{% if currentVersion == "free-pro-team@latest" %} 更多信息请参阅“[密码扫描合作伙伴计划](/developers/overview/secret-scanning-partner-program)”。
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### 关于公共仓库的 {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} 自动对公共仓库启用。 当您推送到公共仓库时，{% data variables.product.product_name %} 会扫描提交的内容中是否有密码。 如果将私有仓库切换到公共仓库，{% data variables.product.product_name %} 会扫描整个仓库中的密码。

当 {% data variables.product.prodname_secret_scanning %} 检测一组凭据时，我们会通知发布密码的服务提供商。 服务提供商会验证该凭据，然后决定是否应撤销密钥、颁发新密钥或直接与您联系，具体取决于与您或服务提供商相关的风险。 有关如何使用令牌颁发合作伙伴的概述，请参阅“[密码扫描合作伙伴计划](/developers/overview/secret-scanning-partner-program)”。

{% data variables.product.product_name %} 当前会扫描公共仓库，查找以下服务提供商发布的密码。

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### 关于私有仓库的 {% data variables.product.prodname_secret_scanning %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 关于 {% data variables.product.product_name %} 上的 {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} 作为 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在组织拥有的所有仓库上可用。 它不适用于用户拥有的仓库。
{% endif %}

如果您是仓库管理员或组织所有者，您可以为组织拥有的{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库启用 {% data variables.product.prodname_secret_scanning %}。 您可以对您的所有仓库或您组织内的所有新仓库启用 {% data variables.product.prodname_secret_scanning %}。{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_secret_scanning_caps %} 不适用于用户拥有的私有仓库。{% endif %}更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}您也可以定义只应用到您的仓库或组织的自定义 {% data variables.product.prodname_secret_scanning %} 模式。 更多信息请参阅“[定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”。{% endif %}

将提交推送到启用了 {% data variables.product.prodname_secret_scanning %} 的{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库时，{% data variables.product.prodname_dotcom %} 会扫描提交的内容中是否有密码。

当 {% data variables.product.prodname_secret_scanning %} 在{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库中检测到密码时，{% data variables.product.prodname_dotcom %} 会生成警报。

- {% data variables.product.prodname_dotcom %} 向仓库管理员和组织所有者发送电子邮件警报。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} 向提交机密到仓库的贡献者发送电子邮件警报，其中包括指向相关 {% data variables.product.prodname_secret_scanning %} 警报的链接。 然后，提交作者可以在仓库中查看警报，然后解决警报。
{% endif %}
- {% data variables.product.prodname_dotcom %} 显示仓库中的警报。{% if currentVersion == "enterprise-server@3.0" %} 更多信息请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
有关查看和解析 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)”。{% endif %}

仓库管理员和组织所有者可以授权用户和团队访问 {% data variables.product.prodname_secret_scanning %} 警报。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
要监控来自私有仓库或组织中的 {% data variables.product.prodname_secret_scanning %} 的结果，可以使用 {% data variables.product.prodname_secret_scanning %} API。 有关 API 端点的更多信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)”。{% endif %}

{% data variables.product.prodname_dotcom %}  目前扫描{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库，以检查由以下服务提供者颁发的密码。

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}
{% note %}

**注：** {% data variables.product.prodname_secret_scanning_caps %} 当前不允许定义自己的模式来检测密码。

{% endnote %}
{% endif %}

### 延伸阅读

- "[保护您的仓库](/code-security/getting-started/securing-your-repository)"
- "[保护帐户和数据安全](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
