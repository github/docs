---
title: Dependabot アラートの通知を構成する
shortTitle: Configure notifications
intro: '{% data variables.product.prodname_dependabot_alerts %} に関する通知の受信方法を最適化する'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
ms.openlocfilehash: b8810c27a10302a7873fc61a32189f33855140bb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878560'
---
## {% data variables.product.prodname_dependabot_alerts %} の通知について

{% data variables.product.prodname_dependabot %} でリポジトリ中に脆弱性のある依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}を検出すると、{% data variables.product.prodname_dependabot %} アラートが生成され、そのリポジトリの [Security]\(セキュリティ\) タブに表示されます。 {% data variables.product.product_name %} では、影響を受けるリポジトリのメンテナーに、その通知設定に従って新しいアラートに関する通知が行われます。{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} は、すべてのパブリック リポジトリでデフォルトで有効化されています。 {% data variables.product.prodname_dependabot_alerts %} の場合、デフォルト設定では、特定の脆弱性ごとにグループ化された {% data variables.product.prodname_dependabot_alerts %} をメールで受信します。
{% endif %} 

{% ifversion fpt or ghec %}Organization のオーナーの場合は、ワンクリックで Organization 内のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効または無効にできます。 また、新しく作成されたリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にするか無効にするかを設定することもできます。 詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)」を参照してください。
{% endif %}

{% ifversion ghes or ghae %}デフォルトでは、Enterprise のオーナーが Enterprise での通知のためのメールを設定していれば、あなたはメールで {% data variables.product.prodname_dependabot_alerts %} を受け取ることになります。

Enterprise のオーナーは、通知なしで {% data variables.product.prodname_dependabot_alerts %} を有効にすることもできます。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}の通知設定

{% ifversion fpt or ghes or ghec %}新しい {% data variables.product.prodname_dependabot %} のアラートが検出されると、{% data variables.product.product_name %} によって、通知の設定に従って、リポジトリについて {% data variables.product.prodname_dependabot_alerts %} にアクセスできるすべてのユーザーに通知されます。 あなたがリポジトリを監視しており、セキュリティ アラートまたはリポジトリ上のすべてのアクティビティの通知を有効にしていて、リポジトリを無視していない場合は、アラートが通知されます。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。
{% endif %}

各ページの上部に表示される [Manage notifications] ドロップダウン {% octicon "bell" aria-label="The notifications bell" %} から、自分または Organization の通知設定を構成できます。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

  ![{% data variables.product.prodname_dependabot_alerts %} オプション](/assets/images/help/notifications-v2/dependabot-alerts-options.png)

{% note %}

**注:** {% data variables.product.company_short %} で通知をフィルター処理して、{% data variables.product.prodname_dependabot_alerts %} を表示できます。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)」を参照してください。

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 詳しくは、[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)に関するページをご覧ください。

## {% data variables.product.prodname_dependabot_alerts %} の通知によるノイズを軽減する方法

{% data variables.product.prodname_dependabot_alerts %}の通知をあまりに多く受け取ることが心配なら、週次のメールダイジェストにオプトインするか、{% data variables.product.prodname_dependabot_alerts %}を有効化したままで通知をオフにすることをおすすめします。 引き続き移動して、リポジトリの [セキュリティ] タブに {% data variables.product.prodname_dependabot_alerts %} を表示することができます。詳しくは、「[{% data variables.product.prodname_dependabot_alerts %}の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」を参照してください。

## 参考資料

- 「[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」
- 「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)」
