---
title: 管理来自机密扫描的警报
intro: 您可以查看并关闭已检入仓库的密码的警报。
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: 537b3673145dddcb3babbb606c2ac97aab6a9cb8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063552'
---
{% data reusables.secret-scanning.beta %}

## 管理 {% data variables.product.prodname_secret_scanning %} 警报

{% ifversion ghec %} {% note %}

注意：仅为启用了 {% data variables.product.prodname_secret_scanning_GHAS %} 的存储库创建警报。 使用免费 {% data variables.product.prodname_secret_scanning_partner%} 服务在公共存储库中发现的机密将直接报告给合作伙伴，而无需创建警报。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. 在左侧边栏中，单击“机密扫描警报”。
   {% ifversion fpt or ghes or ghec %} ![“机密扫描警报”选项卡](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![“机密扫描警报”选项卡](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. 在“Secret scanning（密码扫描）”下，单击要查看的警报。
   {% ifversion fpt or ghec %} ![来自机密扫描的警报列表](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![来自机密扫描的警报列表](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![来自机密扫描的警报列表](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}
1. （可选）选择 {% ifversion fpt or ghec %}“Close as（关闭为）”{% elsif ghes or ghae %}“Mark as（标记为）”{% endif %} 下拉菜单，然后单击原因以解决警报。
   {% ifversion fpt or ghec %} ![用于解决来自机密扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert.png) {% endif %} {% ifversion ghes or ghae %} ![用于解决来自机密扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png) {% endif %}

## 保护受到威胁的密码

只要密码被提交到仓库，便应视为受到威胁。 {% data variables.product.prodname_dotcom %} 建议对受到威胁的密码执行以下操作：

- 对于受到威胁的 {% data variables.product.prodname_dotcom %} 个人访问令牌，请删除该令牌，创建新令牌，然后更新使用旧令牌的任何服务。 有关详细信息，请参阅“[为命令行创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)”。
- 对于所有其他机密，请先确认提交到 {% data variables.product.product_name %} 的机密是有效的。 如果有效，请创建新机密，更新使用旧机密的所有服务，然后删除旧机密。

{% ifversion ghec %} {% note %}

注意：如果在 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库中检测到机密，并且该机密也与合作伙伴模式匹配，则会生成警报，并将潜在的机密报告给服务提供商。 有关合作伙伴模式的详细信息，请参阅“[合作伙伴模式支持的机密](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)”。

{% endnote %} {% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## 配置 {% data variables.product.prodname_secret_scanning %} 警报的通知

当检测到新的机密时，{% data variables.product.product_name %} 会根据用户的通知首选项，通知对存储库安全警报具有访问权限的所有用户。 如果你正在查看存储库，并且已启用安全警报通知或存储库上所有活动的通知，或者你是包含机密的提交的作者并且没有忽略存储库，那么将收到一封电子邮件通知。

有关详细信息，请参阅“[管理存储库库的安全性和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”以及“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”。
{% endif %}
