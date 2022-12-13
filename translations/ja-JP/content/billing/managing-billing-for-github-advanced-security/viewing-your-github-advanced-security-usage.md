---
title: GitHub Advanced Security の使用状況を表示する
intro: 'Enterpriseの{% data variables.product.prodname_GH_advanced_security %}の使用状況を表示できます。'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: 8647ba2eb00f580256bd3f49ac2218331e45eef3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180488'
---
## {% data variables.product.prodname_GH_advanced_security %}のライセンスについて

{% data reusables.advanced-security.about-ghas-license-seats %} 詳しくは、「[{% data variables.product.prodname_GH_advanced_security %} の請求について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」をご覧ください。

{% ifversion ghas-committers-calculator %} サイト管理者ダッシュボードで {% data variables.product.prodname_GH_advanced_security %} をより多くの Organization やリポジトリに対して有効にする場合は、使用する追加のシート数を計算できます。 詳しくは、「[サイト管理ダッシュボード](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers)」をご覧ください。
{% endif %}

## Enterprise アカウントの {% data variables.product.prodname_GH_advanced_security %}ライセンスの使用状況を表示する

ライセンスに含まれるシート数と、現在使用されているシート数を確認できます。

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}"{% data variables.product.prodname_GH_advanced_security %}" セクションには、現在の使用状況が詳しく表示されます。
  ![Enterprise ライセンス設定の {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) シートが足りない場合、このセクションが赤くなり、"上限を越えました。" と表示されます。 {% data variables.product.prodname_GH_advanced_security %} の使用を減らすか、シートを追加購入する必要があります。 詳細については、「[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)」(GitHub Advanced Security の課金について) を参照してください。
  ![Enterprise ライセンス設定の {% data variables.product.prodname_GH_advanced_security %}。"上限を越えました" と表示されています](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. オプションで、Organization ごとに使用状況の詳しい内訳を確認するには、左側のサイドバーで、 **[請求]** をクリックします。
  ![Enterprise アカウント設定のサイドバーの [請求] タブ](/assets/images/help/business-accounts/settings-billing-tab.png) "{% data variables.product.prodname_GH_advanced_security %}" セクションで、コミッターの数と、Organization ごとの一意のコミッターの数を確認できます。
  ![Enterprise 請求設定の {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. 必要に応じて、所有者である Organization の名前をクリックして、Organization のセキュリティと分析の設定を表示します。
  ![Enterprise 請求設定の {% data variables.product.prodname_GH_advanced_security %} セクションの所有されている Organization](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. [セキュリティと分析] 設定ページで、[{% data variables.product.prodname_GH_advanced_security %} リポジトリ] セクションまでスクロールして、この Organization のリポジトリごとの使用状況の詳しい内訳を確認します。
  ![{% data variables.product.prodname_GH_advanced_security %} リポジトリ セクション](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 詳しくは、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」をご覧ください。

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}"{% data variables.product.prodname_GH_advanced_security %}" セクションには、現在の使用状況が詳しく表示されます。 使用されているシートの総数とともに、各Organizationのコミッター数とユニークなコミッター数の表を見ることができます。
  ![Enterprise ライセンスの{% data variables.product.prodname_GH_advanced_security %} セクション](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. 必要に応じて、所有者である Organization の名前をクリックして、Organization のセキュリティと分析の設定を表示します。
  ![Enterprise 請求設定の {% data variables.product.prodname_GH_advanced_security %} セクションの所有されている Organization](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. [セキュリティと分析] 設定ページで、[{% data variables.product.prodname_GH_advanced_security %} リポジトリ] セクションまでスクロールして、この Organization のリポジトリごとの使用状況の詳しい内訳を確認します。
  ![{% data variables.product.prodname_GH_advanced_security %} リポジトリ セクション](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 詳しくは、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」をご覧ください。

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## {% data variables.product.prodname_GH_advanced_security %}のライセンスの使用情報のダウンロード

Enterprise及びOrganizationの双方のレベルで、{% data variables.product.prodname_GH_advanced_security %}のライセンスの使用情報を含むCSVファイルをダウンロードできます。 このCSVファイルには、使用されている{% data variables.product.prodname_advanced_security %}の各シートに関する以下の情報が含まれます。

- シートを使用している人のユーザ名
- コミットが行われた{% data variables.product.prodname_advanced_security %}が有効化されているリポジトリ
- シートを使用している人が所属するOrganization
- 最新のコミット日

この情報を使って、Enterpriseのどのメンバーが{% data variables.product.prodname_advanced_security %}シートを使っているか、あるいはどのようにOrganization間で{% data variables.product.prodname_advanced_security %}ライセンスが消費されているといった、{% data variables.product.prodname_advanced_security %}ライセンスの使用状況を把握できます。

{% data variables.product.prodname_advanced_security %}ライセンス使用状況のCSVは、{% data variables.product.product_name %}のユーザインターフェース、あるいはREST APIを通じてダウンロードできます。

### UIでの{% data variables.product.prodname_advanced_security %}ライセンス使用情報のダウンロード

#### Organizationレベル

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. 「{% data variables.product.prodname_GH_advanced_security %}」の下で、"Committers（コミッター）"の隣の{% octicon "download" aria-label="The download icon" %}をクリックしてください。
  ![Organization レベル データの [ダウンロード] ボタン](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### Enterpriseレベル

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 「{% data variables.product.prodname_GH_advanced_security %}」の下で、"Commiters（コミッター）"の隣の{% octicon "download" aria-label="The download icon" %}をクリックしてください。
  ![Enterprise レベル データの [ダウンロード] ボタン](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### REST API経由の{% data variables.product.prodname_advanced_security %}ライセンス使用情報のダウンロード

支払いAPIを通じて{% data variables.product.prodname_advanced_security %}の使用情報を取得できます。

{% ifversion ghec %}

Organization レベルのデータの場合は、`/orgs/{org}/settings/billing/advanced-security` エンドポイントを使用します。 詳しくは、{% data variables.product.prodname_dotcom %} REST API ドキュメントの「[請求](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)」をご覧ください。

{% endif %}

Enterprise レベル データの場合は、`/enterprises/{enterprise}/settings/billing/advanced-security` エンドポイントを使用します。 詳しくは、{% data variables.product.prodname_dotcom %} REST API ドキュメントの「[{% data variables.product.prodname_enterprise %} の管理](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)」をご覧ください。

{% endif %}
