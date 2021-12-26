---
title: 编辑安全通告
intro: 如果需要更新详细信息或更正错误，可以编辑安全通告的元数据和说明。
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
---

对安全通告具有管理员权限的人员可以编辑安全通告。

### 关于安全通告的积分

您可以向帮助发现、报告或修复安全漏洞的人提供积分。 如果您向某人提供积分，他们可以选择接受或拒绝积分。

如果某人接受积分，则其用户名将显示在安全通告的“Credits（积分）”部分。 拥有仓库读取权限的任何人都可以看到通告和接受其积分的人。

如果您认为您应该获得安全通告积分，请联系通告的创建者并让他们编辑通告以包含您的贡献积分。 只有通告创建者才可计入您的功劳积分，因此请不要就安全通告的积分一事联系 GitHub 支持。

### 编辑安全通告

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击您要编辑的安全通告。
5. 在安全通告详细信息的右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![安全通告的编辑按钮](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
11. （可选）编辑安全通告的“Credits（积分）”。 ![安全通告的积分](/assets/images/help/security/security-advisory-credits.png)
12. 单击 **Update security advisory（更新安全通告）**。 ![添加按钮](/assets/images/help/security/update-advisory-button.png)
13. “Credits（积分）”部分列出的人员将会收到邀请他们接受积分的电子邮件或 web 通知。 如果某人接受，则其用户名将在安全通告发布后公开可见。

### 延伸阅读

- "[撤销安全通告](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
