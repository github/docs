---
title: 脆弱性のある依存関係に関するアラートについて
intro: '{% data variables.product.product_name %} は、リポジトリに影響を与える脆弱性を検出すると、{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}を送信します。'
versions:
  enterprise-server: <=2.22
topics:
  - Security
---

<!--See /content/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies for the current version of this article -->

### 脆弱性のある依存関係について

{% data reusables.repositories.a-vulnerability-is %}

セキュリティ上の脆弱性があるパッケージにコードが依存している場合、この脆弱性のある依存関係により、プロジェクトまたはそれを使用するユーザにさまざまな問題が発生する可能性があります。

### 脆弱性のある依存関係の検出

 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} は脆弱性のある依存関係を検出し、{% data variables.product.prodname_dependabot_alerts %}を送信します{% else %}{% data variables.product.product_name %} は脆弱性のある依存関係を検出し、次の場合にセキュリティアラート{% endif %}を送信します。

- 新しいアドバイザリデータが {% data variables.product.prodname_dotcom_the_website %} から 1 時間ごとに {% data variables.product.prodname_ghe_server %} に同期されたとき。 {% data reusables.security-advisory.link-browsing-advisory-db %}
- リポジトリの依存関係グラフが変更されたとき。 たとえば、コントリビューターがコミットをプッシュして、依存するパッケージまたはバージョンを変更するとき。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.dependency-review %}

{% data variables.product.product_name %} が脆弱性と依存関係を検出できるエコシステムのリストについては、「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% note %}

**注釈:** マニフェストとロックファイルを最新の状態に保つことが重要です。 依存関係グラフが現在の依存関係とバージョンを正確に反映していない場合、使用する脆弱性のある依存関係のアラートを見逃す可能性があります。 また、使用しなくなった依存関係のアラートを受け取る場合もあります。

{% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.21" % %}
### 脆弱性のある依存関係の {% data variables.product.prodname_dependabot %} アラート
{% else %}
### 脆弱性のある依存対象に関するセキュリティアラート
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
ー
{% data variables.product.product_name %} が脆弱性のある依存関係を特定すると、{% data variables.product.prodname_dependabot %} アラートを生成し、リポジトリの [Security] タブに表示します。 アラートには、プロジェクト内で影響を受けるファイルへのリンクと、修正バージョンに関する情報が含まれています。 {% data variables.product.product_name %} は、影響を受けるリポジトリのメンテナに、通知設定に従って新しいアラートについて通知します。 詳しい情報については、「[脆弱性のある依存関係に対する通知を設定する](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
ー
{% data variables.product.product_name %} が脆弱性のある依存関係を特定すると、影響を受けるリポジトリのメンテナに、脆弱性の詳細、プロジェクト内の影響を受けるファイルへのリンク、および修正バージョンに関する情報を含むセキュリティアラートを送信します。
{% endif %}

{% warning %}

**注釈**: {% data variables.product.product_name %} のセキュリティの機能は、すべての脆弱性を捕捉するものではありません。 当社は常に脆弱性データベースを更新し、最新の情報でアラートを生成するよう努力していますが、一定の期間内にすべてをの問題を把握したり、既知の脆弱性について通知したりすることはできません。 これらの機能は、それぞれの依存関係の潜在的な脆弱性やその他の問題に関する人によるレビューを置き換えるものではなく、必要な場合にはセキュリティサービスによるコンサルティングや、総合的な脆弱性レビューを行うことをおすすめします。

{% endwarning %}

### {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートへのアクセス

特定のプロジェクトに影響を与えるすべてのアラートは、リポジトリの依存関係グラフで確認できます。

{% if currentVersion ver_gt "enterprise-server@2.21" %}
デフォルト設定では、影響を受けるリポジトリの管理者権限を持つユーザに
{% data variables.product.prodname_dependabot_alerts %} について通知します。{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
デフォルトでは、影響を受けるリポジトリで管理者権限を持つ人々にセキュリティアラートが送られます。
{% data variables.product.product_name %} は、特定のリポジトリに対して特定された脆弱性を公表することはありません。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}詳細については、「[通知の配信方法を選択する](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)」を参照してください。{% endif %}{% if currentVersion ver_gt "enterprise-server@2.20" %}詳細については、「[脆弱性のある依存関係に対する通知を設定する](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)」を参照してください。{% endif %}
