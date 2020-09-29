---
title: 发布安全通告
intro: 您可以发布安全通告，向社区提醒项目中的安全漏洞。
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

对安全通告具有管理员权限的任何人都可发布安全通告。

### 基本要求

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. 更多信息请参阅“[创建安全通告](/github/managing-security-vulnerabilities/creating-a-security-advisory)”。

如果您已创建安全通告，但尚未提供有关安全漏洞影响的项目版本的详细信息，则可以编辑安全通告。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory)”。

### 关于发布安全通告

When you publish a security advisory, you notify your community about the security vulnerability that the security advisory addresses. Publishing a security advisory makes it easier for your community to update package dependencies and research the impact of the security vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

Before you publish a security advisory, you can privately collaborate to fix the vulnerability in a temporary private fork. 更多信息请参阅“[在临时私有复刻中协作以解决安全漏洞](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”。

When you publish a draft advisory from a public repository, everyone is able to see:

- The current version of the advisory data.
- Any advisory credits that the credited users have accepted.

{% note %}

**Note**: The general public will never have access to the edit history of the advisory, and will only see the published version.

{% endnote %}

发布安全通告后，安全通告的 URL 将与发布安全通告之前保持相同。 对仓库具有读取权限的任何人都能看到安全通告。 Collaborators on the security advisory can continue to view past conversations, including the full comment stream, in the security advisory unless someone with admin permissions removes the collaborator from the security advisory.

如果需要更新或更正已发布的安全通告中的信息，可以编辑安全通告。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory)”。

### 申请 CVE 识别号

Anyone with admin permissions to a security advisory can request a CVE identification number for the security advisory.

{% data reusables.repositories.request-security-advisory-cve-id %} For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要为其申请 CVE 识别号的安全通告。 ![列表中的安全通告](/assets/images/help/security/security-advisory-in-list.png)
5. 使用 **Publish advisory（发布通告）**下拉菜单，然后单击 **Request CVE（申请 CVE）**。 ![下拉列表中的“申请 CVE”](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. 单击 **Request CVE（申请 CVE）**。 ![申请 CVE 按钮](/assets/images/help/security/security-advisory-request-cve-button.png)

### 发布安全通告

Publishing a security advisory deletes the temporary private fork for the security advisory.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击您要发布的安全通告。 ![列表中的安全通告](/assets/images/help/security/security-advisory-in-list.png)
5. 在页面底部，单击 **Publish advisory（发布通告）**。 ![发布通告按钮](/assets/images/help/security/publish-advisory-button.png)

### 对于发布的安全通告的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}

### 延伸阅读

- "[撤销安全通告](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
