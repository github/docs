---
title: 创建安全通告
intro: 您可以创建安全通告草稿，以私下讨论和修复开源项目中的安全漏洞。
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - 安全
---

任何对仓库有管理员权限的人都可以创建安全通告。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### 创建安全通告

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 单击 **New draft security advisory（新建安全通告草稿）**。 ![打开通告草稿按钮](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. 键入安全通告的标题。
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. 单击 **Create draft security advisory（创建安全通告草稿）**。 ![创建安全通告按钮。](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### 后续步骤

- 评论安全通告草稿，与团队讨论漏洞。
- 添加协作者到安全通告。 更多信息请参阅“[添加协作者到安全通告](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory)”。
- 在临时私有复刻中私下协作以修复漏洞。 更多信息请参阅“[在临时私有复刻中协作以解决安全漏洞](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”。
- 添加因对安全通告做出贡献而应获得积分的个人。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)”。
- 发布安全通告以向社区提醒安全漏洞。 更多信息请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory)”。
