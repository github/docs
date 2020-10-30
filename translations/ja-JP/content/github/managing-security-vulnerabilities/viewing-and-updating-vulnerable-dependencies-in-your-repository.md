---
title: リポジトリ内の脆弱な依存関係を表示・更新する
intro: '{% data variables.product.product_name %} がプロジェクト内の脆弱性のある依存関係を発見した場合は、それらをリポジトリの [Dependabot alerts] タブで確認できます。 その後、プロジェクトを更新してこの脆弱性を解決することができます。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: リポジトリ管理者と Organization のオーナーは、依存関係を表示および更新できます。
versions:
  free-pro-team: '*'
---

リポジトリの {% data variables.product.prodname_dependabot %} アラートタブには、オープンおよびクローズしている {% data variables.product.prodname_dependabot_alerts %}、および対応する {% data variables.product.prodname_dependabot_security_updates %} がすべて一覧表示されます。 ドロップダウンメニューを使用してアラートのリストを並べ替えることができます。また、特定のアラートをクリックしてその詳細を表示することもできます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)」を参照してください。

### リポジトリ内の脆弱性のある依存関係の更新について

リポジトリに影響を与える脆弱性を検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を送信します。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリで {% data variables.product.product_name %} が脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot_short %} はプルリクエストを作成して修正します。 {% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

### 脆弱性のある依存関係を表示して更新する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. 脆弱性の詳細を確認し、可能な場合は、自動セキュリティアップデートを含むプルリクエストを確認します。
1. 必要に応じて、アラートに対する {% data variables.product.prodname_dependabot_security_updates %} アップデートがまだ入手できない場合、脆弱性を解決するプルリクエストを作成するには、[**Create {% data variables.product.prodname_dependabot_short %} security update**] をクリックします。 ![{% data variables.product.prodname_dependabot_short %} セキュリティアップデートボタンを作成](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。 {% data variables.product.prodname_dependabot_short %} によって発行される各プルリクエストには、{% data variables.product.prodname_dependabot_short %} の制御に使用できるコマンドの情報が含まれています。 詳しい情報については、「[依存関係の更新に関するプルリクエストを管理する](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-github-dependabot-pull-requests-with-comment-commands) 」を参照してください。
1. 必要に応じて、アラートが正しく修正されていない場合や、未使用のコード内に含まれている場合は、[Dismiss] ドロップダウンを使用して、アラートを却下する理由をクリックします。 ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### 参考リンク

- 「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」
- 「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)」
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
