---
title: リポジトリにセキュリティポリシーを追加する
intro: セキュリティポリシーをリポジトリに追加することによって、プロジェクト内のセキュリティ脆弱性を報告する方法の手順を示すことができます。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: セキュリティポリシーの追加
---

## セキュリティポリシーについて

プロジェクト内のセキュリティ脆弱性を報告する手順を人々に示すには、{% ifversion fpt or ghes or ghec %}_SECURITY.md_ファイルをリポジトリのルート、`docs`、`.github`フォルダのいずれかに追加できます。{% else %}_SECURITY.md_ファイルをリポジトリのルートあるいは`docs`フォルダに追加できます。{% endif %}誰かがリポジトリでIssueを作成すると、リポジトリのセキュリティポリシーへのリンクが示されます。

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
You can create a default security policy for your organization or personal account. 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。
{% endif %}

{% tip %}

**ヒント:** セキュリティポリシーを見つけやすくするために、README ファイルなど、リポジトリの他の場所から _SECURITY.md_ ファイルへリンクすることができます。 詳細は「[README について](/articles/about-readmes)」を参照してください。

{% endtip %}

{% ifversion fpt or ghec %}
プロジェクトのセキュリティの脆弱性が報告された後、{% data variables.product.prodname_security_advisories %} を使用して脆弱性に関する情報を開示、修正、公開できます。 {% data variables.product.prodname_dotcom %}における脆弱性の報告と公開のプロセスに関する詳しい情報については、「[セキュリティ脆弱性の調整された公開について](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)」を参照してください。 {% data variables.product.prodname_security_advisories %} の詳細については、「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% data reusables.repositories.github-security-lab %}
{% endif %}
{% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
セキュリティの報告の指示を明確に利用できる要することで、ユーザがあなたの好むコミュニケーションチャンネルを使ってリポジトリで見つけたセキュリティ脆弱性を報告することを容易にできます。
{% endif %}

## リポジトリにセキュリティポリシーを追加する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 左のサイドバーで**Security policy（セキュリティポリシー）**をクリックしてください。 ![セキュリティポリシータブ](/assets/images/help/security/security-policy-tab.png)
4. [**Start setup**] をクリックします。 ![[Start setup] ボタン](/assets/images/help/security/start-setup-security-policy-button.png)
5. 新しい _SECURITY.md_ ファイルに、プロジェクトがサポートするバージョンと、脆弱性を報告する方法についての情報を追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## 参考リンク

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」{% ifversion not ghae %}
- 「[健全な貢献のためのプロジェクトのセットアップ](/communities/setting-up-your-project-for-healthy-contributions)」{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
