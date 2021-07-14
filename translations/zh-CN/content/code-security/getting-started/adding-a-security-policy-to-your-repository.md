---
title: 添加安全政策到仓库
intro: 您可以为仓库添加安全政策，说明如何报告项目中的安全漏洞。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
---

### 关于安全政策

要向人说明如何报告项目中的安全漏洞，{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} 您可以将 _SECURITY.md_ 文件添加到仓库的根目录、`docs` 或 `.github` 文件夹。{% else %} 您可以将 _SECURITY.md_ 文件添加到仓库的根目录或 `docs` 文件夹。{% endif %} 当有人在您的仓库中创建议题时，他们将看到项目安全政策的链接。

{% if currentVersion != 'github-ae@next' %}
<!-- no public repos in GHAE -->
您可以为组织或用户帐户创建默认的安全政策。 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。
{% endif %}

{% tip %}

**提示：**为帮助人们查找安全政策，您可以从仓库中的其他位置（如自述文件）链接到 _SECURITY.md_ 文件。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}
当有人报告您的项目中的安全漏洞后，您可以使用 {% data variables.product.prodname_security_advisories %} 披露、修复和发布关于该漏洞的信息。 有关 {% data variables.product.prodname_dotcom %} 中报告和披露漏洞的过程的更多信息，请参阅“[关于协调披露安全漏洞](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)”。 有关 {% data variables.product.prodname_security_advisories %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
通过创建明确的安全报告说明，用户可以轻松地使用您喜欢的通信通道报告仓库中发现的任何安全漏洞。
{% endif %}

### 添加安全政策到仓库

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在左侧边栏中，单击 **Security policy（安全策略）**。 ![安全策略选项卡](/assets/images/help/security/security-policy-tab.png)
4. 单击 **Start setup（开始设置）**。 ![开始设置按钮](/assets/images/help/security/start-setup-security-policy-button.png)
5. 在新的 _SECURITY.md_ 文件中，添加关于项目受支持版本以及如何报告漏洞的信息。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 延伸阅读

- "[保护您的仓库](/code-security/getting-started/securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[设置健康参与的项目](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
