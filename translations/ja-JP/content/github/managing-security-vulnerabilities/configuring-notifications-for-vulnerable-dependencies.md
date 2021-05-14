---
title: 脆弱性のある依存関係の通知を設定する
shortTitle: 通知を設定する
intro: '{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} セキュリティ{% endif %}アラートに関する通知の受信方法を最適化します。'
versions:
  enterprise-server: '>=2.21 <=2.22'
topics:
  - Security
---

### 脆弱性のある依存関係の通知について

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} がリポジトリ内にある脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} アラートを生成し、リポジトリの [Security] タブに表示します。 {% data variables.product.product_name %} は、影響を受けるリポジトリのメンテナに、通知設定に従って新しいアラートについて通知します。{% else %}{% data variables.product.product_name %} がリポジトリ内の脆弱性のある依存関係を検出すると、セキュリティアラートを送信します。{% endif %}{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} は、すべてのパブリックリポジトリでデフォルト設定で有効になっています。 {% data variables.product.prodname_dependabot_alerts %} の場合、デフォルト設定では、特定の脆弱性ごとにグループ化された {% data variables.product.prodname_dependabot_alerts %} をメールで受信します。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Organization のオーナーの場合は、ワンクリックで Organization 内のすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効または無効にできます。 新しく作成されたリポジトリに対して、脆弱性のある依存関係の検出を有効にするか無効にするかを設定することもできます。 For more information, see "[Managing security and analysis settings for your organization](/organizations/collaborating-with-groups-in-organizations/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.21" %}
この機能を使用する前に、サイト管理者は
{% data variables.product.product_location %} の脆弱性のある依存関係に対するセキュリティアラートを有効にする必要があります。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} の脆弱性のある依存関係に関するセキュリティアラートの有効化](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。 {% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
デフォルト設定では、サイト管理者が Enterprise の通知用にメールを設定している場合、
{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %} セキュリティアラート{% endif %}をメールで受け取ります。{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}サイト管理者は、通知なしで {% data variables.product.prodname_dependabot_alerts %} を有効にすることもできます。 詳細については、「[{% data variables.product.prodname_ghe_server %} への脆弱性のある依存関係に対する {% data variables.product.prodname_dependabot_alerts %} の有効化](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}サイト管理者は、通知なしでセキュリティアラートを有効にすることもできます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %}の脆弱性のある依存関係に関するセキュリティアラートの有効化](/enterprise/{{ currentVersion }}/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。 {% endif %}

### {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %} セキュリティアラートの通知を設定する{% endif %}

各ページの上部に表示される [Manage notifications] ドロップダウン {% octicon "bell" aria-label="The notifications bell" %} から、自分または Organization の通知設定を構成できます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![{% data variables.product.prodname_dependabot_alerts %} オプション](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![セキュリティアラートオプション](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**注釈:** {% data variables.product.company_short %} で通知をフィルタして、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} セキュリティ{% endif %}アラートを表示できます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)」を参照してください。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} 詳しい情報については、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}「通知を[設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[メール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}」を参照してください。{% endif %}

### 脆弱性のある依存関係の通知を減らす方法

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}の通知が多すぎる場合は、毎週のメールダイジェストを選択するか、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}を有効にしたまま通知をオフにすることをお勧めします。 その場合でも、リポジトリの [Security] タブで{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}を表示できます。{% if currentVersion == "free-pro-team@latest" %}詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。{% endif %}

### 参考リンク

- [通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- 「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)」
