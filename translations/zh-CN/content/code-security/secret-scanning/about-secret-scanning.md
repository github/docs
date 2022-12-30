---
title: 关于机密扫描
intro: '{% data variables.product.product_name %} 扫描仓库查找已知的密码类型，以防止欺诈性使用意外提交的密码。'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192943'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## 关于 {% data variables.product.prodname_secret_scanning %}

如果项目与外部服务通信，您可能使用令牌或私钥进行身份验证。 令牌和私钥是服务提供商可以签发的典型密码。 如果将密码检入仓库，则对仓库具有读取权限的任何人都可以使用该密码以您的权限访问外部服务。 建议将密码存储在项目仓库外部专用的安全位置。

{% data variables.product.prodname_secret_scanning_caps %}将扫描 {% data variables.product.prodname_dotcom %} 存储库中存在的所有分支上的整个 Git 历史记录以查找机密{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}，即使存储库已存档也一样{% endif %}。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} 在 {% data variables.product.prodname_dotcom_the_website %} 上以两种形式提供：

1. {% data variables.product.prodname_secret_scanning_partner_caps %}。 在所有公共存储库上自动运行。 与机密扫描合作伙伴提供的模式匹配的任何字符串都将直接报告给相关合作伙伴。

2. {% data variables.product.prodname_secret_scanning_GHAS_caps %}。 {% ifversion fpt %}使用具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的 {% data variables.product.prodname_ghe_cloud %} 的组织可以为组织拥有的仓库启用和配置额外扫描。{% elsif ghec %}你可以为使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织拥有的存储库启用和配置额外扫描。{% endif %}与机密扫描合作伙伴、其他服务提供商或你的组织定义的模式匹配的任何字符串都会在存储库的“安全”选项卡中报告为警报。 如果公共存储库中的字符串与合作伙伴模式匹配，则也会向合作伙伴报告该字符串。{% endif %}{% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security)。{% endif %}

服务提供商可与 {% data variables.product.company_short %} 合作提供用于扫描的密码格式。 {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

还可以启用 {% data variables.product.prodname_secret_scanning %} 作为存储库或组织的推送保护。 启用此功能时，{% data variables.product.prodname_secret_scanning %} 会阻止参与者用检测到的机密来推送代码。 若要继续，参与者必须从推送中删除机密，或绕过保护（若需要）。 {% ifversion push-protection-custom-link-orgs %}管理员还可以指定在阻止推送时向参与者显示的自定义链接；此链接可以包含特定于组织的资源，以帮助参与者。 {% endif %}有关详细信息，请参阅“[用 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。

{% endif %}

{% ifversion fpt or ghec %}
## 关于 {% data variables.product.prodname_secret_scanning_partner %}

将存储库设为公共存储库或将更改推送到公共存储库时，{% data variables.product.product_name %} 始终会扫描代码以查找与合作伙伴模式匹配的机密。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} 如果 {% data variables.product.prodname_secret_scanning %} 检测到潜在的机密，我们会通知颁发该机密的服务提供商。 服务提供商验证字符串，然后决定是应吊销机密、颁发新机密还是直接与您联系。 他们的行动将取决于您或他们的相关风险。 有关详细信息，请参阅“[合作伙伴模式支持的机密](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)”。

您无法更改公共存储库上 {% data variables.product.prodname_secret_scanning %} 的配置。

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## 关于 {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## 关于 {% data variables.product.product_name %} 上的 {% data variables.product.prodname_secret_scanning %}
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %} 作为 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在组织拥有的所有存储库上可用。 它不适用于用户拥有的仓库。 为存储库启用 {% data variables.product.prodname_secret_scanning %} 时， {% data variables.product.prodname_dotcom %} 将扫描代码中与许多服务提供商使用的机密匹配的模式。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} 还会定期对启用了 {% data variables.product.prodname_secret_scanning %} 的 {% data variables.product.prodname_GH_advanced_security %} 存储库中的现有内容进行完整的 git 历史记录扫描，并按照 {% data variables.product.prodname_secret_scanning %} 警报通知设置发送警报通知。 {% endif %}有关详细信息，请参阅“{% ifversion ghec %}[高级安全性支持的机密](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[{% data variables.product.prodname_secret_scanning_caps %}模式](/code-security/secret-scanning/secret-scanning-patterns){% endif %}”。

{% ifversion secret-scanning-issue-body-comments %} {% note %}

注意：问题说明和评论的 {% data variables.product.prodname_secret_scanning_caps %} 为公共 beta 版本，可能会发生更改。

{% endnote %} {% endif %}

如果你是存储库管理员，则可以为任何存储库启用{% data variables.product.prodname_secret_scanning_GHAS %}{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}，包括存档存储库{% endif %}。 组织所有者还可以为组织内的所有存储库或所有新存储库启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% ifversion ghes or ghae or ghec %}还可以为存储库、组织或企业定义自定义 {% data variables.product.prodname_secret_scanning %} 模式。 有关详细信息，请参阅“[定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”。
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} 使用对称加密存储检测到的机密，包括传输中的机密和静态机密。{% endif %}{% ifversion ghes > 3.7 %} 若要轮换用于存储检测到的机密的加密密钥，可以联系 {% data variables.contact.contact_ent_support %}。{% endif %}

### 关于 {% data variables.product.prodname_secret_scanning %} 警报

在为存储库启用{% data variables.product.prodname_secret_scanning %}或将提交推送到启用了{% data variables.product.prodname_secret_scanning %}的存储库时，{% data variables.product.prodname_dotcom %} 会扫描这些提交的内容，以查找与服务提供商定义的模式{% ifversion ghes or ghae or ghec %}以及企业、组织或存储库中定义的任何自定义模式{% endif %}匹配的机密。 {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} 还会定期对启用了 {% data variables.product.prodname_secret_scanning %} 的存储库中的所有历史记录内容进行扫描。{% endif%}

如果 {% data variables.product.prodname_secret_scanning %} 检测到机密， {% data variables.product.prodname_dotcom %} 将生成警报。

- {% data variables.product.prodname_dotcom %} 向仓库管理员和组织所有者发送电子邮件警报。 如果你正在关注该存储库，并已为该存储库的安全警报或所有活动启用通知，则会收到警报。
{% ifversion ghes or ghae or ghec %}
- 如果提交机密的参与者未忽略该存储库，{% data variables.product.prodname_dotcom %} 也会向参与者发送电子邮件警报。 电子邮件包含指向相关 {% data variables.product.prodname_secret_scanning %} 警报的链接。 然后，提交作者可以在仓库中查看警报，然后解决警报。
{% endif %}
- {% data variables.product.prodname_dotcom %} 在存储库的“安全性”选项卡中显示警报。

{% ifversion ghes or ghae or ghec %}有关查看和解决 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理 {% data variables.product.prodname_secret_scanning %} 中的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)”。{% endif %}

仓库管理员和组织所有者可以授权用户和团队访问 {% data variables.product.prodname_secret_scanning %} 警报。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。

{% ifversion ghec or ghes or ghae > 3.4 %} 可以使用安全概览以组织级视图查看已启用{% data variables.product.prodname_secret_scanning %}的存储库以及找到的警报。 有关详细信息，请参阅“[查看安全概述](/code-security/security-overview/viewing-the-security-overview)”。
{% endif %}

{%- ifversion ghec or ghes or ghae %}还可以使用 REST API 跨{% ifversion ghec %}专用{% endif %}存储库{% ifversion ghes %}或组织{% endif %}监视{% data variables.product.prodname_secret_scanning %}中的结果。 有关 API 终结点的详细信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)”。{% endif %}

{% endif %}

## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository)
- [保护帐户和数据安全](/github/authenticating-to-github/keeping-your-account-and-data-secure){%- ifversion fpt or ghec %}
- [管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces){% endif %} {%- ifversion fpt or ghec or ghes %}
- [管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot){% endif %}
- [加密机密](/actions/security-guides/encrypted-secrets)
