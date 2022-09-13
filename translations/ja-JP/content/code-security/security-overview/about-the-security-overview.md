---
title: セキュリティの概要について
intro: 'Organization または Team によって所有されるリポジトリのセキュリティ アラートの表示、フィルター処理、並べ替えを、一カ所で行うことができます: [セキュリティの概要] ページ。'
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
shortTitle: About security overview
ms.openlocfilehash: ac069277564d7249d36b54f218c78f33eefc3c47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881478'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## セキュリティの概要について

{% ifversion ghes or ghec or ghae %}{% elsif fpt %}Organization で {% data variables.product.prodname_ghe_cloud %} をお使いの場合は、{% endif %}セキュリティの概要を使って、{% ifversion ghes or ghec or ghae %}ご利用の {% elsif fpt %}Organization の{% endif %} セキュリティの状態を大まかに把握したり、介入が必要な問題のあるリポジトリを特定したりすることができます。 {% ifversion ghes or ghec or ghae %}ご自分の{% elsif fpt %}Organization の{% endif %}セキュリティの概要で、集約された、またはリポジトリ固有のセキュリティ情報を表示できます。 {% ifversion ghes or ghec or ghae %}ご自分で{% elsif fpt %}Organization で {% data variables.product.prodname_ghe_cloud %} をお使いの場合は、{% endif %}セキュリティの概要を使って度のセキュリティ機能が、{% ifversion ghes or ghec or ghae %}ご自分の{% elsif fpt %}Organization の{% endif %}リポジトリに対して有効になっているかを確認したり、現在は使われていないが、使うことができる機能を構成したりすることもできます。 {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)をご覧ください。{% endif %}

{% ifversion ghec or ghes or ghae %}セキュリティの概要は、{% ifversion fpt or ghes or ghec %}セキュリティ{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %} {% endif %}機能が Organization で所有されているリポジトリに対して有効になっているかどうかを示し、それぞれの機能のアラートを統合します。{% ifversion fpt or ghes or ghec %}セキュリティ機能には、{% data variables.product.prodname_GH_advanced_security %} 機能 ({% data variables.product.prodname_code_scanning %}、{% data variables.product.prodname_secret_scanning %}、{% data variables.product.prodname_dependabot_alerts %}など) が含まれます。{% endif %}{% data variables.product.prodname_GH_advanced_security %} 機能について詳しくは、「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」をご覧ください。{% ifversion fpt or ghes or ghec %}{% data variables.product.prodname_dependabot_alerts %} について詳しくは、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」をご覧ください。{% endif %}

リポジトリや Organization レベルでコードをセキュリティで保護する方法について詳しくは、「[リポジトリをセキュリティで保護する](/code-security/getting-started/securing-your-repository)」 と「[Organization をセキュリティで保護する](/code-security/getting-started/securing-your-organization)」をご覧ください。

会社のアプリケーション セキュリティ チームは、Organization のセキュリティ状態の、幅広い、または特定の分析のどちらにもセキュリティの概要を使うことができます。 たとえば、概要ページを使って、{% data variables.product.prodname_GH_advanced_security %} を Enterprise にロールアウトするときに、Organization または特定のチームによる機能の採用を監視したり、チームは、Organization 内のすべてのリポジトリで特定の種類と重大度レベルのすべてのアラートを確認したりできます。

### アラートのフィルター処理と並べ替えについて

セキュリティの概要では、Organizationや特定のリポジトリ内のセキュリティリスクを理解するために、アラートを表示、ソート、フィルタリングできます。 セキュリティのサマリーは非常に対話型であり、アラート リスク レベル、アラートの種類、機能の有効化などの修飾子に基づいて、特定のカテゴリの情報を調査できます。 複数のフィルターを適用して、関心のあるより狭い領域に焦点を当てることもできます。 たとえば、多数の{% data variables.product.prodname_dependabot_alerts %}が生じているプライベートリポジトリや、{% data variables.product.prodname_code_scanning %}アラートのないリポジトリを識別できます。 詳しくは、「[セキュリティの概要でのアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。

{% ifversion security-overview-views %}

セキュリティの概要では、各種セキュリティ アラート (Dependabot、コード スキャン、シークレット スキャン アラートなど) の専用ビューがあります。 これらのビューを使用すると、分析を特定のアラート セットに制限し、各ビューに固有のフィルターの範囲で結果をさらに絞り込むことができます。 たとえば、シークレット スキャン アラート ビューでは、`Secret type` フィルターを使用して、GitHub 個人用アクセス トークンなど、特定のシークレットのシークレット スキャン アラートのみを表示できます。 リポジトリ レベルでは、セキュリティの概要を使用して、特定のリポジトリの現在のセキュリティ状態を評価し、リポジトリでまだ使用されていない追加のセキュリティ機能を構成できます。

{% endif %}

![Organizationのセキュリティの概要](/assets/images/help/organizations/security-overview.png)

セキュリティの概要中の各リポジトリで、セキュリティ機能のそれぞれの種類のアイコンと、それぞれの種類についていくつのアラートがあるかが表示されます。 リポジトリに対してセキュリティ機能が有効になっていない場合、その機能のアイコンは淡色表示されます。さらに、リスク スコアが、コード スキャン、Dependabot、シークレット スキャン アラートに基づいて、リポジトリごとに計算されます。 このスコアはベータ版であるため、注意して使用する必要があります。 そのアルゴリズムとアプローチは変更される可能性があります。

![セキュリティの概要中のアイコン](/assets/images/help/organizations/security-overview-icons.png)

| アイコン | 意味 |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} アラート。 詳細については、「[{% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-code-scanning)」を参照してください。 |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} アラート。 詳しくは、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-security/about-secret-scanning)」をご覧ください。 |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| {% octicon "check" aria-label="Check" %} | セキュリティ機能は有効ですが、このリポジトリではアラートは発生しません。 |
| {% octicon "x" aria-label="x" %} | このリポジトリでは、セキュリティ機能はサポートされていません。 |

セキュリティの概要に、セキュリティ機能によって発生したアクティブなアラートが表示されます。 リポジトリに対してセキュリティの概要でアラートがない場合でも、検出されていないセキュリティ脆弱性やコードのエラーは存在するかもしれません。

### Organization レベルのセキュリティの概要について

Organizationのレベルでは、セキュリティの概要はOrganizationが所有するリポジトリに関する集約されたリポジトリ固有のセキュリティ情報を表示します。 Organization レベルのセキュリティ機能で情報をフィルター処理できます。

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### Enterprise レベルのセキュリティの概要について
Enterprise レベルでは、セキュリティの概要に、Enterprise の集約された、およびリポジトリ固有のセキュリティ情報が表示されます。 Enterprise が所有する、セキュリティ アラートがあるリポジトリを表示したり、すべてのセキュリティ アラートを表示したり、Enterprise 全体のセキュリティ機能固有のアラートを表示したりできます。

Organization 内の Organization の所有者とセキュリティ マネージャーも、Enterprise レベルのセキュリティの概要へのアクセスが制限されています。 表示できるのは、完全なアクセス権がある Organization のリポジトリとアラートのみです。

{% elsif fpt %}
### Enterprise レベルのセキュリティの概要について
Enterprise レベルでは、セキュリティの概要には、Enterprise の集約された、およびリポジトリ固有の情報が表示されます。 詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの、「[Enterprise レベルのセキュリティの概要について](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)」をご覧ください。
{% endif %}

### Team レベルのセキュリティの概要について
Teamレベルでは、セキュリティの概要はTeamが管理権限を持つリポジトリの固有のセキュリティ情報を表示します。 詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。
{% endif %}
