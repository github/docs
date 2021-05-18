---
title: 添加安全政策到仓库
intro: You can give instructions for how to report a security vulnerability in your project by adding a security policy to your repository.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
topics:
  - Security
---

### 关于安全政策

To give people instructions for reporting security vulnerabilities in your project,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} you can add a _SECURITY.md_ file to your repository's root, `docs`, or `.github` folder.{% else %} you can add a _SECURITY.md_ file to your repository's root, or `docs` folder.{% endif %} When someone creates an issue in your repository, they will see a link to your project's security policy.

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
By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.
{% endif %}

### 添加安全政策到仓库

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Security policy**. ![Security policy tab](/assets/images/help/security/security-policy-tab.png)
4. 单击 **Start setup（开始设置）**。 ![开始设置按钮](/assets/images/help/security/start-setup-security-policy-button.png)
5. 在新的 _SECURITY.md_ 文件中，添加关于项目受支持版本以及如何报告漏洞的信息。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 延伸阅读

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
