---
title: 添加协作者到安全通告
intro: 您可以添加其他用户或团队与您协作处理安全通告。
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - 安全
---

对安全通告具有管理员权限的人员可向安全通告添加协作者。

### 添加协作者到安全通告

协作者对安全通告具有写入权限。 更多信息请参阅“[安全通告的权限级别](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)”。

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} 有关删除安全通告协作者的更多信息，请参阅“[从安全通告删除协作者](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)”。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要向其添加协作者的安全通告。
5. 在页面右侧的“Collaborators（协作者）”下，键入要添加到安全通告的用户或团队名称。 ![用于输入用户或团队名称的字段](/assets/images/help/security/add-collaborator-field.png)
6. 单击 **Add（添加）**。 ![添加按钮](/assets/images/help/security/security-advisory-add-collaborator-button.png)

### 延伸阅读

- "[安全通告的权限级别](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)"
- "[在临时私有复刻中协作以解决安全漏洞](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- "[从安全通告删除协作者](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
