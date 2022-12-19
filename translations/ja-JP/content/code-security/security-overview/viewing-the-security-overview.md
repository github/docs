---
title: セキュリティの概要の表示
intro: セキュリティの概要で使用できるさまざまなビューに移動します
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163220'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Organizationのセキュリティの概要の表示

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. サイド バーのオプションから、表示する概要を選択します。
1. ドロップダウンのフィルターと検索ボックスを使って、最も関心のある情報に絞り込みます。 [Security Risk] ビューと [Security Coverage] ビューには、結果のフィルター処理に使用できる対話型ヘッダーもあります。

  ![対話型ヘッダーが強調表示されている [Security Risk] ビューのスクリーンショット](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. アラートの種類について集計情報を表示するには、 **[Show more]\(さらに表示\)** をクリックします。
  ![[Show more] ボタン](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![コード スキャン固有ページのスクリーンショット](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## エンタープライズのセキュリティの概要の表示

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 左側のサイドバーで、{% octicon "shield" aria-label="The shield icon" %} **[Code Security]\(コード セキュリティ\)** をクリックします。
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Teamのセキュリティの概要の表示

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
