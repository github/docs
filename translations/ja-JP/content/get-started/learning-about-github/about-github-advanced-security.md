---
title: GitHub Advanced Security について
intro: '{% data variables.product.prodname_dotcom %} には、{% data variables.product.prodname_advanced_security %} ライセンスの下でユーザーが使用できる追加のセキュリティ機能があります。{% ifversion fpt or ghec %}これらの機能は、{% data variables.product.prodname_dotcom_the_website %} 上の公開リポジトリでも有効になります。{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: 49a58dd78c906982c8c8b9702d55cd11662cb12e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159182'
---
## {% data variables.product.prodname_GH_advanced_security %} について

{% data variables.product.prodname_dotcom %}には、コードの質を改善し維持できる多くの機能があります。 これらの一部は、依存関係グラフや {% data variables.product.prodname_dependabot_alerts %}など、すべてのプラン{% ifversion not ghae %}に含まれています{% endif %}。 それ以外のセキュリティ機能には、{% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリとは別のリポジトリで {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} ライセンスを実行する必要があります{% endif %}。

{% ifversion ghes or ghec %}{% data variables.product.prodname_GH_advanced_security %} のライセンスを購入する方法については、「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照してください。{% elsif ghae %}ベータ版リリース中、{% data variables.product.prodname_ghe_managed %} で {% data variables.product.prodname_GH_advanced_security %} に対する料金は発生しません。{% elsif fpt %}{% data variables.product.prodname_GH_advanced_security %} ライセンスを購入するには、{% data variables.product.prodname_enterprise %} を使用している必要があります。 {% data variables.product.prodname_GH_advanced_security %} を使用した {% data variables.product.prodname_enterprise %} へのアップグレードの詳細については、「[GitHub の製品](/get-started/learning-about-github/githubs-products)」および「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照してください。{% endif %}

## {% data variables.product.prodname_advanced_security %}機能について

{% data variables.product.prodname_GH_advanced_security %}のライセンスでは、以下の機能が追加されます。

- **{% data variables.product.prodname_code_scanning_capc %}** - コードで、潜在的なセキュリティの脆弱性とコーディング エラーを検索します。 詳細については、「[{% data variables.product.prodname_code_scanning %} について](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

- **{% data variables.product.prodname_secret_scanning_caps %}** - リポジトリにチェックインされているシークレット (キーやトークンなど) を検出します。{% ifversion secret-scanning-push-protection %}プッシュ保護が有効になっている場合は、シークレットがリポジトリにプッシュされたときにも検出されます。 詳細については、「[{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-scanning/about-secret-scanning)」および「[{% data variables.product.prodname_secret_scanning %}を使用したプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。{% else %}詳細については、「[{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-scanning/about-secret-scanning)」を参照してください。{% endif %}

- **依存関係の確認** プル要求をマージする前に、依存関係に対する変更の影響をすべて示し、脆弱なバージョンの詳細を表示します。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/about-dependency-review)」を参照してください。

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **セキュリティの概要** - 組織のセキュリティ構成とアラートを確認し、最もリスクの高いリポジトリを特定します。 詳細については、「[セキュリティの概要](/code-security/security-overview/about-the-security-overview)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %} 次の表は、パブリックおよびプライベート リポジトリに対する {% data variables.product.prodname_GH_advanced_security %} 機能の可用性をまとめたものです。

|                   | パブリック リポジトリ           | {% data variables.product.prodname_advanced_security %} を使用しないプライベート リポジトリ | {% data variables.product.prodname_advanced_security %} を使用するプライベート リポジトリ |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| コード スキャン     | はい                         | いいえ                                           | はい                                        |
| シークレット スキャン   | ○ **(制限された機能のみ)** | いいえ                                           | はい                                       |
| 依存関係の確認 | はい                         | いいえ                                           | はい                                       |
{% endif %}

開発中の {% data variables.product.prodname_advanced_security %} 機能の詳細については、「[{% data variables.product.prodname_dotcom %} パブリック ロードマップ](https://github.com/github/roadmap)」を参照してください。 すべてのセキュリティ機能の概要については、「[{% data variables.product.prodname_dotcom %} セキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

{% ifversion fpt or ghec %} {% data variables.product.prodname_GH_advanced_security %} 機能は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリで有効になります。 {% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_advanced_security %} を使用する組織では、プライベートおよび内部リポジトリ用のこれらの機能を追加で有効にすることができます。 {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features)をご覧ください。
{% endif %}

{% ifversion ghes or ghec or ghae %}
## エンタープライズでの GitHub Advanced Security のデプロイ

{% data variables.product.prodname_GH_advanced_security %} デプロイを概要レベルで計画するために知っておくべきことの詳細と、推奨されるロールアウト フェーズの確認については、「[{% data variables.product.prodname_GH_advanced_security %} の大規模な導入](/code-security/adopting-github-advanced-security-at-scale)」を参照してください。

{% endif %}

{% ifversion not fpt %}
## {% data variables.product.prodname_advanced_security %} 機能の有効化

{%- ifversion ghes %} この機能を使用する前に、サイト管理者が {% data variables.location.product_location %}の {% data variables.product.prodname_advanced_security %} を有効にする必要があります。 詳細については、[Advanced Security 機能の構成](/admin/configuration/configuring-advanced-security-features)に関するページを参照してください。

システムを設定すると、Organizationまたはリポジトリのレベルでこの機能を有効化または無効化することができます。

{%- elsif ghec %} パブリック リポジトリの場合、これらの機能は永続的に有効になり、コードがパブリックでなくなっているようにプロジェクトの可視性を変更した場合にのみ無効にすることができます。

他のリポジトリの場合、Enterprise アカウントのライセンスを取得すると、組織またはリポジトリ レベルでこれらの機能を有効または無効にできます。

{%- elsif ghae %} 組織またはリポジトリのレベルでこれらの機能を有効または無効にできます。
{%- endif %} 詳細については、「[組織のセキュリティと分析の設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」および「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

{% ifversion ghec or ghes %} Enterprise アカウントをお持ちの場合は、Enterprise ライセンス ページに Enterprise 全体のライセンス使用状況が表示されます。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} 使用状況の表示](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)」を参照してください。
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_advanced_security %} のスターター ワークフローについて

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

スターター ワークフローの詳細については、「[スターター ワークフローを使用した {% data variables.product.prodname_code_scanning %}の設定](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)」および「[スターター ワークフローの使用](/actions/using-workflows/using-starter-workflows)」を参照してください。

{% endif %}

{% ifversion ghec or ghes or ghae %}
## 参考資料

- 「[エンタープライズで {% data variables.product.prodname_advanced_security %} のポリシーを適用する](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)」

{% endif %} {% endif %}
