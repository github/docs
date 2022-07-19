---
title: セキュリティの概要の表示
intro: セキュリティの概要で利用できる様々なビューへのアクセス
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
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
shortTitle: セキュリティの概要の表示
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Organizationのセキュリティの概要の表示

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. アラートの種類に対する集約された情報を見るには、**Show more（さらに表示）**をクリックしてください。 ![さらに表示ボタン](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}
{% ifversion security-overview-views %}
{% data reusables.organizations.security-overview-feature-specific-page %}
  ![Code scanning固有のページのスクリーンショット](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Organizationに渡るアラートの表示

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. セキュリティサイドバーで、表示したいアラートのサブセットを選択してください。 ![アラートサブセットの表示](/assets/images/help/organizations/view-alert-subset.png)
2. あるいは、アラートのリストをフィルタしてください。 各ビューには、利用可能なフィルタが独自に選択されています。 検索を絞り込むために、ドロップダウンのフィルタメニュー内で複数のフィルタをクリックできます。 検索フィールドに検索の修飾子を入力することもできます。 利用可能な修飾子に関する詳しい情報については「[セキュリティの概要でのアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。 ![Secret scanningビューのドロップダウンフィルタメニューとリポジトリの検索フィールド](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Enterpriseのセキュリティの概要の表示

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. ひだりのサイドバーで{% octicon "shield" aria-label="The shield icon" %}**Code Security（コードセキュリティ）**をクリックしてください。
{% ifversion security-overview-feature-specific-alert-page %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}
{% endif %}

## リポジトリのアラートの表示

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で**Security（セキュリティ）**をクリックしてください。 ![リポジトリセキュリティタブ](/assets/images/help/repository/security-tab.png)
2. セキュリティサイドバーで、開きたいビューを選択してください。 ![リポジトリビューのアラートサブセット](/assets/images/help/repository/repo-security-side-panel.png)
3. あるいは、アラートのリストをフィルタしてください。 各ビューには、利用可能なフィルタが独自に選択されています。 検索を絞り込むために、ドロップダウンのフィルタメニュー内で複数のフィルタをクリックできます。 検索フィールドに検索の修飾子を入力することもできます。 利用可能な修飾子に関する詳しい情報については「[セキュリティの概要でのアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。 ![リポジトリSecret scanningアラートビューのドロップダウンフィルタメニュー](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Teamのセキュリティの概要の表示

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}
