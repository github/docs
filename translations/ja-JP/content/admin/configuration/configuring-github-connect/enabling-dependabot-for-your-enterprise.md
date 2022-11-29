---
title: エンタープライズ向けの Dependabot の有効化
intro: '{% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} と {% data variables.product.prodname_dependabot_updates %}{% endif %} を有効にすることで、{% data variables.location.product_location %} のユーザーがコードの依存関係の脆弱性を見つけて修正できるようにすることができます。'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 009b6199e0212c531caaf48b220342853d656248
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135672'
---
## {% data variables.product.product_name %} の {% data variables.product.prodname_dependabot %} について

{% data variables.product.prodname_dependabot %} を使用すると、{% data variables.location.product_location %} のユーザーが依存関係の脆弱性を見つけて修正するのに役立ちます。{% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %} を有効にして、脆弱な依存関係についてユーザーに通知し、{% data variables.product.prodname_dependabot_updates %} を有効にして脆弱性を修正し、依存関係を最新バージョンに更新することができます。

{% data variables.product.prodname_dependabot %} は、{% data variables.location.product_location %} のサプライ チェーンのセキュリティを強化するために使用できる多くの機能の 1 つに過ぎません。 他の機能の詳細については、「[エンタープライズ向けサプライ チェーン セキュリティについて](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise)」を参照してください。

### {% data variables.product.prodname_dependabot_alerts %} について
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot_alerts %} により、{% data variables.product.prodname_dotcom %} は、{% data variables.product.prodname_advisory_database %} のデータと依存関係グラフ サービスを使い、リポジトリ内の安全でない依存関係を特定して {% data variables.location.product_location %} にアラートを作成します。

{% data reusables.repositories.tracks-vulnerabilities %}

エンタープライズに対して {% data variables.product.prodname_dependabot_alerts %} を有効にすると、脆弱性データが {% data variables.product.prodname_advisory_database %} からインスタンスに 1 時間に 1 回同期されます。 {% data variables.product.company_short %} でレビューされたアドバイザリのみが同期されます。 {% data reusables.security-advisory.link-browsing-advisory-db %} 

また、脆弱性データはいつでも手動で同期することができます。 詳細については、「[エンタープライズの脆弱性データの表示](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)」を参照してください。

{% note %}

**注:** {% data variables.product.prodname_dependabot_alerts %} を有効にすると、{% data variables.location.product_location %} のコードやコードに関する情報は、{% data variables.product.prodname_dotcom_the_website %} にアップロードされません。 

{% endnote %}

{% data variables.location.product_location %} は、脆弱性に関する情報を受け取ると、影響を受けるバージョンの依存関係を使用する {% data variables.location.product_location %} 内のリポジトリを識別して、{% data variables.product.prodname_dependabot_alerts %} を生成します。 新しい {% data variables.product.prodname_dependabot_alerts %} についてユーザーに自動的に通知するかどうかを選択できます。 

{% data variables.product.prodname_dependabot_alerts %} が有効になっているリポジトリの場合、マニフェスト ファイルまたはロック ファイルを含む既定のブランチへの任意のプッシュでスキャンがトリガーされます。 さらに、新しい脆弱性レコードが {% data variables.location.product_location %} に追加されると、{% data variables.product.product_name %} は {% data variables.location.product_location %} のすべての既存のリポジトリをスキャンして、脆弱なリポジトリについてのアラートを生成します。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% ifversion ghes %}
### {% data variables.product.prodname_dependabot_updates %} について

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data variables.product.prodname_dependabot_alerts %} を有効にした後、{% data variables.product.prodname_dependabot_updates %} を有効にすることができます。 {% data variables.product.prodname_dependabot_updates %} が {% data variables.location.product_location %} に対して有効になっている場合、ユーザーはリポジトリを構成して、依存関係の更新とセキュリティ保護が自動的に行われるようにすることができます。 

{% note %} 

**注**: {% data variables.product.product_name %} の {% data variables.product.prodname_dependabot_updates %} には、セルフホステッド ランナーを含む {% data variables.product.prodname_actions %} が必要です。

{% endnote %}

既定では、{% data variables.product.prodname_dependabot %} で使用される {% data variables.product.prodname_actions %} ランナーは、上流パッケージ マネージャーから更新されたパッケージをダウンロードするために、インターネットにアクセスする必要があります。 {% data variables.product.prodname_github_connect %} を利用する {% data variables.product.prodname_dependabot_updates %} の場合、インターネット アクセスにより、{% data variables.product.prodname_dotcom_the_website %} でホストされる依存関係とアドバイザリへのアクセスを可能にするトークンがランナーに提供されます。

{% data variables.product.prodname_dependabot_updates %} では、{% data variables.product.company_short %} によって、依存関係を更新するためのプル要求が 2 つの方法で自動的に作成されます。

- **{% data variables.product.prodname_dependabot_version_updates %}** : 追跡対象の依存関係の新しいバージョンがリリースされたときに {% data variables.product.prodname_dependabot %} がプル要求を作成できるように、ユーザーは {% data variables.product.prodname_dependabot %} 構成ファイルをリポジトリに追加します。 詳細については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)」を参照してください。
- **{% data variables.product.prodname_dependabot_security_updates %}** : ユーザーは、{% data variables.product.prodname_dotcom %} でリポジトリの依存関係グラフのいずれかの依存関係で脆弱性が検出されたときに、{% data variables.product.prodname_dependabot %} がプル要求を作成できるようにリポジトリ設定を切り替えます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)」と「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} の有効化

{% data variables.product.prodname_dependabot_alerts %} を有効にする前に、次のことを行います。
- {% data variables.product.prodname_github_connect %} を有効にする必要がある。 詳細については、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。{% ifversion ghes %}
- 依存関係グラフを有効にする必要がある。 詳細については、「[企業の依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」を参照してください。{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. [{% data variables.product.prodname_dependabot %}] の [ユーザーはオープン ソース コードの依存関係の脆弱性アラートを受け取ることができる] の右側にあるドロップダウン メニューを選択し、 **[有効 (通知なし)]** をクリックします。 必要に応じて、通知ありでアラートを有効にするには、 **[有効 (通知あり)]** をクリックします。

   ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニューのスクリーンショット](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. [リポジトリは脆弱性のスキャンが可能] で、ドロップダウンメニューを選択して、 **[有効 (通知なし)]** を選択します。 必要に応じて、通知ありでアラートを有効にするには、 **[有効 (通知あり)]** をクリックします。
   ![脆弱性に対するリポジトリのスキャンを有効化するドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **ヒント**: メールの過負荷を避けるため、最初の数日間は {% data variables.product.prodname_dependabot_alerts %} を通知なしに設定することをお勧めします。 数日後、通知を有効化して、通常どおり {% data variables.product.prodname_dependabot_alerts %} を受信できます。

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## {% data variables.product.prodname_dependabot_updates %} の有効化

エンタープライズで {% data variables.product.prodname_dependabot_alerts %} を有効にした後、{% data variables.product.prodname_dependabot_updates %} を有効にできます。

{% ifversion ghes %}{% data reusables.dependabot.enabling-actions-for-ghes %}詳しくは、「[GitHub Enterprise Server の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」をご覧ください。

エンタープライズでクラスタリングを使用している場合、{% data variables.product.prodname_dependabot_updates %} は {% data variables.product.product_name %} ではサポートされません。
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. [セキュリティ] で、 **{% data variables.product.prodname_dependabot_security_updates %}** を選択します。

   ![{% data variables.product.prodname_dependabot_security_updates %} を有効または無効にするチェックボックスのスクリーンショット](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. **[Visit your instance]\(インスタンスにアクセスする)** をクリックします。
1. 依存関係を更新する pull request を作成するように、専用セルフホステッド ランナーを構成します。 これは、ワークフローで特定のランナー ラベルが使われるために必要です。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot_updates %} のセルフホステッド ランナーの管理](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)」を参照してください。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. [{% data variables.product.prodname_dependabot %}] で、[ユーザーは脆弱でないオープン ソース コードの依存関係に簡単にアップグレードできる] の右側にある **[有効]** をクリックします。

   ![脆弱な依存関係の更新を有効にするドロップダウン メニューのスクリーンショット](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

{% data variables.product.prodname_dependabot_alerts %} を有効にする場合は、{% data variables.product.prodname_dependabot_security_updates %} に対して {% data variables.product.prodname_actions %} を設定することも検討する必要があります。 この機能により、開発者は依存関係の脆弱性を修正できます。 詳細については、「[エンタープライズでの {% data variables.product.prodname_dependabot_updates %} のセルフホステッド ランナーの管理](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)」を参照してください。

セキュリティを強化する必要がある場合は、プライベート レジストリを使用するように {% data variables.product.prodname_dependabot %} を構成することをお勧めします。 詳細については、「[{% data variables.product.prodname_dependabot %} に対する暗号化されたシークレットを管理する](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% endif %}
