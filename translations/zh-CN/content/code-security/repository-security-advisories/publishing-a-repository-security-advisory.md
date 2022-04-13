---
title: 发布存储库安全通告
intro: 您可以发布安全通告，向社区提醒项目中的安全漏洞。
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: 发布存储库通告
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

对安全通告具有管理员权限的任何人都可发布安全通告。

{% data reusables.security-advisory.repository-level-advisory-note %}

## 基本要求

在发布安全通告或申请 CVE 标识号之前，必须创建安全通告草稿，并提供受安全漏洞影响的项目版本的相关信息。 更多信息请参阅“[创建存储库安全通告](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”。

如果您已创建安全通告，但尚未提供有关安全漏洞影响的项目版本的详细信息，则可以编辑安全通告。 更多信息请参阅“[编辑存储库安全通告](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”。

## 关于发布安全通告

发布安全通告时，会通知您的社区关于该安全通告解决的安全漏洞。 发布安全通告使您的社区能够更轻松地更新包依赖项和研究安全漏洞的影响。

{% data reusables.repositories.security-advisories-republishing %}

在发布安全通告之前，您可以私下协作在临时私有复刻中修复漏洞。 更多信息请参阅“[在临时私有复刻中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”。

{% warning %}

**警告**：应尽可能在发布通告之前始终在安全通告中添加一个修复版本。 否则，通告将在没有修复版本的情况下发布，并且 {% data variables.product.prodname_dependabot %} 将向您的用户提醒有关问题，而不需提供任何安全版本来更新。

我们建议您在以下不同情况下采取以下步骤：

- 如果修复版本即将可用，请尽可能等到修复版本准备好后再发布。
- 如果修复版本正在开发中，但尚不可用，请在通告中提及，等发布后再编辑通告。
- 如果您不打算修复问题，请在通告中明确说明，以免用户联系您询问何时进行修复。 在这种情况下，列入用户可用于缓解这一问题的步骤会有帮助。

{% endwarning %}

从公共仓库发布通告草稿时，每个人都可以看到：

- 通告数据的当前版本。
- 积分用户已接受的任何通告积分。

{% note %}

**注**：公众无权查看通告的编辑历史记录，只能看到已发布的版本。

{% endnote %}

发布安全通告后，安全通告的 URL 将与发布安全通告之前保持相同。 对仓库具有读取权限的任何人都能看到安全通告。 安全通告的协作者可以继续查看安全通告中过去的对话，包括完整的评论流，除非有管理员权限的人从安全通告删除该协作者。

如果需要更新或更正已发布的安全通告中的信息，可以编辑安全通告。 更多信息请参阅“[编辑存储库安全通告](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”。

## 发布安全通告

发布安全通告会删除该安全通告的临时私有复刻。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击您要发布的安全通告。 ![列表中的安全通告](/assets/images/help/security/security-advisory-in-list.png)
5. 在页面底部，单击 **Publish advisory（发布通告）**。 ![发布通告按钮](/assets/images/help/security/publish-advisory-button.png)

## 对于发布的安全通告的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}

## 申请 CVE 识别号（可选）

{% data reusables.repositories.request-security-advisory-cve-id %} 更多信息请参阅“[关于存储库的 {% data variables.product.prodname_security_advisories %}](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要为其申请 CVE 识别号的安全通告。 ![列表中的安全通告](/assets/images/help/security/security-advisory-in-list.png)
5. 使用 **Publish advisory（发布通告）**下拉菜单，然后单击 **Request CVE（申请 CVE）**。 ![下拉列表中的“申请 CVE”](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. 单击 **Request CVE（申请 CVE）**。 ![申请 CVE 按钮](/assets/images/help/security/security-advisory-request-cve-button.png)

## 延伸阅读

- "[撤销存储库安全通告](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
