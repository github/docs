---
title: 启用仓库的匿名 Git 读取权限
intro: '作为仓库管理员，您可以启用或禁用满足特定要求的公共仓库的匿名 Git 读取权限。'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

在以下情况下，仓库管理员可以更改特定仓库的匿名 Git 读取权限设置：
- 站点管理员已启用私有模式和匿名 Git 读取权限。
- 仓库在实例上是公共的，并且不是复刻。
- 站点管理员尚未禁用仓库的匿名 Git 读取权限。

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Enable anonymous Git read access”（启用匿名 Git 读取权限）旁边，单击 **Enable**（启用）。 !["Anonymous Git read access"（匿名 Git 读取权限）下的
 "Enabled"（启用）按钮](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. 审查更改。 如需确认，请输入仓库名称，然后单击 **I understand, enable anonymous Git read access（我理解，启用匿名 Git 读取权限）**。
