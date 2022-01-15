---
title: 脆弱性のある依存関係の通知を設定する
shortTitle: 通知を設定する
intro: 'Optimize how you receive notifications about  {% data variables.product.prodname_dependabot_alerts %}.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->

## 脆弱性のある依存関係の通知について

{% data variables.product.prodname_dependabot %}がリポジトリ中に脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %}アラートが生成され、そのリポジトリのセキュリティタブに表示されます。 {% data variables.product.product_name %}は、影響を受けるリポジトリのメンテナに、リポジトリの通知設定に従って新しいアラートに関する通知を行います。{% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %}は、すべてのパブリックリポジトリでデフォルトで有効化されています。 {% data variables.product.prodname_dependabot_alerts %} の場合、デフォルト設定では、特定の脆弱性ごとにグループ化された {% data variables.product.prodname_dependabot_alerts %} をメールで受信します。
{% endif %}

{% ifversion fpt or ghec %}Organization のオーナーの場合は、ワンクリックで Organization 内のすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効または無効にできます。 新しく作成されたリポジトリに対して、脆弱性のある依存関係の検出を有効にするか無効にするかを設定することもできます。 詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)」を参照してください。
{% endif %}

{% ifversion ghes or ghae-issue-4864 %}
By default, if your enterprise owner has configured email for notifications on your enterprise, you will receive {% data variables.product.prodname_dependabot_alerts %} by email.

Enterprise owners can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}の通知設定

{% ifversion fpt or ghes > 3.1 or ghec %}
When a new {% data variables.product.prodname_dependabot %} alert is detected, {% data variables.product.product_name %} notifies all users with access to {% data variables.product.prodname_dependabot_alerts %} for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, and are not ignoring the repository. 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。
{% endif %}

各ページの上部に表示される [Manage notifications] ドロップダウン {% octicon "bell" aria-label="The notifications bell" %} から、自分または Organization の通知設定を構成できます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} オプション](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**Note:** You can filter your notifications on {% data variables.product.company_short %} to show  {% data variables.product.prodname_dependabot_alerts %}. 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)」を参照してください。

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)」を参照してください。

## 脆弱性のある依存関係の通知を減らす方法

{% data variables.product.prodname_dependabot_alerts %}の通知をあまりに多く受け取ることが心配なら、週次のメールダイジェストにオプトインするか、{% data variables.product.prodname_dependabot_alerts %}を有効化したままで通知をオフにすることをおすすめします。 その場合でも、リポジトリのセキュリティタブで{% data variables.product.prodname_dependabot_alerts %}を確認することはできます。 詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。

## 参考リンク

- [通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- 「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)」
