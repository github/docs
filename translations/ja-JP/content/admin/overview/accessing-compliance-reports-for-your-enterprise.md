---
title: エンタープライズのコンプライアンス レポートへのアクセス
intro: 'Enterprise に関する SOC レポートや Cloud Security Alliance CAIQ セルフアセスメント (CSA CAIQ) などの、{% data variables.product.company_short %} のコンプライアンス レポートにアクセスできます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Enterprise owners can access compliance reports for the enterprise.
shortTitle: Access compliance reports
ms.openlocfilehash: d9391e9bb029620ee9c034a5ad3092588e914c36
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008669'
---
## {% data variables.product.company_short %}のコンプライアンスレポートについて

エンタープライズ設定で {% data variables.product.company_short %} のコンプライアンス レポートにアクセスできます。

{% data reusables.security.compliance-report-list %}

## エンタープライズのコンプライアンス レポートへのアクセス

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. [リソース] で、アクセスするレポートの右側にある {% octicon "download" aria-label="The Download icon" %} **[ダウンロード]** または {% octicon "link-external" aria-label="The external link icon" %} **[表示]** をクリックします。

   {% data reusables.security.compliance-report-screenshot %}

## 参考資料

- [Organization のコンプライアンス レポートにアクセスする](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization){% ifversion enterprise-member-csv %}
- [Enterprise のメンバーシップ情報をエクスポートする](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise){% endif %}
