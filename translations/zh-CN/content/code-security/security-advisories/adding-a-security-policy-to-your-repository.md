---
title: 添加安全政策到仓库
intro: 您可以为仓库添加安全政策，说明如何负责任地报告项目中的安全漏洞。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - 安全
---

### 关于安全政策

为了让人们了解如何负责任地报告您的仓库中存在的安全漏洞，您可以将 _SECURITY.md_ 文件添加到仓库的根文件夹 `docs` 或 `.github`。 当有人在您的仓库中创建议题时，就会看到项目安全政策的链接。

您可以为组织或用户帐户创建默认的安全政策。 更多信息请参阅“[创建默认社区健康文件](/github/building-a-strong-community/creating-a-default-community-health-file)”。

{% tip %}

**提示：**为帮助人们查找安全政策，您可以从仓库中的其他位置（如自述文件）链接到 _SECURITY.md_ 文件。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。

{% endtip %}

当有人报告您的项目中的安全漏洞后，您可以使用 {% data variables.product.prodname_security_advisories %} 披露、修复和发布关于该漏洞的信息。 有关 {% data variables.product.prodname_dotcom %} 中报告和披露漏洞的过程的更多信息，请参阅“[关于协调披露安全漏洞](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)”。 有关 {% data variables.product.prodname_security_advisories %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

{% data reusables.repositories.github-security-lab %}

### 添加安全政策到仓库

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在左侧边栏中，单击 **Policy（政策）**。 ![政策选项卡](/assets/images/help/security/policy-tab.png)
4. 单击 **Start setup（开始设置）**。 ![开始设置按钮](/assets/images/help/security/start-setup-policy-button.png)
5. 在新的 _SECURITY.md_ 文件中，添加关于项目受支持版本以及如何报告漏洞的信息。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 延伸阅读

- “[关于保护仓库](/github/administering-a-repository/about-securing-your-repository)”
- "[设置健康参与的项目](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)"
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})
