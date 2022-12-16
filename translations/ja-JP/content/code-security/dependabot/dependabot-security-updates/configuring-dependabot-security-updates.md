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
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180770'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_security_updates %} の設定について

リポジトリ レベル、または個人アカウントまたは Organization が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 {% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

個々のリポジトリ、または個人アカウントまたは組織が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にすることができます。

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## サポートされているリポジトリ

個人アカウントまたは Organization で {% data variables.product.prodname_dependabot_security_updates %} の **[新しいリポジトリに対して自動的に有効する]** が有効になっている場合、新しく作成されたリポジトリの {% data variables.product.prodname_dependabot_security_updates %} が、{% data variables.product.prodname_dotcom %} によって、自動的に有効になります。 詳しくは、「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} の管理](#managing-dependabot-security-updates-for-your-repositories)」を参照してください。 

セキュリティ更新が有効になっているリポジトリのフォークを作成すると、{% data variables.product.prodname_dotcom %} によってフォークの {% data variables.product.prodname_dependabot_security_updates %} が自動的に無効になります。 その後、特定のフォークで {% data variables.product.prodname_dependabot_security_updates %} を有効にするかどうかを決定できます。

リポジトリでセキュリティアップデートが有効になっておらず、理由が不明の場合は、まず以下の手順のセクションに記載されている指示に従って有効にしてみてください。 セキュリティ更新プログラムがまだ機能していない場合は、{% data variables.contact.contact_support %} に問い合わせてください。

## リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する

個人アカウントまたは Organization が所有するすべての対象のリポジトリの {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることができます。 詳細については、「[個人アカウントのセキュリティと分析の設定を管理する](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)」または「[組織のセキュリティと分析の設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。 

個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることもできます。

### 個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [コードのセキュリティと分析] の [{% data variables.product.prodname_dependabot %} セキュリティ更新プログラム] の右側にある **[有効]** または **[無効]** をクリックして、機能を有効または無効にします。 {% ifversion fpt or ghec %}パブリック リポジトリの場合、この機能が常に有効になっていると、ボタンは無効になります。{% endif %} {% ifversion fpt or ghec %}![[コードのセキュリティと解析] セクションと {% data variables.product.prodname_dependabot_security_updates %} を有効にするボタンのスクリーンショット](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![[コードのセキュリティと分析] セクションと {% data variables.product.prodname_dependabot_security_updates %} を有効にするボタンのスクリーンショット](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## 構成ファイルを使用した既定の動作のオーバーライド

リポジトリに dependabot.yml ファイルを追加することで、{% data variables.product.prodname_dependabot_security_updates %} の既定の動作をオーバーライドできます。 詳細については、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)」を参照してください。 

セキュリティ更新プログラムのみを必要とし、バージョン更新プログラムを除外する場合は、特定の `package-ecosystem` のバージョン更新プログラムを防ぐために `open-pull-requests-limit` を `0` に設定できます。 詳しくは、「[`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)」をご覧ください。

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
