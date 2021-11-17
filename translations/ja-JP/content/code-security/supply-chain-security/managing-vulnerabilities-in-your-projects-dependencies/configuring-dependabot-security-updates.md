---
title: Dependabot のセキュリティアップデートを設定する
intro: '{% data variables.product.prodname_dependabot_security_updates %} または手動のプルリクエストを使用して、脆弱性のある依存関係を簡単に更新できます。'
shortTitle: セキュリティアップデートの設定
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
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
---

<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_security_updates %} の設定について

{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

個々のリポジトリ、またはユーザアカウントまたは Organization が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にすることができます。 詳しい情報については、以下の「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」を参照してください。

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## サポートされているリポジトリ

{% data variables.product.prodname_dotcom %} は、これらの前提条件を満たすすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を自動的に有効にします。

{% note %}

**注釈**: リポジトリが以下の前提条件のいくつかを満たしていない場合でも、手動で {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 たとえば、「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」の手順に従って、フォークまたは直接サポートされていないパッケージマネージャーで {% data variables.product.prodname_dependabot_security_updates %} を有効にできます。

{% endnote %}

| 自動有効化の前提条件                                                                                                                      | 詳細情報                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| リポジトリがフォークではない                                                                                                                  | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」                                                                                  |
| リポジトリがアーカイブされていない                                                                                                               | "[Archiving repositories](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| リポジトリがパブリックである、またはリポジトリがプライベートであり、リポジトリの設定で {% data variables.product.prodname_dotcom %}、依存関係グラフ、および脆弱性アラートによる読み取り専用分析が有効化されている | 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」 
{% endif %}
| リポジトリに {% data variables.product.prodname_dotcom %} がサポートするパッケージエコシステムの依存関係マニフェストファイルが含まれている                                    | 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」                              |
| {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して無効になっていない                                         | 「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」              |

リポジトリでセキュリティアップデートが有効になっておらず、理由が不明の場合は、まず以下の手順のセクションに記載されている指示に従って有効にしてみてください。 If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する

個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にできます（下記参照）。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることもできます。 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% data variables.product.prodname_dependabot_security_updates %} には特定のリポジトリ設定が必要です。 詳しい情報については、「[サポートされているリポジトリについて](#supported-repositories)」を参照してください。

### 個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. [Configure security and analysis features] の [{% data variables.product.prodname_dependabot %} security updates] の右側にある [**Enable**] または [**Disable**] をクリックします。
  {% ifversion fpt or ghec %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-button.png){% else %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}


## 参考リンク

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec %}
- "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"{% endif %}
- 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」
