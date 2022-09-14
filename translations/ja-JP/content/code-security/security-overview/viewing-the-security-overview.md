---
title: セキュリティの概要の表示
intro: セキュリティの概要で使用できるさまざまなビューに移動します
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  ghae: issue-5503
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
ms.openlocfilehash: a0b6371155e7b7780ea216373b42481aa403e6db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525690'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Organizationのセキュリティの概要の表示

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. アラートの種類について集計情報を表示するには、 **[Show more]\(さらに表示\)** をクリックします。
  ![[さらに表示] ボタン](/assets/images/help/organizations/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![コードスキャン固有ページのスクリーンショット](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## 組織全体のアラートの表示

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. セキュリティのサイドバーで、表示するアラートのサブセットを選択します。
![アラートのサブセットの表示](/assets/images/help/organizations/view-alert-subset.png)
2. あるいは、アラートのリストをフィルタしてください。 表示ごとに、フィルターの独自の選択肢が提供されています。 検索を絞り込むために、ドロップダウンのフィルタメニュー内で複数のフィルタをクリックできます。 検索フィールドに検索修飾子を入力することもできます。 使用可能な修飾子の詳細については、「[セキュリティの概要でのアラートのフィルター処理](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。
  ![シークレット スキャン表示のドロップダウン フィルター メニューと [検索リポジトリ] フィールド](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## エンタープライズのセキュリティの概要の表示

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 左側のサイドバーで、{% octicon "shield" aria-label="The shield icon" %} **[Code Security]\(コード セキュリティ\)** をクリックします。
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %} {% endif %}

## リポジトリのアラートの表示

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下にある、**[セキュリティ]** をクリックします。
  ![リポジトリの [セキュリティ] タブ](/assets/images/help/repository/security-tab.png)
2. セキュリティのサイドバーで、開く表示を選択します。
  ![リポジトリ表示のアラート サブセット](/assets/images/help/repository/repo-security-side-panel.png)
3. あるいは、アラートのリストをフィルタしてください。 表示ごとに、フィルターの独自の選択肢が提供されています。 検索を絞り込むために、ドロップダウンのフィルタメニュー内で複数のフィルタをクリックできます。 検索フィールドに検索修飾子を入力することもできます。 使用可能な修飾子の詳細については、「[セキュリティの概要でのアラートのフィルター処理](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。
  ![リポジトリのシークレット スキャン アラート表示のドロップダウン フィルター メニュー](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Teamのセキュリティの概要の表示

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %}
