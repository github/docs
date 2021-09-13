---
title: リポジトリ内の脆弱な依存関係を表示・更新する
intro: '{% data variables.product.product_name %} がプロジェクト内の脆弱性のある依存関係を発見した場合は、それらをリポジトリの [Dependabot alerts] タブで確認できます。 その後、プロジェクトを更新してこの脆弱性を解決することができます。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: 脆弱性のある依存関係を表示して更新する
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

Your repository's {% data variables.product.prodname_dependabot %} alerts tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %}{% if currentVersion == "free-pro-team@latest" %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. ドロップダウンメニューを使用してアラートのリストを並べ替えることができます。また、特定のアラートをクリックしてその詳細を表示することもできます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

{% data reusables.repositories.dependency-review %}

### リポジトリ内の脆弱性のある依存関係の更新について

コードベースが既知の脆弱性のある依存関係を使用していることを検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を生成します。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、{% data variables.product.product_name %} がデフォルトのブランチで脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} はそれを修正するためのプルリクエストを作成します。 Pull Requestは、脆弱性を回避するために必要最低限の安全なバージョンに依存関係をアップグレードします。
{% endif %}

### 脆弱性のある依存関係を表示して更新する

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. 脆弱性の詳細を確認し、可能な場合は、自動セキュリティアップデートを含むプルリクエストを確認します。
1. 必要に応じて、アラートに対する {% data variables.product.prodname_dependabot_security_updates %} アップデートがまだ入手できない場合、脆弱性を解決するプルリクエストを作成するには、[**Create {% data variables.product.prodname_dependabot %} security update**] をクリックします。 ![{% data variables.product.prodname_dependabot %} セキュリティアップデートボタンを作成](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。 {% data variables.product.prodname_dependabot %} によって発行される各プルリクエストには、{% data variables.product.prodname_dependabot %} の制御に使用できるコマンドの情報が含まれています。 詳しい情報については、「[依存関係の更新に関するプルリクエストを管理する](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) 」を参照してください。
1. 必要に応じて、アラートが正しく修正されていない場合や、未使用のコード内に含まれている場合は、[Dismiss] ドロップダウンを使用して、アラートを却下する理由をクリックします。 ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and determine whether or not you need to update the dependency.
1. When you merge a pull request that updates the manifest or lock file to a secure version of the dependency, this will resolve the alert. Alternatively, if you decide not to update the dependency, click the **Dismiss** drop-down, and select a reason for dismissing the alert. ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. Click the version number of the vulnerable dependency to display detailed information. ![Detailed information on the vulnerable dependency](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. Review the details of the vulnerability and determine whether or not you need to update the dependency. When you merge a pull request that updates the manifest or lock file to a secure version of the dependency, this will resolve the alert.
1. The banner at the top of the **Dependencies** tab is displayed until all the vulnerable dependencies are resolved or you dismiss it. Click **Dismiss** in the top right corner of the banner and select a reason for dismissing the alert. ![Dismiss security banner](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

### 参考リンク

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"{% endif %}
- 「[リポジトリのセキュリティおよび分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
