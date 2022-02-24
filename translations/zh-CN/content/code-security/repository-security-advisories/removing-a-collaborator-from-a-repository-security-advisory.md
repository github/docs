---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: 删除协作者
---

对安全通告具有管理员权限的人员可从安全通告删除协作者。

{% data reusables.security-advisory.repository-level-advisory-note %}

## 从安全通告删除协作者

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要从中删除协作者的安全通告。 ![列表中的安全通告](/assets/images/help/security/security-advisory-in-list.png)
5. 在页面右侧的“Collaborators（协作者）”下，键入要从安全通告删除的用户或团队名称。 ![安全通告协作者](/assets/images/help/security/security-advisory-collaborator.png)
6. 在要删除的协作者旁边，单击 **X** 图标。 ![用于删除安全通告协作者的 X 图标](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## 延伸阅读

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
