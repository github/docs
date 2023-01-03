---
title: Codespacesの使用状況の表示
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_codespaces %}によるコンピュートの分とストレージを見ることができます。'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Billing
ms.openlocfilehash: 025b93aca321b381989a55389ff93fac3cef02c2
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062035"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>組織の {% data variables.product.prodname_codespaces %} の使用状況を表示する

組織については、組織所有者と支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用状況を管理できます。 Enterpriseアカウントが管理しているOrganizationでは、OrganizationのオーナーはOrganizationの支払いページで{% data variables.product.prodname_codespaces %}の使用状況を見ることができ、Enterpriseの管理者はEnterprise全体の使用状況を見ることができます。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>エンタープライズ アカウントの {% data variables.product.prodname_codespaces %} の使用状況を表示する

エンタープライズ アカウントについては、エンタープライズ所有者と支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用状況を確認できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 「{% data variables.product.prodname_codespaces %}」の下で、Enterpriseアカウント内の各Organizationの使用状況の詳細を見ます。
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
