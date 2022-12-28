---
title: 組織のセキュリティ保護
intro: 'Organizationをセキュアに保つために、いくつもの{% data variables.product.prodname_dotcom %}の機能が利用できます。'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: e64af58fa5ea802b92df20751f2648097ebedf62
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159030'
---
## はじめに
このガイドは、Organizationでのセキュリティ機能の設定方法を紹介します。 Organizationのセキュリティの要件は固有のものであり、すべてのセキュリティの機能を有効化する必要はないかもしれません。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

{% data reusables.advanced-security.security-feature-availability %}

## Organizationへのアクセス管理

ロールを使って、個人が組織内で実行できるアクションを制御できます。 {% ifversion security-managers %}たとえば、チームにセキュリティ マネージャー ロールを割り当てて、Organization 全体のセキュリティ設定を管理する権限と、すべてのリポジトリの読み取りアクセス権を付与できます。{% endif %}詳しくは、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」をご覧ください。

{% ifversion fpt or ghes or ghec %}

## デフォルトのセキュリティポリシーの作成

独自のセキュリティポリシーを持たないOrganization内のパブリックリポジトリで表示される、デフォルトのセキュリティポリシーを作成できます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}及び依存関係グラフの管理

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} によって、パブリック リポジトリ内の脆弱性が検出され、依存関係グラフに表示されます。 組織が所有するすべてのパブリック リポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効または無効にすることができます。 組織が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_alerts %}と依存関係グラフを有効または無効にすることができます。

1. プロファイル画像をクリックし、 **[Organizations]\(組織\)** をクリックします。
2. 組織の横にある **[Settings]\(設定\)** をクリックします。
3. **[セキュリティと分析]** をクリックします。
4. 管理する機能の横にある **[Enable all]\(すべて有効にする\)** または **[Disable all]\(すべて無効にする\)** をクリックします。
5. 必要に応じて、 **[Automatically enable for new repositories]\(新しいリポジトリに対して自動的に有効にする\)** を選びます。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」、「[リポジトリの依存関係の調査](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」、「[組織のセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

## 依存関係レビューの管理

依存関係レビューとは、{% data variables.product.prodname_advanced_security %} の機能であり、pull request の依存関係の変更をリポジトリにマージする前に視覚化することができます。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。

{% ifversion fpt or ghec %}依存関係レビューは、すべてのパブリック リポジトリに対して既に有効になっています。 {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_advanced_security %} を使用する Organization では、プライベートおよび内部リポジトリの依存関係レビューを追加で有効にすることができます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review)を参照してください。 {% endif %}{% endif %}{% ifversion ghec %}組織が所有するプライベートと内部のリポジトリの場合、依存関係レビューを有効にするには、依存関係グラフを有効にし、{% data variables.product.prodname_advanced_security %} を有効にします (以下を参照してください)。 {% elsif ghes or ghae %}依存関係のレビューは、{% data variables.location.product_location %} の依存関係グラフが有効にされていて、ユーザーが Organization の {% data variables.product.prodname_advanced_security %} を有効にした場合に、使用できます (下記を参照してください)。{% endif %}

{% ifversion fpt or ghec or ghes %}
## {% data variables.product.prodname_dependabot_security_updates %}の管理

{% data variables.product.prodname_dependabot_alerts %}を使用するリポジトリでは、{% data variables.product.prodname_dependabot_security_updates %}を有効化して脆弱性が検出された際にセキュリティ更新でPull Requestを発行させることができます。 Organization全体で、すべてのリポジトリで{% data variables.product.prodname_dependabot_security_updates %}を有効化あるいは無効化することもできます。

1. プロファイル画像をクリックし、 **[Organizations]\(組織\)** をクリックします。
2. 組織の横にある **[Settings]\(設定\)** をクリックします。
3. **[セキュリティと分析]** をクリックします。
4. {% data variables.product.prodname_dependabot_security_updates %} の横にある **[Enable all]\(すべて有効にする\)** または **[Disable all]\(すべて無効にする\)** をクリックします。
5. 必要に応じて、 **[Automatically enable for new repositories]\(新しいリポジトリに対して自動的に有効にする\)** を選びます。 

詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/about-dependabot-security-updates)」と「[組織のセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

## {% data variables.product.prodname_dependabot_version_updates %}の管理

{% data variables.product.prodname_dependabot %}を有効化して、依存関係を最新の状態に保つためのPull Requestを自動的に発行するようにできます。 詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/code-security/supply-chain-security/about-dependabot-version-updates)」を参照してください。

{% data variables.product.prodname_dependabot_version_updates %} を有効にするには、*dependabot.yml* 構成ファイルを作成する必要があります。 詳細については、「[{% data variables.product.prodname_dependabot %} バージョンの更新の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

{% endif %}

{% ifversion ghes or ghae or ghec %}
## {% data variables.product.prodname_GH_advanced_security %}の管理

{% ifversion ghes or ghec %}{% data variables.product.prodname_advanced_security %} ライセンスを持つ{% ifversion ghec %}エンタープライズが所有する組織{% else %}エンタープライズ{% endif %}である場合、{% data variables.product.prodname_advanced_security %} 機能を有効または無効にすることができます。
{% elsif ghae %}{% data variables.product.prodname_advanced_security %} 機能を有効または無効にすることができます。
{% endif %}

1. プロファイル画像をクリックし、 **[Organizations]\(組織\)** をクリックします。
2. 組織の横にある **[Settings]\(設定\)** をクリックします。
3. **[セキュリティと分析]** をクリックします。
4. {% data variables.product.prodname_GH_advanced_security %} の横にある **[Enable all]\(すべて有効にする\)** または **[Disable all]\(すべて無効にする\)** をクリックします。
5. 必要に応じて、 **[Automatically enable for new private repositories]\(新しいプライベート リポジトリに対して自動的に有効にする\)** を選びます。 

詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」と「[組織のセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
{% endif %}
## {% data variables.product.prodname_secret_scanning %}の設定

{% data variables.product.prodname_secret_scanning_caps %} は、安全に格納されていないシークレットのリポジトリをスキャンする {% data variables.product.prodname_advanced_security %} の機能です。

{% ifversion fpt or ghec %}{% data variables.product.prodname_secret_scanning_caps %} は、すべてのパブリック リポジトリに対して既に有効になっています。 {% data variables.product.prodname_ghe_cloud %} を {% data variables.product.prodname_advanced_security %} と共に使っている組織は、プライベートと内部のリポジトリに対して、さらに {% data variables.product.prodname_secret_scanning %} を有効にすることができます。{% endif %}{% ifversion fpt %}詳細については、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning)を参照してください。 {% endif %}

{% ifversion ghes or ghae %}エンタープライズが {% data variables.product.prodname_advanced_security %} を使っている場合、{% data variables.product.prodname_secret_scanning_caps %} を使用できます。{% endif %}

{% ifversion not fpt %}{% data variables.product.prodname_advanced_security %}が有効である組織のすべてのリポジトリに対して、{% data variables.product.prodname_secret_scanning %} を有効または無効にすることができます。

1. プロファイル画像をクリックし、 **[Organizations]\(組織\)** をクリックします。
2. 組織の横にある **[Settings]\(設定\)** をクリックします。
3. **[セキュリティと分析]** をクリックします。
4. {% data variables.product.prodname_secret_scanning_caps %} の横にある **[Enable all]\(すべて有効にする\)** または **[Disable all]\(すべて無効にする\)** をクリックします ({% data variables.product.prodname_GH_advanced_security %} リポジトリのみ)。
5. 必要に応じて、 **[Automatically enable for private repositories added to {% data variables.product.prodname_advanced_security %}]\(Advanced Security に追加されたプライベート リポジトリに対して自動的に有効にする\)** を選びます。 

詳細については、「[Managing security and analysis settings for your organization (組織のセキュリティと分析の設定を管理する)](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。
{% endif %}

## {% data variables.product.prodname_code_scanning %} の構成

{% data variables.product.prodname_code_scanning_capc %} は、コードでセキュリティの脆弱性とエラーをスキャンする {% data variables.product.prodname_advanced_security %} の機能です。

{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} は、すべてのパブリック リポジトリに使用できます。 {% data variables.product.prodname_ghe_cloud %} を {% data variables.product.prodname_advanced_security %} と共に使っている組織は、プライベートと内部のリポジトリに対して {% data variables.product.prodname_code_scanning %} をさらに有効にすることができます。{% else %}{% data variables.product.prodname_code_scanning_capc %} は、エンタープライズが {% data variables.product.prodname_advanced_security %} を使っている場合に使用できます。{% endif %}

{% data variables.product.prodname_code_scanning_capc %} はリポジトリ レベルで構成されます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

## 次の手順
セキュリティの機能からのアラートを表示及び管理して、コード中の依存関係と脆弱性に対処できます。 詳しくは、{% ifversion fpt or ghes or ghec %}「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」、{% endif %}{% ifversion fpt or ghec or ghes %}「[依存関係の更新に関する Pull Request を管理する](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)」、{% endif %}「[リポジトリの {% data variables.product.prodname_code_scanning %} を管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/code-security/secret-security/managing-alerts-from-secret-scanning)」をご覧ください。

{% ifversion fpt or ghec %}セキュリティの脆弱性があるなら、セキュリティ アドバイザリを作成して非公開で議論し、脆弱性を修正できます。 詳細については、「[リポジトリ セキュリティ アドバイザリについて](/code-security/security-advisories/about-github-security-advisories)」と「[セキュリティ アドバイザリを作成する](/code-security/security-advisories/creating-a-security-advisory)」を参照してください。
{% endif %}

{% ifversion ghes or ghec or ghae %}ユーザー{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %} を使う Organization {% endif %}は、セキュリティの概要で{% ifversion ghes or ghec or ghae %}自分の{% elsif fpt %}それらの{% endif %} Organization が所有するリポジトリのセキュリティ アラートの表示、フィルター処理、並べ替えを行うことができます。 詳しくは、{% ifversion ghes or ghec or ghae %}「[セキュリティの概要について](/code-security/security-overview/about-the-security-overview)」{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %} のドキュメントの「[セキュリティの概要について](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)」をご覧ください。{% endif %}

{% ifversion ghec %}
## 参考資料

「[組織のコンプライアンス レポートへのアクセス](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)」{% endif %}
