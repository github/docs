---
title: 脆弱性のある依存関係に対するセキュリティアラートについて
intro: '{% data variables.product.product_name %} は、リポジトリに影響を及ぼす脆弱性を検出すると、セキュリティアラートを送信します。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### セキュリティの脆弱性について

{% data reusables.repositories.a-vulnerability-is %}重大度やプロジェクトの依存関係により異なりますが、脆弱性はプロジェクトあるいはプロジェクトを利用する人々に、幅広い問題を引き起こすことがあります。 {% data variables.product.product_name %}リポジトリ中の依存関係の特定の種類の脆弱性は、追跡して解決できます。

{% data variables.product.prodname_dotcom %} が、リポジトリの依存関係グラフの依存関係の1つで {% data variables.product.prodname_advisory_database %} または [WhiteSource](https://www.whitesourcesoftware.com/GitHubSecurityAlerts) からの脆弱性を検出した場合、セキュリティアラートが送信されます。 {% data variables.product.prodname_advisory_database %}に関する詳しい情報については、「<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">{% data variables.product.prodname_advisory_database %}におけるセキュリティ脆弱性をブラウズする</a>」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
### 脆弱性のある依存関係に対するアラートと自動的なセキュリティアップデート
{% else %}
### 脆弱性のある依存対象に関するセキュリティアラート
{% endif %}

GitHub Advisory Databaseに新しい脆弱性が追加されると、影響を受けるバージョンの依存関係を使用する{% if currentVersion == "free-pro-team@latest" %}パブリック{% endif %}リポジトリ{% if currentVersion == "free-pro-team@latest" %}（および脆弱性検出をオプトインしたプライベートリポジトリ）{% endif %}を特定し{% if currentVersion == "free-pro-team@latest" %}、セキュリティアラートをリポジトリメンテナに送信し、自動セキュリティアップデートを生成して{% else %}、セキュリティアラートをリポジトリメンテナに送信します{% endif %}。

各セキュリティアラートには、重要度{% if currentVersion == "free-pro-team@latest" %}、プロジェクト内で影響を受けるファイルへのリンク、およびその脆弱性を解決する、自動的なセキュリティアップデートを含んだプルリクエストが含まれます{% else %}、およびプロジェクト内で影響を受けるファイルへのリンクが含まれます{% endif %}。 また、脆弱性についての詳細情報が提供されることもあります。

{% if currentVersion == "free-pro-team@latest" %}リポジトリの [Alerts] タブまたは{% endif %}リポジトリの依存関係グラフに、特定のプロジェクトに影響するすべてのアラートが表示されます。{% if currentVersion == "free-pro-team@latest" %}詳細は、「[リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。{% endif %}

デフォルトでは、影響を受けるリポジトリで管理者権限を持つ人々にセキュリティアラートが送られます。 {% data variables.product.product_name %} は、いかなるリポジトリについても特定された脆弱性を公開することはありません。{% if currentVersion == "free-pro-team@latest" %}セキュリティアラートは、Organization が所有しているリポジトリで作業している人々や Team に対して有効化することもできます。 詳細は「[Organization のリポジトリ内の脆弱性のある依存関係に関するアラートを管理する](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)」を参照してください。{% endif %}

{% data reusables.repositories.enable-security-alerts %}
{% if currentVersion == "free-pro-team@latest" %}
自動的なセキュリティアップデートは、脆弱性のある依存関係を、脆弱性を解決する最小のバージョンに更新します。 自動的なセキュリティアップデートは、依存関係グラフとセキュリティアラートを使用しているリポジトリにおいて自動的に有効化されますが、自動的なプルリクエストを無効化して、代わりにセキュリティアップデートをマニュアルで生成するよう選択することも可能です。 詳細は「[自動的なセキュリティアップデートを設定する](/github/managing-security-vulnerabilities/configuring-automated-security-updates)」を参照してください。

{% data variables.product.prodname_dotcom %} は、デフォルトで_パブリック_なリポジトリ内の脆弱性を持つ依存関係を検出し、アラートを発します。 _プライベート_リポジトリ内の脆弱性を持つ依存関係に対してセキュリティアラートを受けるには、リポジトリのオーナーまたはリポジトリに管理権限を持つ人がリポジトリの依存グラフと脆弱性アラートを有効にしなければなりません。 詳しい情報については[プライベートリポジトリ用のデータ利用のオプトインもしくはオプトアウト](/articles/opting-into-or-out-of-data-use-for-your-private-repository)を参照してください。
{% endif %}

{% data variables.product.product_name %} が脆弱性と依存関係を検出できるサポート言語のリストについては、「[リポジトリが依存するパッケージのリスト](/articles/listing-the-packages-that-a-repository-depends-on)」を参照してください。

{% warning %}

**メモ**: セキュリティアラートのような {% data variables.product.product_name %} のセキュリティの機能は、すべての脆弱性を捕捉するものではありません。 弊社は常に脆弱性データベースを更新し、最新の情報でアラートを発するよう努力していますが、すべての問題を捕捉することや、既知の脆弱性について一定の時間内で確実にアラートを発することは不可能です。 これらの機能は、それぞれの依存関係の潜在的な脆弱性やその他の問題に関する人によるレビューを置き換えるものではなく、必要な場合にはセキュリティサービスによるコンサルティングや、総合的な脆弱性レビューを行うことをおすすめします。

{% endwarning %}

### セキュリティアラートの通知を設定する

デフォルトでは、{% if currentVersion == "free-pro-team@latest" %}特定の脆弱性ごとにグループ化された{% endif %}セキュリティアラートがメールで送信されます。 セキュリティアラートは、最大10個のリポジトリのアラートをまとめた毎週のメール、Web通知、または {% data variables.product.product_name %} ユーザインターフェースで受信するように選択することもできます。 For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-options){% else %}"[Choosing the delivery method for your notifications ](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- [自動的なセキュリティアップデートを設定する](/github/managing-security-vulnerabilities/configuring-automated-security-updates)
- [リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- [{% data variables.product.product_name %} によるデータの利用方法と保護方法を理解する](/categories/understanding-how-github-uses-and-protects-your-data){% endif %}
- MITREの[「脆弱性」の定義](https://cve.mitre.org/about/terminology.html#vulnerability)
