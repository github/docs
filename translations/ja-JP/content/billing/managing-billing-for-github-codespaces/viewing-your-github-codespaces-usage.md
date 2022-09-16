---
title: GitHub Codespaces の使用状況の表示
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_github_codespaces %}によるコンピュートの分とストレージを見ることができます。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 59c7baf22070f534ea42ddde561a4b739a01fed1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147865162'
---
## 組織の {% data variables.product.prodname_github_codespaces %} の使用状況を表示する

組織については、組織所有者と支払いマネージャーが {% data variables.product.prodname_github_codespaces %} の使用状況を管理できます。 Enterpriseアカウントが管理しているOrganizationでは、OrganizationのオーナーはOrganizationの支払いページで{% data variables.product.prodname_codespaces %}の使用状況を見ることができ、Enterpriseの管理者はEnterprise全体の使用状況を見ることができます。

{% data reusables.organizations.billing-settings %}
1. [{% data variables.product.prodname_codespaces %}] で、今月これまでに使用されたコンピューティング時間とストレージについて詳しく説明します。
  ![分単位の使用状況の詳しい内容](/assets/images/help/billing/codespaces-compute-storage.png) {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. `Product` フィールドで "Codespaces" に言及している行のみが表示されるように、レポートをフィルター処理します。

   ![Codespaces でフィルター処理された使用状況レポート](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} の使用状況を表示する

エンタープライズ アカウントについては、エンタープライズ所有者と支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用状況を確認できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 「{% data variables.product.prodname_codespaces %}」の下で、Enterpriseアカウント内の各Organizationの使用状況の詳細を見ます。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
