---
title: リポジトリにセキュリティポリシーを追加する
intro: リポジトリにセキュリティポリシーを追加することにより、リポジトリにおけるセキュリティの脆弱性について責任ある報告を行う方法の手順を示すことができます。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
versions:
  free-pro-team: '*'
---

### セキュリティポリシーについて

プロジェクトにおけるセキュリティの脆弱性について手順を示すには、リポジトリのルート、`docs`、または `.github` フォルダに、_SECURITY.md_ ファイルを追加します。 誰かがリポジトリに Issue を作成すると、プロジェクトのセキュリティポリシーへのリンクが表示されます。

所属する Organization またはユーザアカウント用にデフォルトのセキュリティポリシーを作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/github/building-a-strong-community/creating-a-default-community-health-file)」を参照してください。

{% tip %}

**ヒント:** セキュリティポリシーを見つけやすくするために、README ファイルなど、リポジトリの他の場所から _SECURITY.md_ ファイルへリンクすることができます。 詳細は「[README について](/articles/about-readmes)」を参照してください。

{% endtip %}

プロジェクトのセキュリティの脆弱性が報告された後、{% data variables.product.prodname_security_advisories %} を使用して脆弱性に関する情報を開示、修正、公開できます。 詳しい情報については「[{% data variables.product.prodname_security_advisories %}について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% data reusables.repositories.github-security-lab %}

### リポジトリにセキュリティポリシーを追加する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 左サイドバーで [**Policy**] をクリックします。 ![[Policy] タブ](/assets/images/help/security/policy-tab.png)
4. [**Start setup**] をクリックします。 ![[Start setup] ボタン](/assets/images/help/security/start-setup-policy-button.png)
5. 新しい _SECURITY.md_ ファイルに、プロジェクトがサポートするバージョンと、脆弱性を報告する方法についての情報を追加します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- [健全なコントリビューションを促すプロジェクトをセットアップする](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %})
