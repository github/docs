---
title: GitHub セキュリティ機能
intro: '{% data variables.product.prodname_dotcom %}のセキュリティ機能の概要。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: ccd17816c0e5f62666520a677862c2a9f108c742
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158734'
---
## {% data variables.product.prodname_dotcom %}のセキュリティ機能について

{% data variables.product.prodname_dotcom %}は、リポジトリ内及びOrganizationに渡ってコードとシークレットをセキュアに保つのに役立つ機能があります。 {% data reusables.advanced-security.security-feature-availability %}

{% data variables.product.prodname_advisory_database %}には、表示、検索、フィルタできる精選されたセキュリティ脆弱性のリストが含まれます。 {% data reusables.security-advisory.link-browsing-advisory-db %}

## すべてのリポジトリで使用可能
### セキュリティ ポリシー

リポジトリで見つけたセキュリティの脆弱性を、ユーザが内密に報告しやすくします。 詳細については、「[リポジトリへのセキュリティ ポリシーの追加](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。

{% ifversion fpt or ghec %}
### セキュリティ アドバイザリ

リポジトリのコードのセキュリティの脆弱性について、非公開で議論して修正します。 その後、セキュリティアドバイザリを公開して、コミュニティに脆弱性を警告し、アップグレードするようコミュニティメンバーに促すことができます。 詳細については、「[リポジトリ セキュリティ アドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} およびセキュリティアップデート

セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、プルリクエストを自動的に生成してこれらの依存関係を更新するかどうかを選択します。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」と「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、それらのアラートを管理します。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### {% data variables.product.prodname_dependabot %} バージョンアップデート

{% data variables.product.prodname_dependabot %}を使って、依存関係を最新に保つためのPull Requestを自動的に発行してください。 これは、依存関係の古いバージョンの公開を減らすために役立ちます。 新しいバージョンを使用すると、セキュリティの脆弱性が発見された場合にパッチの適用が容易になり、さらに脆弱性のある依存関係を更新するため {% data variables.product.prodname_dependabot_security_updates %} がプルリクエストを発行することも容易になります。 詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。
{% endif %}

### 依存関係グラフ
依存関係グラフを使うと、自分のリポジトリが依存しているエコシステムやパッケージ、そして自分のリポジトリに依存しているリポジトリやパッケージを調べることができます。

依存関係グラフは、リポジトリの **[分析情報]** タブにあります。 詳細については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% ifversion security-overview-displayed-alerts %}
### セキュリティの概要

セキュリティの概要を使用すると、セキュリティ構成とアラートを確認できるため、最もリスクの高いリポジトリと組織を簡単に特定できます。 詳細については、「[セキュリティの概要](/code-security/security-overview/about-the-security-overview)」を参照してください。

{% else %}
### リポジトリのセキュリティの概要
セキュリティの概要には、リポジトリに対して有効になっているセキュリティ機能が示され、まだ有効になっていない使用可能なセキュリティ機能を構成するオプションが表示されます。
{% endif %}

## {% data variables.product.prodname_GH_advanced_security %} で使用可能

{% ifversion fpt %} 次の {% data variables.product.prodname_GH_advanced_security %} 機能は、{% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリで無料で利用できます。 {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ {% data variables.product.prodname_ghe_cloud %} を使用する組織は、任意のリポジトリで機能の完全なセットを使用できます。 {% data variables.product.prodname_ghe_cloud %} で使用できる機能の一覧については、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security)を参照してください。

{% elsif ghec %} 多くの {% data variables.product.prodname_GH_advanced_security %} 機能は、{% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリで無料で利用できます。 {% data variables.product.prodname_GH_advanced_security %} ライセンスを持つエンタープライズ内の組織は、すべてのリポジトリで次の機能を使用できます。 {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} {% data variables.product.prodname_GH_advanced_security %} 機能は、{% data variables.product.prodname_GH_advanced_security %} ライセンスを持つエンタープライズで使用できます。 機能は、組織が所有するリポジトリに制限されます。 {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} {% data variables.product.prodname_GH_advanced_security %} 機能は、組織が所有するリポジトリで使用できます。 {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

新しいコードまたは変更されたコードのセキュリティの脆弱性とコーディングエラーを自動的に検出します。 潜在的な問題が強調表示され、あわせて詳細情報も確認できるため、デフォルトのブランチにマージする前にコードを修正できます。 詳細については、「[コード スキャンについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

すべてのパブリック リポジトリで漏洩したシークレットを自動的に検出します。 {% data variables.product.company_short %} は、シークレットが侵害される可能性があることを関連するサービス プロバイダーに通知します。 サポートされているシークレットとサービス プロバイダーの詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} {% data variables.product.prodname_GH_advanced_security %} のライセンスでのみ使用できます。
{% endif %}

リポジトリにチェックインされたトークンまたは資格情報を自動的に検出します。 {% data variables.product.company_short %} がコード内で検出したシークレットのアラートを表示して、侵害されたトークンまたは資格情報を認識できます。 詳細については、「[シークレット スキャンについて](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)」を参照してください。
{% endif %}

### 依存関係の確認

Pull Requestをマージする前に、依存関係に対する変更の影響を詳細に示し、脆弱なバージョンがあればその詳細を確認できます。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/about-dependency-review)」を参照してください。

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Organization{% ifversion ghes > 3.4 or ghae > 3.4 %}、Enterprise、{% endif %}チームのセキュリティの概要

組織のセキュリティ構成とアラートを確認し、最もリスクの高いリポジトリを特定します。 詳細については、「[セキュリティの概要](/code-security/security-overview/about-the-security-overview)」を参照してください。
{% endif %}

## 参考資料
- 「[{% data variables.product.prodname_dotcom %} の製品](/github/getting-started-with-github/githubs-products)
- 「[{% data variables.product.prodname_dotcom %} 言語のサポート](/github/getting-started-with-github/github-language-support)
