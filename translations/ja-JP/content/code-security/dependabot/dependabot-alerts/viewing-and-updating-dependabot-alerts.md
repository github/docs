---
title: Viewing and updating Dependabot alerts
intro: '{% data variables.product.product_name %} がプロジェクト内の脆弱性のある依存関係を発見した場合は、それらをリポジトリの [Dependabot alerts] タブで確認できます。 その後、プロジェクトを更新してこの脆弱性を解決することができます。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

Your repository's {% data variables.product.prodname_dependabot_alerts %} tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. You can{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filter alerts by package, ecosystem, or manifest. You can also{% endif %} sort the list of alerts, and you can click into specific alerts for more details. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."

{% ifversion fpt or ghec or ghes > 3.2 %}
{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% data reusables.repositories.dependency-review %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## リポジトリ内の脆弱性のある依存関係の更新について

コードベースが既知の脆弱性のある依存関係を使用していることを検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を生成します。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、{% data variables.product.product_name %} がデフォルトのブランチで脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} はそれを修正するためのプルリクエストを作成します。 プルリクエストは、脆弱性を回避するために必要最低限の安全なバージョンに依存関係をアップグレードします。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}You can sort and filter {% data variables.product.prodname_dependabot_alerts %} with the dropdown menus in the {% data variables.product.prodname_dependabot_alerts %} tab or by typing filters as `key:value` pairs into the search bar. The available filters are repository (for example, `repo:my-repository`), package (for example, `package:django`), ecosystem (for example, `ecosystem:npm`), manifest (for example, `manifest:webwolf/pom.xml`), state (for example, `is:open`), and whether an advisory has a patch (for example, `has: patch`).

Each {% data variables.product.prodname_dependabot %} alert has a unique numeric identifier and the {% data variables.product.prodname_dependabot_alerts %} tab lists an alert for every detected vulnerability. Legacy {% data variables.product.prodname_dependabot_alerts %} grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to a {% data variables.product.prodname_dependabot_alerts %} tab filtered for that package. {% endif %}
{% endif %}

## 脆弱性のある依存関係を表示して更新する

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Optionally, to filter alerts, select the **Repository**, **Package**, **Ecosystem**, or **Manifest** dropdown menu then click the filter that you would like to apply. You can also type filters into the search bar. For example, `ecosystem:npm` or `has:patch`. To sort alerts, select the **Sort** dropdown menu then click the option that you would like to sort by. ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. Click the alert that you would like to view. ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)
1. 脆弱性の詳細を確認し、可能な場合は、自動セキュリティアップデートを含むプルリクエストを確認します。
1. 必要に応じて、アラートに対する {% data variables.product.prodname_dependabot_security_updates %} アップデートがまだ入手できない場合、脆弱性を解決するプルリクエストを作成するには、[**Create {% data variables.product.prodname_dependabot %} security update**] をクリックします。 ![{% data variables.product.prodname_dependabot %} セキュリティアップデートボタンを作成](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。 {% data variables.product.prodname_dependabot %} によって発行される各プルリクエストには、{% data variables.product.prodname_dependabot %} の制御に使用できるコマンドの情報が含まれています。 詳しい情報については、「[依存関係の更新に関するプルリクエストを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) 」を参照してください。
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% elsif ghes = 3.3 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. 脆弱性の詳細を確認し、可能な場合は、自動セキュリティアップデートを含むプルリクエストを確認します。
1. 必要に応じて、アラートに対する {% data variables.product.prodname_dependabot_security_updates %} アップデートがまだ入手できない場合、脆弱性を解決するプルリクエストを作成するには、[**Create {% data variables.product.prodname_dependabot %} security update**] をクリックします。 ![{% data variables.product.prodname_dependabot %} セキュリティアップデートボタンを作成](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。 {% data variables.product.prodname_dependabot %} によって発行される各プルリクエストには、{% data variables.product.prodname_dependabot %} の制御に使用できるコマンドの情報が含まれています。 詳しい情報については、「[依存関係の更新に関するプルリクエストを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) 」を参照してください。
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, select the "Dismiss" drop-down, and click a reason for dismissing the alert. ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif ghes = 3.1 or ghes = 3.2 or ghae-issue-4864 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. 脆弱性の詳細をレビューし、依存関係を更新する必要があるかを判断してください。
1. 依存関係のセキュアなバージョンへマニフェストあるいはロックファイルを更新するPull Requestをマージすると、アラートは解決されます。 Alternatively, if you decide not to update the dependency, select the **Dismiss** drop-down, and click a reason for dismissing the alert. ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. 詳細な情報を表示する脆弱性のある依存関係のバージョン番号をクリックしてください。 ![脆弱性のある依存関係の詳細情報](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. 脆弱性の詳細をレビューし、依存関係を更新する必要があるかを判断してください。 依存関係のセキュアなバージョンへマニフェストあるいはロックファイルを更新するPull Requestをマージすると、アラートは解決されます。
1. **Dependencies（依存関係）**タブの上部のバナーは、脆弱性のある依存関係がすべて解決されるか、そのバナーを閉じるまで表示されます。 バナーの右上にある**Dismiss（却下）**をクリックして、アラートを却下する理由を選択してください。 ![セキュリティバナーを閉じる](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

{% if reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**. ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png)
1. Click the alert that you would like to view or update. ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

## 参考リンク

- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- 「[{% data variables.product.prodname_dependabot_security_updates %}の設定](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)」{% endif %}
- 「[リポジトリのセキュリティおよび分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
- 「[脆弱性のある依存関係の検出のトラブルシューティング](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies)」{% ifversion fpt or ghec or ghes > 3.2 %}
- 「[{% data variables.product.prodname_dependabot %}エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」{% endif %}
