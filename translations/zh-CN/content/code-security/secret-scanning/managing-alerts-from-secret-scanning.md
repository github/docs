---
title: 管理来自密码扫描的警报
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
shortTitle: 管理秘密警报
---

{% data reusables.secret-scanning.beta %}

## 管理 {% data variables.product.prodname_secret_scanning %} 警报

{% ifversion ghec %}
{% note %}

**Note:** Alerts are created only for repositories with {% data variables.product.prodname_secret_scanning_GHAS %} enabled. Secrets found in public repositories using the free {% data variables.product.prodname_secret_scanning_partner%} service are reported directly to the partner, without creating an alert.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. 在左侧边栏中，单击 **Secret scanning alerts（机密扫描警报）**。
   {% ifversion fpt or ghes or ghec %}
   !["Secret scanning alerts（机密扫描警报）" 选项卡](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   !["Secret scanning alerts（机密扫描警报）" 选项卡](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. 在“Secret scanning（密码扫描）”下，单击要查看的警报。
   {% ifversion fpt or ghec %}
   ![来自密码扫描的警报](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes %}
   ![来自密码扫描的警报](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![来自密码扫描的警报](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
1. （可选）选择 {% ifversion fpt or ghec %}“Close as（关闭为）”{% elsif ghes or ghae %}“Mark as（标记为）”{% endif %} 下拉菜单，然后单击原因以解决警报。
   {% ifversion fpt or ghec %}
   ![用于解决来自密码扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% ifversion ghes or ghae %}
   ![用于解决来自密码扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## 保护受到威胁的密码

只要密码被提交到仓库，便应视为受到威胁。 {% data variables.product.prodname_dotcom %} 建议对受到威胁的密码执行以下操作：

- 对于受到威胁的 {% data variables.product.prodname_dotcom %} 个人访问令牌，请删除该令牌，创建新令牌，然后更新使用旧令牌的任何服务。 更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。”
- 对于所有其他密码，请先确认提交到 {% data variables.product.product_name %} 的密码是有效的。 如果有效，请创建新密码，更新使用旧密码的任何服务，然后删除旧密码。

{% ifversion ghec %}
{% note %}

**Note:** If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[Supported secrets for partner patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)."

{% endnote %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4910 or ghec %}
## 配置 {% data variables.product.prodname_secret_scanning %} 警报的通知

当检测到新的机密时，{% data variables.product.product_name %} 会根据用户的通知首选项通知对仓库安全警报具有访问权限的所有用户。 如果您正在关注该仓库，已为仓库的安全警报或所有活动启用通知功能， 或者您是包含机密的提交的作者且未忽略该仓库，您将会收到警报。

更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”和“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”。
{% endif %}
