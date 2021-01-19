---
title: 管理来自密码扫描的警报
intro: 您可以查看并关闭已检入仓库的密码的警报。
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### 管理警报

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在左侧边栏中，单击 **Detected secrets（检测到的密码）**。 !["检测到的密码"选项卡](/assets/images/help/repository/sidebar-secrets.png)
4. 在“Secret scanning（密码扫描）”下，单击要查看的警报。 ![来自密码扫描的警报](/assets/images/help/repository/secret-scanning-click-alert.png)
5. （可选）使用“Resolve（解决）”下拉菜单，单击原因以解决警报。 ![用于解决来自密码扫描的警报的下拉菜单](/assets/images/help/repository/secret-scanning-resolve-alert.png)

### 保护受到威胁的密码

只要密码被提交到仓库，便应视为受到威胁。 {% data variables.product.prodname_dotcom %} 建议对受到威胁的密码执行以下操作：

- 对于受到威胁的 {% data variables.product.prodname_dotcom %} 个人访问令牌，请删除该令牌，创建新令牌，然后更新使用旧令牌的任何服务。 更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。”
- 对于所有其他密码，请先确认提交到 {% data variables.product.prodname_dotcom %} 的密码是有效的。 如果有效，请创建新密码，更新使用旧密码的任何服务，然后删除旧密码。
