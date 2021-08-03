---
title: 脆弱性のある依存関係の通知を設定する
shortTitle: 通知を設定する
intro: 'Optimize how you receive notifications about {% data variables.product.prodname_dependabot %} alerts.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---
<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

### 脆弱性のある依存関係の通知について

When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in your repositories, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. {% data variables.product.product_name %} notifies the maintainers of affected repositories about the new alert according to their notification preferences.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_dependabot %} is enabled by default on all public repositories. {% data variables.product.prodname_dependabot_alerts %} の場合、デフォルト設定では、特定の脆弱性ごとにグループ化された {% data variables.product.prodname_dependabot_alerts %} をメールで受信します。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Organization のオーナーの場合は、ワンクリックで Organization 内のすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効または無効にできます。 新しく作成されたリポジトリに対して、脆弱性のある依存関係の検出を有効にするか無効にするかを設定することもできます。 詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.20" %}
By default, if your site administrator has configured email for notifications on your enterprise, you will receive {% data variables.product.prodname_dependabot_alerts %} by email.{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}サイト管理者は、通知なしで {% data variables.product.prodname_dependabot_alerts %} を有効にすることもできます。 詳細については、「[{% data variables.product.prodname_ghe_server %} への脆弱性のある依存関係に対する {% data variables.product.prodname_dependabot_alerts %} の有効化](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。{% endif %}

### Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}

各ページの上部に表示される [Manage notifications] ドロップダウン {% octicon "bell" aria-label="The notifications bell" %} から、自分または Organization の通知設定を構成できます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} オプション](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot %} alerts. 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)」を参照してください。

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)」を参照してください。

### 脆弱性のある依存関係の通知を減らす方法

If you are concerned about receiving too many notifications for {% data variables.product.prodname_dependabot_alerts %}, we recommend you opt into the weekly email digest, or turn off notifications while keeping {% data variables.product.prodname_dependabot_alerts %} enabled. You can still navigate to see your {% data variables.product.prodname_dependabot_alerts %} in your repository's Security tab. 詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。

### 参考リンク

- [通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- 「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)」
