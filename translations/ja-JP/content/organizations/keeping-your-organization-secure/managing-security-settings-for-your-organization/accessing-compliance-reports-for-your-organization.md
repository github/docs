---
title: Organizationのコンプライアンスレポートへのアクセス
intro: '自分のOrganizationに関するSOCレポートやCloud Security Alliance CAIQセルフアセスメント（CSA CAIQ）などの、{% data variables.product.company_short %}のコンプライアンスレポートにアクセスできます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Access compliance reports
ms.openlocfilehash: fd195f8d15e89cf3e1ff9b76ce258d736ffc068f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060403'
---
## {% data variables.product.company_short %}のコンプライアンスレポートについて

Organizationの設定から、{% data variables.product.company_short %}のコンプライアンスレポートにアクセスできます。

{% data reusables.security.compliance-report-list %}


{% note %}

**注:** コンプライアンス レポートを表示するには、Organization で {% data variables.product.prodname_ghe_cloud %} を使用している必要があります。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Organizationのコンプライアンスレポートへのアクセス

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [コンプライアンス レポート] で、アクセスするレポートの右側にある {% octicon "download" aria-label="The Download icon" %} **[ダウンロード]** または {% octicon "link-external" aria-label="The external link icon" %} **[表示]** をクリックします。

   {% data reusables.security.compliance-report-screenshot %}

## 参考資料

- 「[エンタープライズのコンプライアンス レポートへのアクセス](/admin/overview/accessing-compliance-reports-for-your-enterprise)」
