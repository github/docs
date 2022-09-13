---
title: Enterprise アカウントのプランおよび利用状況を表示する
intro: '{% ifversion ghec %}Enterpriseアカウント{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}の現在の{% ifversion ghec %}プラン、{% endif %}ライセンスの利用状況{% ifversion ghec %}、請求書、支払い履歴、その他の支払い情報{% endif %}を見ることができます。'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: 503f870542180cfe9ae088a161370b9370d36f1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145189639'
---
## Enterprise アカウントの支払いについて

{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %} 上の{% ifversion ghec %}ご自分の{% elsif ghes %}{% endif %}エンタープライズ アカウントの{% ifversion ghec %}サブスクリプションと有料の{% elsif ghes %}ライセンスの{% endif %}利用状況の概要を見ることができます。{% ifversion ghec %}{% data reusables.enterprise.create-an-enterprise-account %} 詳細については、「[エンタープライズ アカウントの作成](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)」を参照してください。{% endif %}

{% ifversion ghes %}{% data variables.product.prodname_ghe_cloud %}と{% data variables.product.prodname_ghe_server %}の両方を使う{% endif %}請求書払いの{% data variables.product.prodname_enterprise %}お客様については、それぞれの請求書にはすべての製品の有料サービスに関する詳細が含まれます。 たとえば{% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}の利用状況に加えて、{% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}、{% elsif ghes %}の利用状況もあるかもしれません。 {% data variables.product.prodname_dotcom_the_website %}の利用状況もあるかもしれません。たとえば{% endif %}Enterpriseアカウント外のOrganizationの有料ライセンス、{% data variables.large_files.product_name_long %}のデータパック、{% data variables.product.prodname_marketplace %}のアプリケーションのサブスクリプションの利用状況もあるかもしれません。 請求書の詳細については、「[Enterprise の請求書管理]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %}」{% elsif ghes %}」 ({% data variables.product.prodname_dotcom_the_website %} ドキュメント内) {% endif %}を参照してください。

{% ifversion ghec %}

Enterpriseオーナーに加えて、支払いマネージャーはプランとEnterpriseアカウントの利用状況を見ることができます。 詳細については、「[Enterprise におけるロール](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager)」と「[Enterprise を管理するようユーザーを招待する](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghes %}

{% data variables.product.prodname_enterprise %} と {% data variables.product.prodname_dotcom_the_website %} の関連サービスのプランと利用状況の概要を表示する場合は、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Enterprise アカウントのプランおよび利用状況を表示する](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

{% endif %}

## Enterprise アカウントのプランおよび利用状況を表示する

Enterpriseのプランと利用状況を表示し、ライセンスの詳細を含むファイルをダウンロードできます。

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. [User licenses] の下に、合計ライセンス数、消費ライセンス数、プランの有効期限が表示されます。
  {% ifversion ghec %}![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. あるいは、ライセンスの利用状況の詳細を表示するか、ライセンスの詳細を含む{% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %}ファイルをダウンロードするには、{% ifversion ghec %}[ユーザー ライセンス] の右の{% endif %} **[{% ifversion ghec %}詳細{% elsif ghes %}ユーザー{% endif %}の表示]** または {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %} **[ライセンス利用状況のエクスポート]** {% endif %} をクリックしてください。{% ifversion ghec %} ![[詳細の表示] ボタンと [ユーザー ライセンス] の右のダウンロード アイコンの付いたボタン](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. 必要に応じて、他の機能の使用状況の詳細を表示するには、左サイド バーで **[請求]** をクリックします。
  ![Enterprise アカウント設定のサイド ーの [課金] タブ](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}
