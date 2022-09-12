---
title: Configuring Dependabot security updates (Dependabot セキュリティ アップデートの構成)
intro: '{% data variables.product.prodname_dependabot_security_updates %} または手動のプルリクエストを使用して、脆弱性のある依存関係を簡単に更新できます。'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d45ba3ee3e45bcab91d9ddafdb8fb23da4963c8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146027956'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_security_updates %} の設定について

{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

個々のリポジトリ、または個人アカウントまたは組織が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にすることができます。 詳細については、以下の「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」を参照してください。

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## サポートされているリポジトリ

{% data variables.product.prodname_dotcom %} は、これらの前提条件を満たすすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を自動的に有効にします。

{% note %}

**注**: リポジトリが以下の前提条件のいくつかを満たしていない場合でも、手動で {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 たとえば、「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」の手順に従って、フォークまたは直接サポートされていないパッケージ マネージャーで {% data variables.product.prodname_dependabot_security_updates %} を有効にできます。

{% endnote %}

| 自動有効化の前提条件 | 詳細情報 |
| ----------------- | ----------------------- |
| リポジトリがフォークではない | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」 |
| リポジトリがアーカイブされていない | 「[リポジトリのアーカイブ](/github/creating-cloning-and-archiving-repositories/archiving-repositories)」 |{% ifversion fpt or ghec %}
| リポジトリがパブリックである、またはリポジトリがプライベートであり、リポジトリの設定で {% data variables.product.prodname_dotcom %}、依存関係グラフ、および脆弱性アラートによる読み取り専用分析が有効化されている | 「[プライベート リポジトリ用のデータ利用設定を管理する](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)」 |{% endif %}
| リポジトリに {% data variables.product.prodname_dotcom %} がサポートするパッケージエコシステムの依存関係マニフェストファイルが含まれている | 「[サポートされているパッケージ エコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」 |
| {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して無効になっていない | 「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」 |

リポジトリでセキュリティアップデートが有効になっておらず、理由が不明の場合は、まず以下の手順のセクションに記載されている指示に従って有効にしてみてください。 セキュリティ更新プログラムがまだ機能していない場合は、{% data variables.contact.contact_support %} に問い合わせてください。

## リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する

個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にできます（下記参照）。


個人アカウントまたは組織が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることもできます。 詳細については、「[個人アカウントのセキュリティと分析の設定を管理する](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)」または「[組織のセキュリティと分析の設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 

{% data variables.product.prodname_dependabot_security_updates %} には特定のリポジトリ設定が必要です。 詳細については、「[サポートされているリポジトリ](#supported-repositories)」を参照してください。

### 個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [コードのセキュリティと分析] の [{% data variables.product.prodname_dependabot %} セキュリティ更新プログラム] の右側にある **[有効]** または **[無効]** をクリックして、機能を有効または無効にします。 {% ifversion fpt or ghec %}パブリック リポジトリの場合、この機能が常に有効になっている場合、ボタンは無効になります。{% endif %} {% ifversion fpt or ghec %}![[コードのセキュリティと分析] セクションと {% data variables.product.prodname_dependabot_security_updates %} を有効にするボタンのスクリーンショット](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae-issue-7044 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![[コードのセキュリティと分析] セクションと {% data variables.product.prodname_dependabot_security_updates %} を有効にするボタンのスクリーンショット](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## 構成ファイルを使用した既定の動作のオーバーライド

リポジトリに dependabot.yml ファイルを追加することで、{% data variables.product.prodname_dependabot_security_updates %} の既定の動作をオーバーライドできます。 詳細については、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)」を参照してください。 

セキュリティ更新プログラムのみを必要とし、バージョン更新プログラムを除外する場合は、特定の `package-ecosystem` のバージョン更新プログラムを防ぐために `open-pull-request-limit` を `0` に設定できます。 詳しくは、「[`open-pull-request-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)」をご覧ください。

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

セキュリティ更新プログラムで使用可能な構成オプションの詳しい情報については、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)」をご覧ください。

## 参考資料

- 「[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」
- 「[{% data variables.product.prodname_dependabot_alerts %} を構成する](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)」{% ifversion fpt or ghec %}
- 「[プライベート リポジトリのデータ利用設定を管理する](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)」{% endif %}
- 「[サポートされているパッケージ エコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」
