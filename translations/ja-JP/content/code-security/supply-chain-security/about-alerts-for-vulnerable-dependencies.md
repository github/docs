---
title: 脆弱性のある依存関係に関するアラートについて
intro: '{% data variables.product.product_name %} は、リポジトリに影響を与える脆弱性を検出すると、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}を送信します。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - セキュリティ
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

### 脆弱性のある依存関係について

{% data reusables.repositories.a-vulnerability-is %}

セキュリティ上の脆弱性があるパッケージにコードが依存している場合、この脆弱性のある依存関係により、プロジェクトまたはそれを使用するユーザにさまざまな問題が発生する可能性があります。

### 脆弱性のある依存関係の検出

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} は脆弱性のある依存関係を検出し、{% data variables.product.prodname_dependabot_alerts %}を送信します{% else %}{% data variables.product.product_name %} は脆弱性のある依存関係を検出し、次の場合にセキュリティアラート{% endif %}を送信します。

{% if currentVersion == "free-pro-team@latest" %}
- {% data variables.product.prodname_advisory_database %} に新しい脆弱性が追加されたとき。 詳しい情報については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ脆弱性を参照する](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)」を参照してください。{% else %}
- 新しいアドバイザリデータが {% data variables.product.prodname_dotcom_the_website %} から 1 時間ごとに {% data variables.product.prodname_ghe_server %} に同期されたとき。 アドバイザリデータに関する詳しい情報については、「<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">{% data variables.product.prodname_advisory_database %} のセキュリティ脆弱性を参照する</a>」を参照してください。{% endif %}
- リポジトリの依存関係グラフが変更されたとき。 たとえば、コントリビューターがコミットをプッシュして、依存しているパッケージまたはバージョンを変更したとき{{% if currentVersion == "free-pro-team@latest" %}、またはいずれかの依存関係のコードが変更されたときなどです{% endif %}。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.dependency-review %}

{% data variables.product.product_name %} が脆弱性と依存関係を検出できるエコシステムのリストについては、「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% note %}

**注釈:** マニフェストとロックファイルを最新の状態に保つことが重要です。 依存関係グラフが現在の依存関係とバージョンを正確に反映していない場合、使用する脆弱性のある依存関係のアラートを見逃す可能性があります。 また、使用しなくなった依存関係のアラートを受け取る場合もあります。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### 脆弱性のある依存関係の {% data variables.product.prodname_dependabot %} アラート
{% else %}
### 脆弱性のある依存対象に関するセキュリティアラート
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} は、_パブリック_リポジトリ内の脆弱性のある依存関係を検出し、デフォルト設定で {% data variables.product.prodname_dependabot_alerts %} を生成します。 プライベートリポジトリの所有者、または管理アクセス権を持つユーザは、リポジトリの依存関係グラフと {% data variables.product.prodname_dependabot_alerts %} を有効にすることで、{% data variables.product.prodname_dependabot_alerts %} を有効化できます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効または無効にすることもできます。 For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

For information about permission requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)."

{% data variables.product.product_name %} は依存関係グラフの生成をすぐに開始し、脆弱性のある依存関係が特定されるとすぐにアラートを生成します。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 詳しい情報については、「[プライベートリポジトリのデータ使用を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. アラートには、プロジェクト内で影響を受けるファイルへのリンクと、修正バージョンに関する情報が含まれています。 {% data variables.product.product_name %} は、影響を受けるリポジトリのメンテナに、通知設定に従って新しいアラートについて通知します。 詳しい情報については、「[脆弱性のある依存関係に対する通知を設定する](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, the alert may also contain a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we send a security alert to the maintainers of affected repositories with details of the vulnerability, a link to the affected file in the project, and information about a fixed version.
{% endif %}

{% warning %}

**注釈**: {% data variables.product.product_name %} のセキュリティの機能は、すべての脆弱性を捕捉するものではありません。 当社は常に脆弱性データベースを更新し、最新の情報でアラートを生成するよう努力していますが、一定の期間内にすべてをの問題を把握したり、既知の脆弱性について通知したりすることはできません。 これらの機能は、それぞれの依存関係の潜在的な脆弱性やその他の問題に関する人によるレビューを置き換えるものではなく、必要な場合にはセキュリティサービスによるコンサルティングや、総合的な脆弱性レビューを行うことをおすすめします。

{% endwarning %}

### {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートへのアクセス

特定のプロジェクト{% if currentVersion == "free-pro-team@latest" %}に影響を与えるすべてのアラートは、リポジトリの [Security] タブ{% endif %}またはリポジトリの依存関係グラフで確認できます。{% if currentVersion == "free-pro-team@latest" %}詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}.{% endif %} {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. {% data variables.product.prodname_dependabot_alerts %} を、自分が所有または管理者権限を持っているリポジトリで作業している追加のユーザや Team に表示することもできます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
デフォルトでは、影響を受けるリポジトリで管理者権限を持つ人々にセキュリティアラートが送られます。 {% data variables.product.product_name %} は、特定のリポジトリに対して特定された脆弱性を公表することはありません。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} For more information, see "[Choosing the delivery method for your notifications](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)."{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} For more information, see "[Configuring notifications for vulnerable dependencies](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular vulnerability in the {% data variables.product.prodname_advisory_database %}. 詳しい情報については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ脆弱性を参照する](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#viewing-your-vulnerable-repositories)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- 「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」
- [リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- [{% data variables.product.product_name %} によるデータの利用方法と保護方法を理解する](/categories/understanding-how-github-uses-and-protects-your-data){% endif %}
