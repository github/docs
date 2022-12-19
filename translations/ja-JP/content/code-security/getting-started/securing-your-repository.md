---
title: リポジトリを保護する
intro: 'リポジトリをセキュアに保つために、いくつもの{% data variables.product.prodname_dotcom %}の機能が利用できます。'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
ms.openlocfilehash: adab3ab8944ebd4945d30d7e886d91f0a31ca545
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161184'
---
## はじめに
このガイドは、リポジトリでのセキュリティ機能の設定方法を紹介します。 リポジトリのセキュリティ設定を構成するには、リポジトリ管理者かOrganizationのオーナーでなければなりません。

セキュリティの要件はリポジトリに固有のものなので、リポジトリですべての機能を有効化する必要はないかもしれません。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

{% data reusables.advanced-security.security-feature-availability %}

## リポジトリへのアクセスの管理

リポジトリを保護するための最初の手順は、コードを表示および変更できるユーザを設定することです。 詳細については、「[リポジトリ設定の管理](/github/administering-a-repository/managing-repository-settings)」を参照してください。

リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %}[設定]** をクリックし、[危険区域] まで下にスクロールします。

- リポジトリを表示できるユーザーを変更するには、 **[可視性の変更]** をクリックします。 詳しくは、「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- リポジトリにアクセスできるユーザーを変更し、権限を調整するには、 **[アクセスの管理]** をクリックします。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)」を参照してください。{% endif %}

## セキュリティポリシーの設定

1. リポジトリのメイン ページから、 **{% octicon "shield" aria-label="The shield symbol" %} [セキュリティ]** をクリックします。
2. **[セキュリティ ポリシー]** をクリックします。
3. **[Start setup] (セットアップの開始)** をクリックします。
4. プロジェクトのサポートされているバージョンに関する情報と、脆弱性の報告方法に関する情報を追加してください。

詳細については、「[リポジトリへのセキュリティ ポリシーの追加](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。

## 依存関係グラフの管理

{% ifversion fpt or ghec %} 依存関係グラフは、すべてのパブリック リポジトリに対して自動的に生成され、プライベート リポジトリに対して有効にすることができます。 リポジトリ内のマニフェストとロック ファイルを解釈して依存関係を特定します。

1. リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %} [設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. 依存関係グラフの横にある **[有効化]** または **[無効化]** をクリックします。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

詳細については、「[ポジトリの依存関係を調べる](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」を参照してください。

## {% data variables.product.prodname_dependabot_alerts %}の管理

{% data variables.product.prodname_dotcom %} によって脆弱性のある依存関係が依存関係グラフで特定されたときに、{% data variables.product.prodname_dependabot_alerts %} が生成されます。 {% ifversion fpt or ghec %}任意のリポジトリに対して、{% data variables.product.prodname_dependabot_alerts %} を有効にすることができます。{% endif %}

{% ifversion fpt or ghec %}
1. プロファイル写真をクリックし、 **[設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. {% data variables.product.prodname_dependabot_alerts %} の横にある **[すべて有効にする]** をクリックします。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}」と「[ユーザー アカウントのセキュリティと分析設定の管理](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}」を参照してください。

## 依存関係レビューの管理

依存関係レビューを使うと、Pull Requestがリポジトリにマージされる前に、Pull Request内での依存関係の変化を可視化できます。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。

依存関係レビューは {% data variables.product.prodname_GH_advanced_security %} 機能です。 {% ifversion fpt or ghec %}依存関係レビューは、すべてのパブリック リポジトリに対して既に有効になっています。 {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_advanced_security %} を使用する Organization では、プライベートおよび内部リポジトリの依存関係レビューを追加で有効にすることができます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review)を参照してください。 {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}{% ifversion ghec %}プライベートまたは内部 {% endif %}リポジトリに対して依存関係レビューを有効にするには、依存関係グラフが有効になっていることを確かめ、{% data variables.product.prodname_GH_advanced_security %} を有効にします。 

1. リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %}[設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. {% ifversion ghec %}依存関係グラフがまだ有効になっていない場合は、 **[有効化]** をクリックします。{% elsif ghes or ghae %}依存関係グラフが Enterprise 用に構成されていることを確認します。{% endif %}
4. まだ {% data variables.product.prodname_GH_advanced_security %} が有効になっていない場合は、 **[有効化]** をクリックします。

{% endif %}

{% ifversion fpt or ghec or ghes %}

## {% data variables.product.prodname_dependabot_security_updates %}の管理

{% data variables.product.prodname_dependabot_alerts %}を使用するリポジトリでは、{% data variables.product.prodname_dependabot_security_updates %}を有効化して脆弱性が検出された際にセキュリティ更新でPull Requestを発行させることができます。

1. リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %}[設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. {% data variables.product.prodname_dependabot_security_updates %} の横にある **[有効化]** をクリックします。

詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/about-dependabot-security-updates)」と[「{% data variables.product.prodname_dependabot_security_updates %} の構成](/code-security/supply-chain-security/configuring-dependabot-security-updates)」を参照してください。

## {% data variables.product.prodname_dependabot_version_updates %}の管理

{% data variables.product.prodname_dependabot %}を有効化して、依存関係を最新の状態に保つためのPull Requestを自動的に発行するようにできます。 詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/code-security/supply-chain-security/about-dependabot-version-updates)」を参照してください。

{% ifversion dependabot-settings-update-37 %}
1. リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %} [設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. {% data variables.product.prodname_dependabot_version_updates %} の横にある **[有効]** をクリックして、基本的な *dependabot.yml* 構成ファイルを作成します。
4. 依存関係を指定してファイルを更新し、リポジトリにコミットします。 詳しくは、「[Dependabot のバージョン アップデートの設定](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)」をご覧ください。

{% else %}{% data variables.product.prodname_dependabot_version_updates %} を有効にするには、*dependabot.yml* 構成ファイルを作成する必要があります。 詳細については、「[{% data variables.product.prodname_dependabot %} バージョンの更新の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。
{% endif %}

{% endif %}

## {% data variables.product.prodname_code_scanning %} の構成

{% data variables.code-scanning.codeql_workflow %}またはサードパーティ ツールを使ってリポジトリ内に格納されているコードの脆弱性とエラーを自動的に特定するように {% data variables.product.prodname_code_scanning %} を設定できます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data variables.product.prodname_code_scanning_capc %} は、{% ifversion fpt or ghec %}すべてのパブリック リポジトリで使用可能です。また、{% data variables.product.prodname_GH_advanced_security %} {% else %}を Enterprise で使用する場合は Organization 所有のリポジトリ{% endif %} に対するライセンスを持つ Enterprise の一部である Organization が所有するプライベート リポジトリで使用可能です。

## {% data variables.product.prodname_secret_scanning %}の設定

{% data variables.product.prodname_secret_scanning_caps %} は、{% ifversion fpt or ghec %}すべてのパブリック リポジトリに対して有効になっており、{% data variables.product.prodname_GH_advanced_security %} {% else %}を Enterprise で使用する場合は Organization 所有のリポジトリ{% endif %} に対するライセンスを持つ Enterprise の一部である Organization が所有するプライベート リポジトリで使用可能です。 {% ifversion fpt %}詳細については、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning)を参照してください。{% else %}組織の設定によっては、リポジトリに対して {% data variables.product.prodname_secret_scanning_caps %} が既に有効になっている場合があります。

1. リポジトリのメイン ページから、 **{% octicon "gear" aria-label="The Settings gear" %}[設定]** をクリックします。
2. **[セキュリティと分析]** をクリックします。
3. まだ {% data variables.product.prodname_GH_advanced_security %} が有効になっていない場合は、 **[有効化]** をクリックします。
4. {% data variables.product.prodname_secret_scanning_caps %} の横にある **[有効化]** をクリックします。 {% endif %}

## 次の手順
セキュリティの機能からのアラートを表示及び管理して、コード中の依存関係と脆弱性に対処できます。 詳しくは、{% ifversion fpt or ghes or ghec %}「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」、{% endif %}{% ifversion fpt or ghec or ghes %}「[依存関係の更新に関する Pull Request を管理する](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)」、{% endif %}「[リポジトリの {% data variables.product.prodname_code_scanning %} を管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/code-security/secret-security/managing-alerts-from-secret-scanning)」をご覧ください。

{% ifversion fpt or ghec %}セキュリティの脆弱性があるなら、セキュリティ アドバイザリを作成して非公開で議論し、脆弱性を修正できます。 詳細については、「[リポジトリ セキュリティ アドバイザリについて](/code-security/security-advisories/about-github-security-advisories)」と「[セキュリティ アドバイザリを作成する](/code-security/security-advisories/creating-a-security-advisory)」を参照してください。
{% endif %}
