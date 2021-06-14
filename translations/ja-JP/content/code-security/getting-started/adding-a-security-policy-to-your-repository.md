---
title: リポジトリにセキュリティポリシーを追加する
intro: You can give instructions for how to report a security vulnerability in your project by adding a security policy to your repository.
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

### セキュリティポリシーについて

To give people instructions for reporting security vulnerabilities in your project,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} you can add a _SECURITY.md_ file to your repository's root, `docs`, or `.github` folder.{% else %} you can add a _SECURITY.md_ file to your repository's root, or `docs` folder.{% endif %} When someone creates an issue in your repository, they will see a link to your project's security policy.

{% if currentVersion != 'github-ae@next' %}
<!-- no public repos in GHAE -->
所属する Organization またはユーザアカウント用にデフォルトのセキュリティポリシーを作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。
{% endif %}

{% tip %}

**ヒント:** セキュリティポリシーを見つけやすくするために、README ファイルなど、リポジトリの他の場所から _SECURITY.md_ ファイルへリンクすることができます。 詳細は「[README について](/articles/about-readmes)」を参照してください。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}
プロジェクトのセキュリティの脆弱性が報告された後、{% data variables.product.prodname_security_advisories %} を使用して脆弱性に関する情報を開示、修正、公開できます。 For more information about the process of reporting and disclosing vulnerabilities in {% data variables.product.prodname_dotcom %}, see "[About coordinated disclosure of security vulnerabilities](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)." {% data variables.product.prodname_security_advisories %} の詳細については、「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
By making security reporting instructions clearly available, you make it easy for your users to report any security vulnerabilities they find in your repository using your preferred communication channel.
{% endif %}

### リポジトリにセキュリティポリシーを追加する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Security policy**. ![Security policy tab](/assets/images/help/security/security-policy-tab.png)
4. [**Start setup**] をクリックします。 ![[Start setup] ボタン](/assets/images/help/security/start-setup-security-policy-button.png)
5. 新しい _SECURITY.md_ ファイルに、プロジェクトがサポートするバージョンと、脆弱性を報告する方法についての情報を追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 参考リンク

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"{% if currentVersion != 'github-ae@next' %}
- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
