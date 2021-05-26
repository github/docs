---
title: 管理来自密码扫描的警报
intro: 您可以查看并关闭已检入仓库的密码的警报。
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.secret-scanning.beta %}

### Managing {% data variables.product.prodname_secret_scanning %} alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在左侧边栏中，单击 **Secret scanning alerts（机密扫描警报）**。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   !["Secret scanning alerts（机密扫描警报）" 选项卡](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   !["Secret scanning alerts（机密扫描警报）" 选项卡](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
4. 在“Secret scanning（密码扫描）”下，单击要查看的警报。
   {% if currentVersion == "free-pro-team@latest" %}
   ![来自密码扫描的警报](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" %}
   ![来自密码扫描的警报](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![来自密码扫描的警报](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
5. （可选）使用“Mark as（标记为）”下拉菜单，单击原因以解决警报。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于解决来自密码扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
   ![用于解决来自密码扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

### 保护受到威胁的密码

只要密码被提交到仓库，便应视为受到威胁。 {% data variables.product.prodname_dotcom %} 建议对受到威胁的密码执行以下操作：

- 对于受到威胁的 {% data variables.product.prodname_dotcom %} 个人访问令牌，请删除该令牌，创建新令牌，然后更新使用旧令牌的任何服务。 更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。”
- 对于所有其他密码，请先确认提交到 {% data variables.product.product_name %} 的密码是有效的。 如果有效，请创建新密码，更新使用旧密码的任何服务，然后删除旧密码。

{% if currentVersion == "free-pro-team@latest" %}
### Configuring notifications for {% data variables.product.prodname_secret_scanning %} alerts

When a new secret is detected, {% data variables.product.prodname_dotcom %} notifies all users with access to security alerts for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts, or are the author of the commit that contains the secret and are not ignoring the repository.

For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
{% endif %}
