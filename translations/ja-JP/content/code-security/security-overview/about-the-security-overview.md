---
title: セキュリティの概要について
intro: セキュリティの概要ページでは、組織またはチームが所有しているリポジトリのセキュリティ アラートの表示、フィルター処理、並べ替えを行うことができます。
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163753'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## セキュリティの概要について

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)をご覧ください。{% endif %}

{% ifversion ghec or ghes or ghae %}セキュリティの概要には、リポジトリに対してどのセキュリティ機能が有効になっているかが表示され、各機能のアラートを統合できます。 

- {% data variables.product.prodname_dependabot %} の機能とアラートに関するリスクとカバレッジの情報は、すべてのリポジトリに対して表示されます。 
- {% data variables.product.prodname_GH_advanced_security %} 機能 ({% data variables.product.prodname_code_scanning %} や {% data variables.product.prodname_secret_scanning %} など) のリスクとカバレッジの情報は、{% data variables.product.prodname_GH_advanced_security %} を使用するエンタープライズに対してのみ表示されます。

詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」と「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」を参照してください。

## アラートのフィルター処理と並べ替えについて

セキュリティの概要は、リポジトリのグループに関するセキュリティを把握するための強力な方法を提供します。 そのビューは対話型であり、フィルターを使って集計データを詳しく調べ、高いリスクや低い機能カバレッジのソースを特定できます。 複数のフィルターを適用してより狭い対象領域に絞り込むと、選択内容を反映してビュー全体のデータが変更されます。 詳しくは、「[セキュリティの概要でのアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。

{% ifversion security-overview-alert-views %}また、セキュリティ アラートの種類ごとに専用のビューもあります。これを使うと、分析対象を特定のアラート セットに制限してから、各ビューに固有のさまざまなフィルターを使って結果をさらに絞り込むことができます。 たとえば、{% data variables.product.prodname_secret_scanning %} アラート ビューでは、`Secret type` フィルターを使って、GitHub {% data variables.product.pat_generic %} など、特定のシークレットの {% data variables.product.prodname_secret_scanning %} アラートのみを表示できます。
{% endif %}

{% note %}

**注:** セキュリティの概要には、セキュリティ機能によって発生したアクティブなアラートが表示されます。 リポジトリに対してセキュリティの概要でアラートがない場合でも、検出されていないセキュリティ脆弱性やコードのエラーは存在するかもしれません。

{% endnote %}

## Organization レベルのセキュリティの概要について

{% data reusables.security-overview.beta-org-risk-coverage %}

セキュリティの概要は、エンタープライズが所有するすべての組織の **[Security]** タブにあります。 各ビューには、ドリルダウンできる集計データが表示されます。各フィルターを追加すると、選択したリポジトリやアラートを反映するようにデータが更新されます。

会社のアプリケーション セキュリティ チームでは、さまざまなビューを使って、組織のセキュリティの状態を幅広く分析することも、限定的に分析することもできます。 {% ifversion security-overview-org-risk-coverage %}たとえば、{% data variables.product.prodname_GH_advanced_security %} をロールアウトするときに、チームで [Security Coverage] ページを使って組織全体または特定のチームによる機能の導入を監視したり、[Security Risk] ページを使って {% data variables.product.prodname_secret_scanning %} のオープン アラートが 5 個よりも多いリポジトリを特定したりできます。{% else %}たとえば、エンタープライズに {% data variables.product.prodname_GH_advanced_security %} をロールアウトするときに、概要ページを使って組織または特定のチームによる機能の導入を監視したり、組織内の全リポジトリにわたって特定の種類や重大度レベルを持つすべてのアラートを確認したりできます。{% endif %}

組織の所有者と組織のセキュリティ マネージャーは、自分の組織に関するセキュリティの概要にアクセスできます。 {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}組織メンバーは、組織レベルのセキュリティの概要にアクセスして、自身が管理特権を持つ、またはセキュリティ アラートへのアクセス権が付与されているリポジトリの結果を表示することもできます。 セキュリティ アラートのアクセス管理の詳細については、「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。{% endif %}

{% ifversion security-overview-org-risk-coverage %}
### [Security Risk] ビュー

このビューには、さまざまな種類のセキュリティ アラートによって影響を受けるリポジトリに関するデータが表示されます。 

- **[Type]** と **[Teams]** ドロップダウンを使って、リポジトリの種類とチームのフィルターを追加します。
- **[Open alerts]** または **[Repositories affected]** をクリックすると、特定の種類のセキュリティ アラートを持つリポジトリのみが表示されます。

さらに、検索ボックスをクリックすると、使用可能なフィルターの完全なセットが一覧表示されます。

![組織の [Security Risk] ビューのスクリーンショット](/assets/images/help/security-overview/security-risk-view.png)

### [Security Coverage] ビュー

このビューには、セキュリティ機能を使用しているリポジトリに関するデータが表示されます。 

- **[Type]** と **[Teams]** ドロップダウンを使って、リポジトリの種類とチームのフィルターを追加します。
- ヘッダーに表示されている **[Alerts enabled]** やその他の機能をクリックすると、それらの機能が有効になっているリポジトリのみが表示されます。
- 検索ボックスで任意の `FEATURE:enabled` フィルターを `FEATURE:not-enabled` に変更すると、機能を有効にしていないリポジトリが表示されます。
- すべてのリポジトリについて、省略記号 ( **[...]** )、 **[Security Settings]** の順にクリックすると、追加の機能を有効にできます。

さらに、検索ボックスをクリックすると、使用可能なフィルターの完全なセットが一覧表示されます。

![組織の [Security Coverage] ビューのスクリーンショット](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### 主なセキュリティの概要について

![組織のセキュリティの概要のスクリーンショット](/assets/images/help/security-overview/security-overview-org-legacy.png)

セキュリティの概要中の各リポジトリで、セキュリティ機能のそれぞれの種類のアイコンと、それぞれの種類についていくつのアラートがあるかが表示されます。 リポジトリに対してセキュリティ機能が有効になっていない場合、その機能のアイコンは淡色表示されます。さらに、リスク スコアが、コード スキャン、Dependabot、シークレット スキャン アラートに基づいて、リポジトリごとに計算されます。 このスコアはベータ版であるため、注意して使用する必要があります。 そのアルゴリズムとアプローチは変更される可能性があります。

![セキュリティの概要中のアイコン](/assets/images/help/security-overview/security-overview-icons.png)

| アイコン | 意味 |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} アラート。 詳細については、「[{% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-code-scanning)」を参照してください。 |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} アラート。 詳しくは、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」をご覧ください。 |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| {% octicon "check" aria-label="Check" %} | セキュリティ機能は有効ですが、このリポジトリではアラートは発生しません。 |
| {% octicon "x" aria-label="x" %} | このリポジトリでは、セキュリティ機能はサポートされていません。 |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Enterprise レベルのセキュリティの概要について

セキュリティの概要は、エンタープライズの **[Code Security]** タブにあります。 それぞれの概要には、エンタープライズについての集計された、リポジトリ固有のセキュリティ情報が表示されます。 Enterprise が所有する、セキュリティ アラートがあるリポジトリを表示したり、すべてのセキュリティ アラートを表示したり、Enterprise 全体のセキュリティ機能固有のアラートを表示したりできます。

エンタープライズ所有者は、自身が所有者またはセキュリティ マネージャーである組織のアラートを表示できます。{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %}エンタープライズ所有者は、組織の所有者として組織に参加し、エンタープライズレベルのセキュリティの概要でそのすべてのアラートを表示できます。 詳細については、「[エンタープライズが所有する組織でのロールの管理](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。{% endif %}

エンタープライズにおける組織の所有者と組織のセキュリティ マネージャーは、エンタープライズレベルのセキュリティの概要にアクセスできます。 フル アクセス権が付与されている組織のリポジトリとアラートを表示できます。
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Team レベルのセキュリティの概要について

セキュリティの概要は、エンタープライズが所有する組織のすべてのチームの **[Security]** タブにあります。

Teamレベルでは、セキュリティの概要はTeamが管理権限を持つリポジトリの固有のセキュリティ情報を表示します。 詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。
{% endif %}

## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」
- [組織のセキュリティ保護](/code-security/getting-started/securing-your-organization)
- [大規模な GitHub Advanced Security の導入の概要](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale) {% endif %}
